'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu, ChevronDown } from 'lucide-react';
import { NAV_LINKS, CONTACT } from '@/lib/constants';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-none'
        }`}
      >
        <div className="container-custom flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-banner.png"
              alt="REAL Law Group"
              width={200}
              height={50}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200
                    ${isActive(link.href) ? 'text-secondary' : 'text-primary hover:text-secondary'}
                  `}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
                <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-secondary transition-transform duration-300 origin-right group-hover:origin-left group-hover:scale-x-100 ${
                  isActive(link.href) ? 'scale-x-100' : 'scale-x-0'
                }`} />
                {link.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-xl border border-border py-2 min-w-[220px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-5 py-2.5 text-sm transition-colors duration-150
                            ${isActive(child.href) ? 'text-secondary bg-light-gold' : 'text-text hover:text-secondary hover:bg-gray-50'}
                          `}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Phone + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={CONTACT.phoneHref}
              className="hidden sm:flex items-center gap-2 text-primary font-semibold text-sm hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4" />
              {CONTACT.phone}
            </a>
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
