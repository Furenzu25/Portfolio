'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2,
  Database,
  Server,
  Brain,
  Layers,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { skillCategories, allSkillsFlat } from '@/lib/portfolio-data';

const categoryIcons: Record<string, LucideIcon> = {
  'Programming Languages': Code2,
  'Frameworks & Libraries': Layers,
  'Databases': Database,
  'DevOps & Systems': Server,
  'Machine Learning': Brain,
  'Soft Skills': Users,
};

const accentColors: Record<string, string> = {
  'Programming Languages': 'text-blue-400 bg-blue-500/15',
  'Frameworks & Libraries': 'text-purple-400 bg-purple-500/15',
  'Databases': 'text-emerald-400 bg-emerald-500/15',
  'DevOps & Systems': 'text-orange-400 bg-orange-500/15',
  'Machine Learning': 'text-indigo-400 bg-indigo-500/15',
  'Soft Skills': 'text-yellow-400 bg-yellow-500/15',
};

function SkillMarquee() {
  const doubledSkills = [...allSkillsFlat, ...allSkillsFlat];

  return (
    <div className="relative overflow-hidden py-4 mb-16">
      {/* Gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

      <div className="flex gap-4 marquee">
        {doubledSkills.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="flex-shrink-0 px-4 py-2 rounded-xl glass text-sm font-medium text-foreground/70 whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillCard({
  categoryData,
  index,
}: {
  categoryData: (typeof skillCategories)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const Icon = categoryIcons[categoryData.category] || Code2;
  const colorClass = accentColors[categoryData.category] || 'text-accent bg-accent/15';
  const [textColor, bgColor] = colorClass.split(' ');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <div className="glass rounded-2xl p-6 h-full hover:border-white/10 transition-all duration-300 cursor-pointer">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center`}>
            <Icon className={`w-5 h-5 ${textColor}`} />
          </div>
          <h3 className="text-base font-heading font-bold text-foreground">
            {categoryData.category}
          </h3>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {categoryData.skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.3,
                delay: index * 0.08 + i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="px-3 py-1.5 rounded-lg bg-white/5 text-sm font-medium text-foreground/70 
                         group-hover:bg-white/8 transition-colors duration-200"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-mono font-medium tracking-wider uppercase">
            // Skills
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-3 mb-4">
            My Toolkit
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Built through academic training and hands-on project experience
          </p>
        </motion.div>

        {/* Marquee */}
        <SkillMarquee />

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.category} categoryData={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
