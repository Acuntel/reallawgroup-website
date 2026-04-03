import Link from "next/link";
import { Home, ArrowLeft, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-2xl text-center">
        <div className="mb-8">
          <span className="text-8xl md:text-9xl font-heading font-bold text-secondary/20">
            404
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Page Not Found
        </h1>
        <p className="text-text-muted leading-relaxed mb-10">
          The page you are looking for may have been moved or no longer exists.
          Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="/" className="btn-primary">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-lg text-sm tracking-wide uppercase transition-all duration-200 hover:bg-primary hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Contact Us
          </Link>
        </div>
        <div className="border-t border-border pt-8">
          <p className="text-sm text-text-muted mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/practice-areas/personal-injury"
              className="text-secondary hover:text-primary font-medium transition-colors"
            >
              Personal Injury
            </Link>
            <Link
              href="/results"
              className="text-secondary hover:text-primary font-medium transition-colors"
            >
              Case Results
            </Link>
            <Link
              href="/about"
              className="text-secondary hover:text-primary font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-secondary hover:text-primary font-medium transition-colors"
            >
              Contact
            </Link>
          </div>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-secondary mt-6 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            Or call us at {CONTACT.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
