import { Metadata } from "next";
import { Video } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Videos & Resources",
  description:
    "Educational video library from REAL Law Group covering real estate closings, attorney review, earnest money, closing costs, estate planning, land trusts, and more.",
  openGraph: {
    title: "Videos & Resources | REAL Law Group",
    description:
      "Watch educational videos on real estate law, estate planning, and business law from REAL Law Group.",
    url: "/resources/videos",
  },
};

const videos = [
  {
    title: "The Real Estate Closing Process",
    description:
      "A step-by-step walkthrough of what happens from contract signing through closing day in Illinois.",
    src: "/videos/closing-process.mp4",
    category: "Real Estate",
  },
  {
    title: "Attorney Review in Illinois",
    description:
      "What happens during the 5-business-day attorney review period and why you should never skip it.",
    src: "/videos/attorney-review.mp4",
    category: "Buyer Tips",
  },
  {
    title: "Earnest Money Deposits",
    description:
      "How earnest money works, how much to put down, and when you can get it back in Illinois.",
    src: "/videos/earnest-money.mp4",
    category: "Buyer Tips",
  },
  {
    title: "Closing Costs Explained",
    description:
      "Understand what buyers and sellers each pay at closing, including Illinois and Cook County transfer taxes.",
    src: "/videos/closing-costs.mp4",
    category: "Real Estate",
  },
  {
    title: "Estate Planning Basics",
    description:
      "Wills, trusts, powers of attorney, and healthcare directives — the essentials every homeowner should know.",
    src: "/videos/estate-planning.mp4",
    category: "Estate Planning",
  },
  {
    title: "Illinois Land Trusts",
    description:
      "How land trusts provide privacy, asset protection, and probate avoidance for Illinois property owners.",
    src: "/videos/land-trusts.mp4",
    category: "Real Estate",
  },
  {
    title: "Selling FSBO in Illinois",
    description:
      "Why for-sale-by-owner sellers in Illinois still need a real estate attorney and how much you can save.",
    src: "/videos/fsbo.mp4",
    category: "Seller Tips",
  },
  {
    title: "HUD Home Closings",
    description:
      "The HUD home buying process, strict timelines, as-is purchases, and extension request fees.",
    src: "/videos/hud-closings.mp4",
    category: "Real Estate",
  },
  {
    title: "Inherited Property Guide",
    description:
      "Your options when you inherit property in Illinois — probate, selling, transferring, and working with cash buyers.",
    src: "/videos/inherited-property.mp4",
    category: "Estate Planning",
  },
];

const categories = [
  "All",
  "Real Estate",
  "Estate Planning",
  "Buyer Tips",
  "Seller Tips",
];

export default function VideosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Resources", url: "/resources" },
              { name: "Videos & Resources" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-4">
            <Video className="w-8 h-8 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold">
              Videos & Resources
            </h1>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl">
            Educational video content covering real estate law, estate planning,
            and more.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Videos & Resources" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <p className="text-text-muted leading-relaxed mb-12 text-lg max-w-3xl">
            Short educational videos from REAL Law Group breaking down the legal
            concepts Illinois buyers, sellers, and property owners need to
            understand. Have a topic you want us to cover? Call{" "}
            <a
              href="tel:6302997600"
              className="text-secondary font-semibold hover:underline transition-colors duration-200"
            >
              (630) 299-7600
            </a>
            .
          </p>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 rounded-full bg-background border border-border text-sm font-semibold text-text-muted transition-colors duration-200 hover:border-secondary/40 hover:text-secondary cursor-default"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, i) => (
              <div
                key={i}
                className="rounded-xl bg-background border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-video bg-primary/5 relative">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    playsInline
                    poster=""
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-5">
                  <span className="inline-block text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
                    {video.category}
                  </span>
                  <h3 className="text-base font-heading font-semibold text-primary mb-2 leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Have a legal question? We're here to help."
        text="Contact REAL Law Group for guidance on real estate, estate planning, or business law matters in Illinois."
      />
    </>
  );
}
