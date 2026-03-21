'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { CONTACT } from '@/lib/constants';
import { motion } from 'framer-motion';

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

      {/* Subtle glow */}
      <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-[#C8A96E]/10 blur-[120px] animate-gentle-pulse" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {/* Line-by-line reveal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                Chicago&apos;s Trusted
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              >
                Real Estate{' '}
                <span className="bg-gradient-to-r from-[#C8A96E] to-[#E8C567] bg-clip-text text-transparent">
                  Attorneys
                </span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          >
            Personalized legal guidance for real estate, business, and estate planning. Serving Chicagoland since 2016.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
          >
            <Link href="/contact" className="btn-primary text-center">
              Schedule Consultation
            </Link>
            <a href={CONTACT.phoneHref} className="btn-outline text-center">
              <Phone className="w-4 h-4 mr-2" />
              Call {CONTACT.phone}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
