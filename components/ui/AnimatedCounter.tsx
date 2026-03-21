'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({ target, suffix = '+', duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const start = performance.now();

          const update = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(update);
          };

          requestAnimationFrame(update);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {hasAnimated ? count : 0}{suffix}
    </span>
  );
}
