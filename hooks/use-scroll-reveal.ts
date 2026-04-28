'use client';

import { useRef } from 'react';
import { useInView, type UseInViewOptions } from 'framer-motion';

interface ScrollRevealOptions {
  once?: boolean;
  margin?: UseInViewOptions['margin'];
  amount?: UseInViewOptions['amount'];
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { once = true, margin = '-80px', amount = 0.2 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin, amount });
  return { ref, isInView };
}
