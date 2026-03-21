import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface PracticeAreaCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export default function PracticeAreaCard({ icon: Icon, title, description, href }: PracticeAreaCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-xl p-8 border border-border h-full transition-all duration-300 hover:shadow-xl hover:border-l-4 hover:border-l-secondary hover:-translate-y-1">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-light-gold mb-6 group-hover:bg-secondary/10 transition-colors duration-300">
          <Icon className="w-6 h-6 text-secondary" />
        </div>
        <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-secondary transition-colors">{title}</h3>
        <p className="text-sm text-text-muted leading-relaxed mb-4">{description}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Learn More <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
