import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, Users } from 'lucide-react';
import BreadcrumbNav from '@/components/layout/BreadcrumbNav';
import ContactForm from '@/components/ui/ContactForm';
import GoogleMapsEmbed from '@/components/ui/GoogleMapsEmbed';
import { CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact REAL Law Group for real estate, business, and estate planning legal services. Call (630) 299-7600 or visit us in Elmhurst, IL.',
  openGraph: {
    title: 'Contact Us | REAL Law Group',
    description: 'Contact REAL Law Group for real estate, business, and estate planning legal services in Chicagoland.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Get in touch with our team for a consultation.
          </p>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-heading font-semibold mb-2">Send Us a Message</h2>
              <p className="text-text-muted text-sm mb-8">
                Fill out the form below and we&apos;ll get back to you within one business day.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-semibold mb-6">Get In Touch</h2>

              <div className="space-y-6 mb-10">
                <a href={CONTACT.phoneHref} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-light-gold flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-text-muted font-medium mb-1">Phone</p>
                    <p className="text-xl font-heading font-semibold text-primary group-hover:text-secondary transition-colors">
                      {CONTACT.phone}
                    </p>
                  </div>
                </a>

                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-light-gold flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-text-muted font-medium mb-1">Email</p>
                    <p className="text-primary font-medium group-hover:text-secondary transition-colors">
                      {CONTACT.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-light-gold flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-text-muted font-medium mb-1">Address</p>
                    <p className="text-primary font-medium">{CONTACT.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-light-gold flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-text-muted font-medium mb-1">Hours</p>
                    <p className="text-primary font-medium">Mon-Fri: 8AM-7PM</p>
                    <p className="text-primary font-medium">Sat: 8AM-3PM</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border mb-8">
                <GoogleMapsEmbed />
              </div>

              {/* Referral note */}
              <div className="flex items-start gap-4 bg-light-gold rounded-xl p-6">
                <Users className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                <p className="text-sm text-text-muted leading-relaxed italic">
                  &ldquo;Over 50% of our new clients are referrals by prior clients and other practicing lawyers.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
