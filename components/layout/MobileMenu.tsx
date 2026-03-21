'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ChevronDown, Phone, Mail } from 'lucide-react';
import { NAV_LINKS, CONTACT } from '@/lib/constants';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    onClose();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-out lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <span className="font-heading text-xl font-bold text-primary">Menu</span>
          <button onClick={onClose} className="p-1 text-text-muted hover:text-primary" aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col py-4 overflow-y-auto max-h-[calc(100vh-80px)]">
          {NAV_LINKS.map((link) => (
            <div key={link.href}>
              <div className="flex items-center">
                <Link
                  href={link.href}
                  className={`flex-1 px-6 py-3 text-[15px] font-medium transition-colors ${
                    isActive(link.href) ? 'text-secondary bg-light-gold' : 'text-primary hover:text-secondary'
                  }`}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <button
                    onClick={() => toggleExpand(link.label)}
                    className="px-4 py-3 text-text-muted"
                    aria-label={`Expand ${link.label}`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedItems.includes(link.label) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                )}
              </div>
              {link.children && expandedItems.includes(link.label) && (
                <div className="bg-gray-50">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block pl-10 pr-6 py-2.5 text-sm transition-colors ${
                        isActive(child.href) ? 'text-secondary' : 'text-text-muted hover:text-secondary'
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Contact info */}
          <div className="mt-6 px-6 pt-6 border-t border-border space-y-4">
            <a href={CONTACT.phoneHref} className="flex items-center gap-3 text-primary font-semibold text-sm">
              <Phone className="w-4 h-4 text-secondary" />
              {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-primary text-sm">
              <Mail className="w-4 h-4 text-secondary" />
              {CONTACT.email}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
