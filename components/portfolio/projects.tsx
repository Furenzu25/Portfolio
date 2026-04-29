'use client';

import { useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projects, projectExperience, type Project } from '@/lib/portfolio-data';

function TiltCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard className="col-span-full">
      <div className="group relative glass rounded-2xl overflow-hidden cursor-pointer">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Visual side */}
          <div className="relative h-56 sm:h-64 md:h-auto min-h-[220px] sm:min-h-[300px] bg-gradient-to-br from-accent/20 via-purple-500/10 to-blue-500/10 overflow-hidden">
            {project.image ? (
              <>
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                <div className="absolute left-4 bottom-4 glass rounded-lg px-3 py-2">
                  <p className="text-xs font-medium text-foreground/90">Live Dashboard</p>
                </div>
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/20 flex items-center justify-center border border-accent/20">
                    <ArrowUpRight className="w-7 h-7 text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Live Project</p>
                </div>
              </div>
            )}
            {/* Animated gradient orbs */}
            <motion.div
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-10 left-10 w-32 h-32 rounded-full bg-accent/15 blur-[60px]"
            />
            <motion.div
              animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500/10 blur-[80px]"
            />
          </div>

          {/* Content side */}
          <div className="p-5 sm:p-8 md:p-10 flex flex-col justify-center space-y-4 sm:space-y-5">
            <div className="inline-flex">
              <span className="px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wider">
                Featured
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs font-medium text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 px-5 py-3 min-h-11 rounded-xl bg-accent text-accent-foreground text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer"
                >
                  Visit Site
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 px-5 py-3 min-h-11 rounded-xl border border-border text-sm font-semibold hover:bg-white/5 transition-colors cursor-pointer"
                >
                  Source
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof projectExperience)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard>
        <div className="group glass rounded-2xl p-6 h-full hover:border-accent/20 transition-colors duration-300 cursor-pointer">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                {exp.title}
              </h3>
            </div>
            <p className="text-xs text-muted-foreground font-mono">{exp.period}</p>
            <div className="flex flex-wrap gap-1.5">
              {exp.tech.split(', ').map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] font-medium text-foreground/60"
                >
                  {t}
                </span>
              ))}
            </div>
            <ul className="space-y-2">
              {exp.highlights.slice(0, 2).map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-mono font-medium tracking-wider uppercase">
            // Projects
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-3 mb-4">
            What I&apos;ve Built
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            From loan management systems to machine learning models — here&apos;s a selection
            of work I&apos;m proud of.
          </p>
        </motion.div>

        {/* Featured projects */}
        {projects.filter((p) => p.featured).length > 0 && (
          <div className="mb-12 space-y-5 sm:space-y-6">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <FeaturedProjectCard key={project.id} project={project} />
              ))}
          </div>
        )}

        {/* Experience grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl font-heading font-bold mb-6 text-foreground/80"
          >
            Project Experience
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectExperience.map((exp, i) => (
              <ExperienceCard key={exp.title} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
