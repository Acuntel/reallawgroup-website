#!/usr/bin/env python3
"""Generate educational slide videos for REAL Law Group."""

import os
import subprocess
import tempfile
import shutil
from PIL import Image, ImageDraw, ImageFont

OUTPUT_DIR = "/Users/bradyschwartz/Desktop/Client Websites/RealLaw website/reallawgroup-next/public/videos"
W, H = 1280, 720
BG = (27, 45, 79)       # #1B2D4F
GOLD = (200, 169, 110)  # #C8A96E
WHITE = (255, 255, 255)
LIGHT = (180, 190, 210)
DARK_BG = (15, 25, 35)  # slightly darker for alt slides

# Try system fonts
FONT_PATHS = [
    "/System/Library/Fonts/SFNSDisplay.ttf",
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    "/System/Library/Fonts/Helvetica.ttc",
    "/Library/Fonts/Arial.ttf",
]

def get_font(size, bold=False):
    for fp in FONT_PATHS:
        if os.path.exists(fp):
            try:
                return ImageFont.truetype(fp, size)
            except:
                continue
    return ImageFont.load_default()

def draw_gold_bar(draw):
    draw.rectangle([0, 0, W, 5], fill=GOLD)

def draw_watermark(draw):
    font = get_font(16)
    draw.text((W - 220, H - 35), "REAL Law Group", fill=(*GOLD, 80), font=font)

def draw_slide_number(draw, num, total):
    font = get_font(14)
    draw.text((40, H - 35), f"{num}/{total}", fill=(*LIGHT, 100), font=font)

def wrap_text(text, font, max_width):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        test = f"{current} {word}".strip()
        bbox = font.getbbox(test)
        if bbox[2] <= max_width:
            current = test
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines

def create_title_slide(title, subtitle="REAL Law Group | reallawgroup.com"):
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)
    draw_gold_bar(draw)

    # Decorative accent lines
    draw.rectangle([W//2 - 60, H//2 - 80, W//2 + 60, H//2 - 78], fill=GOLD)

    # Title
    font = get_font(52)
    lines = wrap_text(title, font, W - 200)
    total_h = len(lines) * 62
    y = (H - total_h) // 2 - 20
    for line in lines:
        bbox = font.getbbox(line)
        tw = bbox[2] - bbox[0]
        draw.text(((W - tw) // 2, y), line, fill=GOLD, font=font)
        y += 62

    # Subtitle
    sfont = get_font(22)
    bbox = sfont.getbbox(subtitle)
    tw = bbox[2] - bbox[0]
    draw.text(((W - tw) // 2, y + 30), subtitle, fill=LIGHT, font=sfont)

    # Bottom accent
    draw.rectangle([W//2 - 40, H - 80, W//2 + 40, H - 78], fill=GOLD)

    return img

def create_content_slide(text, slide_num, total, use_alt_bg=False):
    bg = DARK_BG if use_alt_bg else BG
    img = Image.new("RGB", (W, H), bg)
    draw = ImageDraw.Draw(img)
    draw_gold_bar(draw)
    draw_watermark(draw)
    draw_slide_number(draw, slide_num, total)

    # Gold bullet dot
    draw.ellipse([90, H//2 - 8, 106, H//2 + 8], fill=GOLD)

    # Main text
    font = get_font(38)
    lines = wrap_text(text, font, W - 260)
    total_h = len(lines) * 50
    y = (H - total_h) // 2
    for line in lines:
        draw.text((130, y), line, fill=WHITE, font=font)
        y += 50

    return img

def create_cta_slide(text):
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)
    draw_gold_bar(draw)

    # CTA box
    box_w, box_h = 700, 200
    bx = (W - box_w) // 2
    by = (H - box_h) // 2
    draw.rounded_rectangle([bx, by, bx + box_w, by + box_h], radius=16, outline=GOLD, width=2)

    # CTA text
    font = get_font(32)
    lines = wrap_text(text, font, box_w - 60)
    total_h = len(lines) * 44
    y = by + (box_h - total_h) // 2
    for line in lines:
        bbox = font.getbbox(line)
        tw = bbox[2] - bbox[0]
        draw.text(((W - tw) // 2, y), line, fill=GOLD, font=font)
        y += 44

    # Website
    sfont = get_font(20)
    web = "reallawgroup.com"
    bbox = sfont.getbbox(web)
    tw = bbox[2] - bbox[0]
    draw.text(((W - tw) // 2, by + box_h + 30), web, fill=LIGHT, font=sfont)

    return img

def slides_to_video(slides, filename, slide_duration=4):
    tmpdir = tempfile.mkdtemp()
    try:
        # Save each slide as PNG, repeated for duration
        frame_files = []
        for i, slide in enumerate(slides):
            path = os.path.join(tmpdir, f"slide_{i:03d}.png")
            slide.save(path)
            frame_files.append(path)

        # Create concat file
        concat_path = os.path.join(tmpdir, "concat.txt")
        with open(concat_path, "w") as f:
            for path in frame_files:
                f.write(f"file '{path}'\n")
                f.write(f"duration {slide_duration}\n")
            # Last frame needs to be listed again for concat demuxer
            f.write(f"file '{frame_files[-1]}'\n")

        output_path = os.path.join(OUTPUT_DIR, filename)

        cmd = [
            "ffmpeg", "-y",
            "-f", "concat", "-safe", "0", "-i", concat_path,
            "-f", "lavfi", "-i", "anullsrc=r=44100:cl=stereo",
            "-vf", "format=yuv420p,fps=30",
            "-c:v", "libx264", "-preset", "fast", "-crf", "26",
            "-tune", "stillimage",
            "-c:a", "aac", "-b:a", "32k",
            "-t", str(len(slides) * slide_duration),
            "-movflags", "+faststart",
            "-shortest",
            output_path,
        ]
        result = subprocess.run(cmd, capture_output=True, text=True)
        if result.returncode != 0:
            print(f"  ERROR: {result.stderr[-200:]}")
        else:
            size = os.path.getsize(output_path) / 1024
            print(f"  Created: {filename} ({len(slides)} slides, {len(slides)*slide_duration}s, {size:.0f}KB)")
    finally:
        shutil.rmtree(tmpdir)


# Define all videos
videos = [
    {
        "filename": "closing-process.mp4",
        "title": "The Real Estate Closing Process",
        "slides": [
            "Step 1: Sign the Purchase Contract",
            "Step 2: Attorney Review Period (5 Business Days)",
            "Step 3: Home Inspection & Negotiations",
            "Step 4: Secure Financing & Appraisal",
            "Step 5: Title Search & Title Insurance",
            "Step 6: Final Walkthrough of the Property",
            "Step 7: Closing Day - Sign Documents & Get Keys",
        ],
        "cta": "Questions? Call (630) 299-7600",
    },
    {
        "filename": "attorney-review.mp4",
        "title": "Attorney Review in Illinois",
        "slides": [
            "Buyers and sellers each get 5 business days",
            "Your attorney reviews every contract term",
            "Modifications can be requested by either side",
            "Protects your rights before the deal is final",
            "The deal is NOT binding until review ends",
            "Never waive attorney review - it's free protection",
        ],
        "cta": "Free Consultation: (630) 299-7600",
    },
    {
        "filename": "earnest-money.mp4",
        "title": "Earnest Money Deposits",
        "slides": [
            "A good-faith deposit showing buyer commitment",
            "Typically 1-3% of purchase price in Illinois",
            "Held in escrow by seller's attorney or title company",
            "Refundable during the attorney review period",
            "Refundable if financing contingency fails",
            "Applied toward your down payment at closing",
        ],
        "cta": "Learn more at reallawgroup.com/emd",
    },
    {
        "filename": "closing-costs.mp4",
        "title": "Closing Costs Explained",
        "slides": [
            "Buyers pay: title insurance, attorney, recording fees",
            "Sellers pay: transfer taxes, commission, attorney fees",
            "Illinois state transfer tax: 0.1% of sale price",
            "Cook County adds an additional transfer tax",
            "Chicago adds city-level transfer taxes on top",
            "Use our free calculator at reallawgroup.com",
        ],
        "cta": "Get a custom estimate - (630) 299-7600",
    },
    {
        "filename": "estate-planning.mp4",
        "title": "Estate Planning Basics",
        "slides": [
            "A will directs how your assets are distributed",
            "A trust avoids probate and keeps things private",
            "Power of attorney: who decides if you can't",
            "Healthcare directive: your medical wishes on record",
            "Land trusts protect Illinois property owners",
            "Review your estate plan every 3-5 years",
        ],
        "cta": "Start planning today - (630) 299-7600",
    },
    {
        "filename": "land-trusts.mp4",
        "title": "Illinois Land Trusts",
        "slides": [
            "A land trust holds property through a trustee",
            "You keep full control as the beneficiary",
            "Your name stays off public property records",
            "Avoids probate - beneficiary interest transfers easily",
            "Asset protection from creditors and lawsuits",
            "Ideal for real estate investors and landlords",
        ],
        "cta": "Set up a land trust - (630) 299-7600",
    },
    {
        "filename": "fsbo.mp4",
        "title": "Selling FSBO in Illinois",
        "slides": [
            "You can sell your home without an agent",
            "But Illinois sellers still need an attorney",
            "Attorney handles contracts, disclosures, and title",
            "We coordinate with buyer's lender and title company",
            "Save thousands in listing agent commission",
            "Attorney fees are a fraction of agent costs",
        ],
        "cta": "FSBO help - call (630) 299-7600",
    },
    {
        "filename": "hud-closings.mp4",
        "title": "HUD Home Closings",
        "slides": [
            "HUD homes are foreclosed FHA-insured properties",
            "Buyers bid through HUD's online system",
            "Strict 45-60 day closing timeline applies",
            "All properties are sold completely as-is",
            "Extensions available but cost per-diem fees",
            "REAL Law Group is a HUD closing attorney",
        ],
        "cta": "Get HUD closing help - (630) 299-7600",
    },
    {
        "filename": "inherited-property.mp4",
        "title": "Inherited Property Guide",
        "slides": [
            "Your options: keep it, sell it, or transfer it",
            "Most inherited homes must go through probate",
            "Illinois probate typically takes 6-12 months",
            "Land trusts and joint tenancy can avoid probate",
            "We connect families with trusted cash buyers",
            "We handle title issues, liens, and closing",
        ],
        "cta": "Inherited a home? Call (630) 299-7600",
    },
]

os.makedirs(OUTPUT_DIR, exist_ok=True)

print("Generating educational videos for REAL Law Group...\n")

for v in videos:
    print(f"  Generating: {v['title']}...")
    all_slides = []

    # Title slide
    all_slides.append(create_title_slide(v["title"]))

    # Content slides
    total = len(v["slides"])
    for i, text in enumerate(v["slides"]):
        all_slides.append(create_content_slide(text, i + 1, total, use_alt_bg=(i % 2 == 1)))

    # CTA slide
    all_slides.append(create_cta_slide(v["cta"]))

    slides_to_video(all_slides, v["filename"], slide_duration=4)

print("\nDone! All videos in:", OUTPUT_DIR)
