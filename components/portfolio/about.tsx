'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, Globe } from 'lucide-react';
import { summary, education, languages } from '@/lib/portfolio-data';

function TimelineItem({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/3 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto" ref={sectionRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-mono font-medium tracking-wider uppercase">
            // About
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-3 mb-4">
            Who I Am
          </h2>
        </motion.div>

        {/* Bio paragraphs with staggered reveal */}
        <div className="space-y-6 mb-16">
          {summary.paragraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-lg text-muted-foreground leading-relaxed max-w-3xl"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Education */}
          <TimelineItem index={0}>
            <div className="glass rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-heading font-bold">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-foreground text-sm">{education.degree}</p>
                <p className="text-muted-foreground text-sm">{education.school}</p>
                <p className="text-xs text-muted-foreground font-mono">{education.period}</p>
              </div>
              <div className="mt-5 pt-4 border-t border-white/5">
                <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                  Coursework
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {education.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-2 py-1 text-[11px] rounded-md bg-white/5 text-foreground/70"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TimelineItem>

          {/* Honors */}
          <TimelineItem index={1}>
            <div className="glass rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/15 flex items-center justify-center">
                  <Award className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="text-lg font-heading font-bold">Honors</h3>
              </div>
              <div className="space-y-3">
                {education.honors.map((honor) => (
                  <div key={honor} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{honor}</p>
                  </div>
                ))}
              </div>
            </div>
          </TimelineItem>

          {/* Languages */}
          <TimelineItem index={2}>
            <div className="glass rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-heading font-bold">Languages</h3>
              </div>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang} className="flex items-center gap-3">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{lang}</p>
                    </div>
                    <div className="h-1.5 w-24 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '100%' } : {}}
                        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TimelineItem>
        </div>
      </div>
    </section>
  );
}
