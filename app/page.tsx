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
  title: "Chicago Personal Injury Lawyers | The Kryder Law Group",
  description:
    "Over $100 million recovered for injured clients. Car accidents, truck accidents, medical malpractice, wrongful death. Free consultations 24/7. Call (312) 223-1700.",
  alternates: { canonical: "https://kryderlaw.com/" },
  openGraph: {
    title: "Chicago Personal Injury Lawyers | The Kryder Law Group",
    description:
      "Over $100 million recovered. Injuries hurt — we make the legal process painless. Free consultations 24/7.",
    url: "https://kryderlaw.com/",
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
            Ready to Get the Compensation You Deserve?
          </h2>
          <p className="text-text-muted mb-6">
            Talk to an experienced injury attorney today — it&apos;s free and
            confidential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary px-8 py-3.5 rounded-lg font-semibold text-center"
            >
              Free Case Review
            </a>
            <a
              href="tel:+13122231700"
              className="btn-outline px-8 py-3.5 rounded-lg font-semibold text-center"
            >
              Call (312) 223-1700
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
