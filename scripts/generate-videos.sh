#!/bin/bash
# Generate educational slide videos for REAL Law Group
# Uses ffmpeg to create animated text-on-background videos

OUTPUT_DIR="/Users/bradyschwartz/Desktop/Client Websites/RealLaw website/reallawgroup-next/public/videos"
FONT="/System/Library/Fonts/Helvetica.ttc"
BG_COLOR="#1B2D4F"
GOLD="#C8A96E"
WHITE="#FFFFFF"
LIGHT="#E0E0E0"
WIDTH=1280
HEIGHT=720
FPS=30

generate_video() {
  local filename="$1"
  local title="$2"
  shift 2
  local slides=("$@")
  local num_slides=${#slides[@]}
  local slide_duration=4
  local fade_duration=0.5
  local total_duration=$(( num_slides * slide_duration ))

  # Build filter complex
  local filter=""
  local inputs=""

  # Create background
  filter="color=c=${BG_COLOR}:s=${WIDTH}x${HEIGHT}:d=${total_duration}:r=${FPS}[bg];"

  # Add gold accent bar at top
  filter+="color=c=${GOLD}:s=${WIDTH}x4:d=${total_duration}:r=${FPS}[bar];"
  filter+="[bg][bar]overlay=0:0[base];"

  # Add REAL Law Group watermark bottom right
  filter+="[base]drawtext=fontfile=${FONT}:text='REAL Law Group':fontcolor=${GOLD}@0.3:fontsize=18:x=w-tw-40:y=h-40[watermarked];"

  # Add title slide (first slide is the title)
  local prev="watermarked"

  for i in "${!slides[@]}"; do
    local slide_text="${slides[$i]}"
    local start_time=$(( i * slide_duration ))
    local end_time=$(( start_time + slide_duration ))
    local tag="s${i}"

    if [ $i -eq 0 ]; then
      # Title slide - larger font, centered, with gold color
      filter+="[${prev}]drawtext=fontfile=${FONT}:text='${slide_text}':fontcolor=${GOLD}:fontsize=48:x=(w-tw)/2:y=(h-th)/2-40:enable='between(t,${start_time},${end_time})':alpha='if(lt(t-${start_time},${fade_duration}),(t-${start_time})/${fade_duration},if(gt(t,${end_time}-${fade_duration}),(${end_time}-t)/${fade_duration},1))'[${tag}a];"
      # Subtitle
      filter+="[${tag}a]drawtext=fontfile=${FONT}:text='REAL Law Group | reallawgroup.com':fontcolor=${WHITE}@0.6:fontsize=22:x=(w-tw)/2:y=(h-th)/2+30:enable='between(t,${start_time},${end_time})':alpha='if(lt(t-${start_time},${fade_duration}),(t-${start_time})/${fade_duration},if(gt(t,${end_time}-${fade_duration}),(${end_time}-t)/${fade_duration},1))'[${tag}];"
    else
      # Content slides - bullet point style
      # Slide number indicator
      filter+="[${prev}]drawtext=fontfile=${FONT}:text='${i}/${num_slides}':fontcolor=${GOLD}@0.4:fontsize=16:x=40:y=h-40:enable='between(t,${start_time},${end_time})'[${tag}n];"
      # Main content text
      filter+="[${tag}n]drawtext=fontfile=${FONT}:text='${slide_text}':fontcolor=${WHITE}:fontsize=36:x=(w-tw)/2:y=(h-th)/2:enable='between(t,${start_time},${end_time})':alpha='if(lt(t-${start_time},${fade_duration}),(t-${start_time})/${fade_duration},if(gt(t,${end_time}-${fade_duration}),(${end_time}-t)/${fade_duration},1))'[${tag}];"
    fi
    prev="${tag}"
  done

  # Final output
  filter+="[${prev}]format=yuv420p[v]"

  ffmpeg -y -f lavfi -i "anullsrc=r=44100:cl=stereo" \
    -filter_complex "${filter}" \
    -map "[v]" -map 0:a \
    -c:v libx264 -preset fast -crf 28 -tune stillimage \
    -c:a aac -b:a 32k \
    -t ${total_duration} \
    -movflags +faststart \
    "${OUTPUT_DIR}/${filename}" 2>/dev/null

  echo "Created: ${filename} (${total_duration}s)"
}

echo "Generating educational videos..."

# 1. Real Estate Closing Process
generate_video "closing-process.mp4" \
  "The Real Estate Closing Process" \
  "The Real Estate Closing Process" \
  "Step 1: Sign the Purchase Contract" \
  "Step 2: Attorney Review Period (5 Days)" \
  "Step 3: Home Inspection & Negotiations" \
  "Step 4: Secure Financing & Appraisal" \
  "Step 5: Title Search & Insurance" \
  "Step 6: Final Walkthrough" \
  "Step 7: Closing Day — Sign & Get Keys" \
  "Questions? Call (630) 299-7600"

# 2. Attorney Review Explained
generate_video "attorney-review.mp4" \
  "Attorney Review in Illinois" \
  "Attorney Review in Illinois" \
  "Buyers and sellers get 5 business days" \
  "Your attorney reviews the contract terms" \
  "Modifications can be requested by either side" \
  "Inspect contingencies and protect your rights" \
  "The deal is not final until review ends" \
  "Never skip attorney review — call us" \
  "Free Consultation: (630) 299-7600"

# 3. Earnest Money Deposits
generate_video "earnest-money.mp4" \
  "Earnest Money Deposits" \
  "Earnest Money Deposits Explained" \
  "A good-faith deposit showing buyer commitment" \
  "Typically 1-3% of purchase price in Illinois" \
  "Held in escrow by seller attorney or title co" \
  "Refundable during attorney review period" \
  "Refundable if financing falls through" \
  "Applied toward your down payment at closing" \
  "Learn more at reallawgroup.com/emd"

# 4. Closing Costs Explained
generate_video "closing-costs.mp4" \
  "Closing Costs Explained" \
  "Understanding Closing Costs" \
  "Buyers: Title insurance, attorney, recording fees" \
  "Sellers: Transfer taxes, commission, attorney" \
  "Illinois state transfer tax: 0.1% of sale price" \
  "Cook County adds additional transfer taxes" \
  "Chicago has city-level transfer taxes too" \
  "Use our calculator at reallawgroup.com" \
  "Get a custom estimate — call (630) 299-7600"

# 5. Estate Planning Basics
generate_video "estate-planning.mp4" \
  "Estate Planning Basics" \
  "Estate Planning Basics" \
  "A will directs asset distribution after death" \
  "A trust avoids probate and keeps things private" \
  "Power of attorney: who decides if you cannot" \
  "Healthcare directive: your medical wishes" \
  "Land trusts protect Illinois property owners" \
  "Review your plan every 3-5 years" \
  "Start planning today — (630) 299-7600"

# 6. Land Trusts in Illinois
generate_video "land-trusts.mp4" \
  "Illinois Land Trusts" \
  "Illinois Land Trusts Explained" \
  "A land trust holds property through a trustee" \
  "You keep full control as the beneficiary" \
  "Your name stays off public property records" \
  "Avoids probate — beneficiary transfers easily" \
  "Asset protection from creditors and lawsuits" \
  "Ideal for investors and landlords" \
  "Set up a land trust — call (630) 299-7600"

# 7. For Sale By Owner
generate_video "fsbo.mp4" \
  "Selling FSBO in Illinois" \
  "For Sale By Owner in Illinois" \
  "You can sell without an agent in Illinois" \
  "But you still need a real estate attorney" \
  "Attorney handles contract and disclosures" \
  "Title search, closing docs, and recording" \
  "Save thousands on listing commission" \
  "Attorney fees are a fraction of agent fees" \
  "FSBO help — call (630) 299-7600"

# 8. HUD Closings
generate_video "hud-closings.mp4" \
  "HUD Closings" \
  "HUD Home Closings Explained" \
  "HUD homes: foreclosed FHA-insured properties" \
  "Sold through an online bidding system" \
  "Strict 45-60 day closing timeline" \
  "Properties are sold completely as-is" \
  "Extensions available but cost per-diem fees" \
  "REAL Law Group is a HUD closing attorney" \
  "Get HUD closing help — (630) 299-7600"

# 9. Inherited Property
generate_video "inherited-property.mp4" \
  "Inherited Property Guide" \
  "What To Do With Inherited Property" \
  "Options: keep it, sell it, or transfer it" \
  "Most inherited homes go through probate" \
  "Probate takes 6-12 months in Illinois" \
  "Land trusts and joint tenancy avoid probate" \
  "We connect you with trusted cash buyers" \
  "Handling title issues and outstanding liens" \
  "Inherited a home? Call (630) 299-7600"

echo ""
echo "All videos generated in: ${OUTPUT_DIR}"
ls -lh "${OUTPUT_DIR}"/*.mp4
