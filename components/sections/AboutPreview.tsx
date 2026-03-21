import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export default function AboutPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Logo / Office image */}
          <AnimateOnScroll direction="left">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
            <div className="text-center p-8">
              <Image
                src="/images/logo-icon.png"
                alt="REAL Law Group"
                width={120}
                height={120}
                className="mx-auto mb-4"
              />
              <p className="text-text-muted text-sm">REAL Law Group, P.C.</p>
              <p className="text-text-muted text-xs mt-1">Hard Work. Integrity. Reliability.</p>
            </div>
          </div>
          </AnimateOnScroll>

          {/* Content */}
          <AnimateOnScroll direction="right">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Story</h2>
            <div className="w-16 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              In 2016, REAL Law Group was founded on the principles of hard work, integrity, and reliability. Born and raised in Chicago and the surrounding suburbs, we know the people and the communities we serve. We are the first members of our families to attend college and the only lawyers within our entire extended families. Mindful of our earlier days, we strive to educate our clients and work closely with them.
            </p>
            <Link href="/about" className="btn-navy">
              Meet Our Team
            </Link>
          </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
