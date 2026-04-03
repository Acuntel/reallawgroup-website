"use client";

import Link from "next/link";
import { Phone, Star } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-24 md:py-36 text-white overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a36]/95 via-[#1e2c4b]/90 to-[#32405d]/80" />

      {/* Subtle glow */}
      <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-[#dcac35]/10 blur-[120px] animate-gentle-pulse" />

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
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div
              aria-label="5 out of 5 stars"
              role="img"
              className="flex gap-0.5"
            >
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 fill-[#dcac35] text-[#dcac35]"
                />
              ))}
            </div>
            <span className="text-white/70 text-xs font-medium">
              4.9 from 535+ Google Reviews
            </span>
          </motion.div>

          {/* Line-by-line reveal */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={prefersReducedMotion ? {} : { y: "110%" }}
                animate={prefersReducedMotion ? {} : { y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3,
                }}
              >
                Injuries Hurt.
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={prefersReducedMotion ? {} : { y: "110%" }}
                animate={prefersReducedMotion ? {} : { y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.45,
                }}
              >
                We Make the Legal Process{" "}
                <span className="bg-gradient-to-r from-[#dcac35] to-[#e8c567] bg-clip-text text-transparent">
                  Painless.
                </span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.65,
            }}
          >
            Over $100 million recovered for injured clients across Illinois and
            the Midwest. No fees unless we win your case.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          >
            <Link href="/contact" className="btn-primary text-center">
              Free Case Review
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
