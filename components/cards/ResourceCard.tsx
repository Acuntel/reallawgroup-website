import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  excerpt: string;
  href: string;
}

export default function ResourceCard({ title, excerpt, href }: ResourceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="card-hover-border bg-white rounded-xl p-8 border border-border h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <h3 className="text-lg font-heading font-semibold mb-3 group-hover:text-secondary transition-colors">{title}</h3>
        <p className="text-sm text-text-muted leading-relaxed mb-4">{excerpt}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
          Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
