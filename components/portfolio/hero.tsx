'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowDown, Terminal } from 'lucide-react';
import { personalInfo, heroStats } from '@/lib/portfolio-data';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const codeLines = [
  { prefix: 'const', keyword: 'developer', value: `"${personalInfo.shortName}"` },
  { prefix: 'const', keyword: 'role', value: `"Full Stack Engineer"` },
  { prefix: 'const', keyword: 'focus', value: `["Web Dev", "Automation", "ML"]` },
  { prefix: 'const', keyword: 'status', value: `"Building cool things"` },
];

function TypewriterCode() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (visibleLines >= codeLines.length) return;

    const line = codeLines[visibleLines];
    const fullText = `${line.prefix} ${line.keyword} = ${line.value};`;

    if (currentCharIndex < fullText.length) {
      const timer = setTimeout(
        () => setCurrentCharIndex((prev) => prev + 1),
        25 + Math.random() * 35,
      );
      return () => clearTimeout(timer);
    }

    const lineTimer = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
      setCurrentCharIndex(0);
    }, 200);
    return () => clearTimeout(lineTimer);
  }, [visibleLines, currentCharIndex]);

  return (
    <div className="font-mono text-sm leading-7">
      {codeLines.map((line, i) => {
        if (i > visibleLines) return null;
        const fullText = `${line.prefix} ${line.keyword} = ${line.value};`;
        const displayText = i === visibleLines ? fullText.slice(0, currentCharIndex) : fullText;
        const showCursor = i === visibleLines && visibleLines < codeLines.length;

        return (
          <div key={i} className="flex items-center gap-2">
            <span className="text-muted-foreground/40 select-none w-5 text-right text-xs">
              {i + 1}
            </span>
            <span>
              <span className="text-purple-400">{displayText.split(' ')[0]} </span>
              <span className="text-blue-400">
                {displayText.split(' ').slice(1, displayText.indexOf('=') > -1 ? displayText.split(' ').indexOf('=') : 2).join(' ')}
              </span>
              {displayText.includes('=') && (
                <>
                  <span className="text-muted-foreground"> = </span>
                  <span className="text-emerald-400">
                    {displayText.split('= ')[1]}
                  </span>
                </>
              )}
            </span>
            {showCursor && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                className="inline-block w-2 h-5 bg-accent ml-0.5"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const numericPart = parseInt(target.replace(/\D/g, ''));
  const nonNumericSuffix = target.replace(/\d/g, '');
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, numericPart, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [count, numericPart]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return (
    <span>
      {display}
      {nonNumericSuffix}
      {suffix}
    </span>
  );
}

export default function Hero({ setActiveSection }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useTransform(mouseX, (v) => `${v}px`);
  const spotlightY = useTransform(mouseY, (v) => `${v}px`);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const scrollToProjects = () => {
    setActiveSection('projects');
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-purple-500/6 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/4 blur-[150px]" />
      </div>

      {/* Spotlight cursor glow */}
      <motion.div
        className="absolute -z-5 w-[500px] h-[500px] rounded-full pointer-events-none hidden md:block"
        style={{
          left: spotlightX,
          top: spotlightY,
          x: '-50%',
          y: '-50%',
          background: 'radial-gradient(circle, oklch(0.62 0.19 264 / 0.06) 0%, transparent 70%)',
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(oklch(1 0 0 / 0.1) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for opportunities
              </motion.div>

              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="block text-foreground"
                >
                  {personalInfo.shortName}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.6 }}
                  className="block text-gradient"
                >
                  {personalInfo.title}
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg text-muted-foreground max-w-lg leading-relaxed"
              >
                I build efficient, user-centered digital solutions — from full-stack web apps
                to machine learning models. Detail-oriented and shipping-focused.
              </motion.p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={scrollToProjects}
                className="group relative px-8 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold text-sm overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </span>
              </button>
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-8 py-3.5 rounded-xl border border-border font-semibold text-sm hover:bg-white/5 transition-all duration-200 text-center cursor-pointer hover:border-accent/30"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex gap-10 pt-6"
            >
              {[
                { value: heroStats.projectsCompleted, label: 'Projects' },
                { value: heroStats.yearsExperience, label: 'Years Exp.' },
                { value: heroStats.technologiesUsed, label: 'Technologies' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-heading font-bold text-foreground">
                    <AnimatedCounter target={stat.value} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Code terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            <div className="glass rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex items-center gap-1.5 ml-3 text-xs text-muted-foreground/60">
                  <Terminal className="w-3 h-3" />
                  portfolio.ts
                </div>
              </div>
              {/* Terminal body */}
              <div className="p-6 min-h-[200px]">
                <TypewriterCode />
              </div>
            </div>

            {/* Floating accent cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="glass rounded-xl px-4 py-3 absolute -bottom-4 -left-4 hidden xl:flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <span className="text-emerald-400 text-xs font-bold font-mono">99</span>
              </div>
              <div>
                <div className="text-xs font-medium text-foreground">Lighthouse Score</div>
                <div className="text-[10px] text-muted-foreground">Performance optimized</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
