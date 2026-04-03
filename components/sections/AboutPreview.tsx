import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const highlights = [
  { value: "22+", label: "Years in Practice" },
  { value: "$100M+", label: "Recovered for Clients" },
  { value: "17", label: "Office Locations" },
];

export default function AboutPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: visual card with quote + stats */}
          <AnimateOnScroll direction="left">
            <div className="relative">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                {highlights.map((h, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl border border-border p-3 sm:p-5 text-center hover:shadow-md transition-shadow"
                  >
                    <span className="block text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary">
                      {h.value}
                    </span>
                    <span className="text-[11px] sm:text-xs text-text-muted font-medium mt-1 block">
                      {h.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quote card */}
              <div className="bg-primary rounded-xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-[60px]" />
                <div className="relative">
                  <span className="text-5xl text-secondary/30 font-heading leading-none block mb-2">
                    &ldquo;
                  </span>
                  <p className="text-white/80 text-sm leading-relaxed italic mb-4">
                    Injuries hurt, that&apos;s why we make the legal process
                    painless. We believe every injured person deserves
                    aggressive, compassionate representation — regardless of
                    their ability to pay upfront.
                  </p>
                  <p className="text-secondary text-xs font-semibold tracking-wide uppercase">
                    Andrew S. Kryder, Founding Partner
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: content */}
          <AnimateOnScroll direction="right">
            <div>
              <p className="section-label">About the Firm</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Fighting for the <span className="text-secondary">Injured</span>{" "}
                Since 2002
              </h2>
              <p className="text-text-muted leading-relaxed mb-5">
                Founded by Andrew S. Kryder, The Kryder Law Group has spent over
                two decades fighting for accident and injury victims across
                Illinois and the Midwest. With 17 offices across 8 states, we
                bring big-firm resources with small-firm attention.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                Our contingency fee model means you pay nothing unless we win
                your case. We advance all costs and fight for the maximum
                compensation you deserve — whether through negotiation or trial.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
