import { Star, Award, ThumbsUp } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const stats = [
  { icon: Star, value: '200+', label: 'Five Star Reviews' },
  { icon: Award, value: '25+', label: 'Years Combined Experience' },
  { icon: ThumbsUp, value: 'Top Rated', label: 'on Expertise.com' },
];

export default function StatsBar() {
  return (
    <section className="bg-light-gold py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={i} delay={i * 0.15}>
              <div className="flex flex-col items-center gap-2">
                <stat.icon className="w-7 h-7 text-secondary mb-1" />
                <span className="text-2xl md:text-3xl font-heading font-bold text-primary">{stat.value}</span>
                <span className="text-sm text-text-muted font-medium">{stat.label}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
