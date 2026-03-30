import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { CONTACT } from "@/lib/constants";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const practiceLinks = [
  { label: "Real Estate Law", href: "/practice-areas/real-estate" },
  { label: "Business Law", href: "/practice-areas/business-law" },
  { label: "Estate Planning", href: "/practice-areas/estate-planning" },
  { label: "HUD Closings", href: "/practice-areas/hud-closings" },
  { label: "Building Violations", href: "/practice-areas/building-violations" },
  { label: "Land Trusts", href: "/practice-areas/land-trusts" },
  { label: "Personal Injury", href: "/practice-areas/personal-injury" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      {/* Mini CTA strip */}
      <div className="border-b border-white/5">
        <div className="container-custom py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-heading text-xl font-semibold mb-1">
              Ready for a free consultation?
            </h3>
            <p className="text-gray-400 text-sm">
              Call us today or schedule online — no obligation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-secondary" />
              {CONTACT.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary rounded-lg text-white text-sm font-semibold hover:bg-[#b8994e] transition-colors"
            >
              Schedule Online
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-banner.png"
                alt="REAL Law Group"
                width={180}
                height={45}
                className="h-10 w-auto brightness-0 invert bg-transparent"
                style={{ background: "transparent" }}
              />
            </Link>
            <p className="mt-3 text-sm text-secondary font-medium tracking-wide">
              Hard Work. Integrity. Reliability.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-[0.12em] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Practice Areas */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-[0.12em] mb-5">
              Practice Areas
            </h3>
            <ul className="space-y-2.5">
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-[0.12em] mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                <span className="text-sm">{CONTACT.address}</span>
              </li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-3 text-sm hover:text-secondary transition-colors"
                >
                  <Phone className="w-4 h-4 text-secondary shrink-0" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 text-sm hover:text-secondary transition-colors"
                >
                  <Mail className="w-4 h-4 text-secondary shrink-0" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                <span className="text-sm">{CONTACT.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} REAL Law Group, P.C. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-700">|</span>
            <Link
              href="/privacy-policy#disclaimer"
              className="hover:text-gray-300 transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
