import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import PracticeAreasSection from '@/components/sections/PracticeAreasSection';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';
import AboutPreview from '@/components/sections/AboutPreview';
import CTABanner from '@/components/sections/CTABanner';
import ServiceAreas from '@/components/sections/ServiceAreas';

export const metadata: Metadata = {
  title: "Chicago's Trusted Real Estate Attorneys | REAL Law Group",
  description: 'Personalized legal guidance for real estate, business, and estate planning. Serving Chicagoland since 2016. 200+ five star reviews.',
  openGraph: {
    title: "Chicago's Trusted Real Estate Attorneys | REAL Law Group",
    description: 'Personalized legal guidance for real estate, business, and estate planning. Serving Chicagoland since 2016.',
    url: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <WhyChooseUs />
      <PracticeAreasSection />
      <TestimonialCarousel />
      <AboutPreview />
      <CTABanner />
      <ServiceAreas />
    </>
  );
}
