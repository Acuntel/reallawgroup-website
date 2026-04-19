import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const highlights = [
  { value: "10+", label: "Years Serving Chicagoland" },
  { value: "50%+", label: "Clients from referrals" },
  { value: "6", label: "Dedicated team members" },
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
                    We are the first members of our families to attend college
                    and the only lawyers within our entire extended families.
                    Mindful of our earlier days, when we were unfamiliar with
                    and even intimidated by the law, we strive to relate to our
                    clients.
                  </p>
                  <p className="text-secondary text-xs font-semibold tracking-wide uppercase">
                    Vincent Incopero, Managing Partner
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
                Built on Principles,{" "}
                <span className="text-secondary">Not Privilege</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-5">
                In 2016, REAL Law Group was founded on hard work, integrity, and
                reliability. Born and raised in Chicago and the surrounding
                suburbs, we know the people and the communities we serve.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                We view ourselves as a strategic partner in your endeavors.
                Through communication, availability, and close personal
                attention, we build the trust that is the cornerstone of any
                lasting attorney-client relationship.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors"
              >
                Meet Our Team
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
