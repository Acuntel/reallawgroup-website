"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Star } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative py-24 md:py-36 text-white overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-skyline.png"
        alt="Chicago skyline"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1923]/70 via-[#1B2D4F]/55 to-[#2A5F8F]/35" />

      {/* Subtle glow */}
      <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-[#C8A96E]/10 blur-[120px] animate-gentle-pulse" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {/* Social proof badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 fill-[#C8A96E] text-[#C8A96E]"
                />
              ))}
            </div>
            <span className="text-white/70 text-xs font-medium">
              4.9 from 275+ Google Reviews
            </span>
          </motion.div>

          {/* Line-by-line reveal */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3,
                }}
              >
                Chicago&apos;s Trusted
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.45,
                }}
              >
                Real Estate{" "}
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
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.65,
            }}
          >
            Personalized legal guidance for real estate, business, and estate
            planning. Serving Chicagoland since 2016.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          >
            <Link href="/contact" className="btn-primary text-center">
              Free Consultation
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
