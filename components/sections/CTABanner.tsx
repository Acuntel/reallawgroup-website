import Link from 'next/link';
import { Phone } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

interface CTABannerProps {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABanner({
  heading = 'Ready to take the next step?',
  text = 'Get trusted, local legal support from a team that knows Chicago real estate and business law inside and out.',
  buttonText = 'Contact Us Now',
  buttonHref = '/contact',
}: CTABannerProps) {
  return (
    <section className="py-20 bg-primary">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-5">{heading}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">{text}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={buttonHref} className="btn-primary">
            {buttonText}
          </Link>
          <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-white/10 text-sm tracking-wide">
            <Phone className="w-4 h-4" />
            {CONTACT.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
