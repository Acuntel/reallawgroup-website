import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import StatsBar from "@/components/sections/StatsBar";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PracticeAreasSection from "@/components/sections/PracticeAreasSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import AboutPreview from "@/components/sections/AboutPreview";
import CTABanner from "@/components/sections/CTABanner";
import ServiceAreas from "@/components/sections/ServiceAreas";

export const metadata: Metadata = {
  title: "Chicago's Trusted Real Estate Attorneys | REAL Law Group",
  description:
    "Personalized legal guidance for real estate, business, and estate planning. Serving Chicagoland since 2016. 275+ five star reviews. Call (630) 299-7600 for a free consultation.",
  alternates: { canonical: "https://reallawgroup.com/" },
  openGraph: {
    title: "Chicago's Trusted Real Estate Attorneys | REAL Law Group",
    description:
      "Personalized legal guidance for real estate, business, and estate planning. Serving Chicagoland since 2016.",
    url: "https://reallawgroup.com/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <StatsBar />
      <PracticeAreasSection />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialCarousel />
      {/* Mid-page CTA */}
      <section className="py-12 sm:py-16 bg-light-gold">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl text-primary mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-text-muted mb-6">
            Schedule your free consultation with an experienced attorney today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary px-8 py-3.5 rounded-lg font-semibold text-center"
            >
              Free Consultation
            </a>
            <a
              href="tel:+16302997600"
              className="btn-outline px-8 py-3.5 rounded-lg font-semibold text-center"
            >
              Call (630) 299-7600
            </a>
          </div>
        </div>
      </section>
      <AboutPreview />
      <ServiceAreas />
      <CTABanner />
    </>
  );
}
