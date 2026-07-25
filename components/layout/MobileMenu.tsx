"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronDown, Phone, Mail, Globe } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/constants";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      // Auto-focus the close button when menu opens
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label],
    );
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
      return;
    }
    if (e.key === "Tab") {
      const focusableElements = menuRef.current?.querySelectorAll(
        'a, button, input, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusableElements?.length) return;
      const first = focusableElements[0] as HTMLElement;
      const last = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        ref={menuRef}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        onKeyDown={handleKeyDown}
        className={`fixed top-0 right-0 h-full w-[300px] max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <span className="font-heading text-xl font-bold text-primary">
            Menu
          </span>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2.5 text-text-muted hover:text-primary"
            aria-label="Close menu"
          >
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
                    isActive(link.href)
                      ? "text-secondary bg-light-gold"
                      : "text-primary hover:text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <button
                    onClick={() => toggleExpand(link.label)}
                    className="p-3 text-text-muted"
                    aria-label={`Expand ${link.label}`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedItems.includes(link.label) ? "rotate-180" : ""
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
                      className={`block ${child.sub ? "pl-14" : "pl-10"} pr-6 py-3 text-sm transition-colors ${
                        isActive(child.href)
                          ? "text-secondary"
                          : "text-text-muted hover:text-secondary"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Language switcher */}
          <div className="mt-2 px-6 pt-4 border-t border-border">
            <p className="flex items-center gap-2 text-xs font-semibold text-text-muted uppercase tracking-wide mb-3">
              <Globe className="w-3.5 h-3.5" />
              Language
            </p>
            <div className="flex gap-2 flex-wrap">
              <Link
                href="/"
                className="text-sm text-primary hover:text-secondary px-3 py-1.5 rounded border border-border"
              >
                English
              </Link>
              <Link
                href="/es"
                className="text-sm text-primary hover:text-secondary px-3 py-1.5 rounded border border-border"
              >
                Español
              </Link>
              <Link
                href="/pl"
                className="text-sm text-primary hover:text-secondary px-3 py-1.5 rounded border border-border"
              >
                Polski
              </Link>
            </div>
          </div>

          {/* Contact info */}
          <div className="mt-6 px-6 pt-6 border-t border-border space-y-4">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-3 text-primary font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-secondary" />
              {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 text-primary text-sm"
            >
              <Mail className="w-4 h-4 text-secondary" />
              {CONTACT.email}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
