'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/portfolio-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm text-muted-foreground"
        >
          &copy; {currentYear} {personalInfo.name}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm text-muted-foreground/50"
        >
          Built with Next.js &amp; Tailwind CSS
        </motion.p>
      </div>
    </footer>
  );
}
