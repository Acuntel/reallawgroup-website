import { Metadata } from "next";
import { Play, Video } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Videos & Resources",
  description:
    "Educational video library from REAL Law Group covering real estate law, estate planning, and business law in Illinois.",
  openGraph: {
    title: "Videos & Resources | REAL Law Group",
    description:
      "Watch educational videos on real estate law, estate planning, and business law from REAL Law Group.",
    url: "/resources/videos",
  },
};

const placeholderVideos = [
  {
    title: "Understanding Attorney Review in Illinois",
    description:
      "What happens during the five-day attorney review period and why it matters for buyers and sellers.",
  },
  {
    title: "Closing Day: What to Expect",
    description:
      "A walkthrough of the closing process for residential real estate transactions in Chicagoland.",
  },
  {
    title: "Estate Planning Basics for Homeowners",
    description:
      "How trusts, wills, and powers of attorney protect your property and your family.",
  },
  {
    title: "Earnest Money Explained",
    description:
      "How earnest money deposits work in Illinois and when you can get your money back.",
  },
  {
    title: "Starting a Business in Illinois",
    description:
      "LLC vs. corporation, operating agreements, and the legal steps to form your business correctly.",
  },
  {
    title: "Title Insurance: Do You Need It?",
    description:
      "What title insurance covers, who pays for it, and why it protects your investment.",
  },
];

const categories = [
  "Real Estate",
  "Estate Planning",
  "Business Law",
  "Buyer Tips",
  "Seller Tips",
  "FAQ",
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
            Educational video content from REAL Law Group.
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
        <div className="container-custom max-w-5xl">
          <p className="text-text-muted leading-relaxed mb-6 text-lg max-w-3xl">
            REAL Law Group&apos;s video library features educational content
            covering real estate law, estate planning, and business law in
            Illinois. Whether you are buying your first home, setting up a
            trust, or forming a business entity, these resources break down the
            legal concepts you need to understand.
          </p>
          <p className="text-text-muted leading-relaxed mb-12">
            New videos are added regularly. Check back often or contact our
            office at{" "}
            <a
              href="tel:6302997600"
              className="text-secondary font-semibold hover:underline transition-colors duration-200"
            >
              (630) 299-7600
            </a>{" "}
            if you have a topic you would like us to cover.
          </p>

          {/* Categories */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderVideos.map((video, i) => (
              <div
                key={i}
                className="rounded-xl bg-background border border-border overflow-hidden group"
              >
                <div className="aspect-video bg-primary/5 flex flex-col items-center justify-center gap-3 relative">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-200">
                    <Play className="w-6 h-6 text-secondary ml-0.5" />
                  </div>
                  <span className="text-xs font-semibold text-text-muted/60 uppercase tracking-wider">
                    Coming Soon
                  </span>
                </div>
                <div className="p-5">
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
