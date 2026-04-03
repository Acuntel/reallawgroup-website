import Link from "next/link";
import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

interface CTABannerProps {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABanner({
  heading = "Injured? Let us fight for you.",
  text = "Get the compensation you deserve from a team with over $100 million in recoveries. Free consultation — no fees unless we win.",
  buttonText = "Get Your Free Case Review",
  buttonHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-[#0c1a36] rounded-2xl md:rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center relative overflow-hidden">
        {/* Gradient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-[30%] w-[400px] h-[400px] bg-[#32405d]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-[20%] w-[300px] h-[300px] bg-[#dcac35]/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-5">
            {heading}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {text}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-[0_8px_32px_rgba(220,172,53,0.3)] hover:-translate-y-0.5 text-sm tracking-wide uppercase"
            >
              {buttonText}
            </Link>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/15 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-white/5 hover:border-white/30 text-sm tracking-wide"
            >
              <Phone className="w-4 h-4" />
              {CONTACT.phone}
            </a>
          </div>
          <div className="flex items-center justify-center gap-3 mt-6 text-sm text-white/80">
            <span>Free & Confidential</span>
            <span className="w-1 h-1 rounded-full bg-white/60" />
            <span>No Fee Unless We Win</span>
            <span className="w-1 h-1 rounded-full bg-white/60" />
            <span>Available 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
}
