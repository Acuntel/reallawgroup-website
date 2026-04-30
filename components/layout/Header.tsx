"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, ChevronDown, Globe } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="container-custom flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-banner.png"
              alt="REAL Law Group"
              width={280}
              height={70}
              className="h-14 md:h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === link.label}
                    onFocus={() => setOpenDropdown(link.label)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        setOpenDropdown(link.label);
                        const menu = e.currentTarget.nextElementSibling;
                        const firstItem = menu?.querySelector(
                          "a",
                        ) as HTMLElement | null;
                        firstItem?.focus();
                      }
                      if (e.key === "Escape") {
                        setOpenDropdown(null);
                      }
                    }}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200
                      ${isActive(link.href) ? "text-secondary" : "text-primary hover:text-secondary"}
                    `}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </Link>
                  {openDropdown === link.label && (
                    <div
                      role="menu"
                      className="absolute top-full left-0 pt-2 z-50"
                    >
                      <div className="bg-white rounded-lg shadow-xl border border-border py-2 min-w-[220px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            onKeyDown={(e) => {
                              if (e.key === "Escape") {
                                setOpenDropdown(null);
                                const parent = e.currentTarget.closest(
                                  "[aria-haspopup]",
                                ) as HTMLElement | null;
                                parent?.focus();
                              }
                            }}
                            onBlur={(e) => {
                              if (
                                !e.currentTarget.parentElement?.parentElement?.contains(
                                  e.relatedTarget as Node,
                                )
                              ) {
                                setOpenDropdown(null);
                              }
                            }}
                            className={`block px-5 py-2.5 text-sm transition-colors duration-150
                              ${isActive(child.href) ? "text-secondary bg-light-gold" : "text-text hover:text-secondary hover:bg-gray-50"}
                            `}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-secondary transition-transform duration-300 origin-right group-hover:origin-left group-hover:scale-x-100 ${
                      isActive(link.href) ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </div>
              ) : (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200
                      ${isActive(link.href) ? "text-secondary" : "text-primary hover:text-secondary"}
                    `}
                  >
                    {link.label}
                  </Link>
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-secondary transition-transform duration-300 origin-right group-hover:origin-left group-hover:scale-x-100 ${
                      isActive(link.href) ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </div>
              ),
            )}
          </nav>

          {/* Phone + CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div
              className="relative hidden md:block"
              onMouseEnter={() => setLangOpen(true)}
              onMouseLeave={() => setLangOpen(false)}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={langOpen}
                onFocus={() => setLangOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setLangOpen(false);
                }}
                className="flex items-center gap-1 text-primary hover:text-secondary text-sm font-semibold transition-colors px-2 py-2"
              >
                <Globe className="w-4 h-4" />
                <span>EN</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 pt-2 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-border py-2 min-w-[160px]">
                    <Link
                      href="/"
                      className="block px-5 py-2 text-sm text-text hover:text-secondary hover:bg-gray-50"
                    >
                      English
                    </Link>
                    <Link
                      href="/es"
                      className="block px-5 py-2 text-sm text-text hover:text-secondary hover:bg-gray-50"
                    >
                      Español
                    </Link>
                    <Link
                      href="/pl"
                      className="block px-5 py-2 text-sm text-text hover:text-secondary hover:bg-gray-50"
                    >
                      Polski
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Phone icon always visible on mobile */}
            <a
              href={CONTACT.phoneHref}
              className="sm:hidden p-2"
              aria-label="Call REAL Law Group"
            >
              <Phone className="w-5 h-5 text-primary" />
            </a>
            <a
              href={CONTACT.phoneHref}
              className="hidden sm:flex items-center gap-2 text-primary font-semibold text-sm hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4" />
              {CONTACT.phone}
            </a>
            <Link
              href="/contact"
              className="hidden lg:inline-flex bg-secondary text-white px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Free Consultation
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-primary hover:text-secondary transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
