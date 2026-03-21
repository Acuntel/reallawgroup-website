import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section className="relative py-24 md:py-36 text-white overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-skyline.png"
        alt=""
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1923]/90 via-[#1B2D4F]/80 to-[#2A5F8F]/60" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
            Chicago&apos;s Trusted Real Estate Attorneys
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            Personalized legal guidance for real estate, business, and estate planning. Serving Chicagoland since 2016.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary text-center">
              Schedule Consultation
            </Link>
            <a href={CONTACT.phoneHref} className="btn-outline text-center">
              <Phone className="w-4 h-4 mr-2" />
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
