'use client';

import { ArrowRight, MapPin } from 'lucide-react';
import { personalInfo, summary, heroStats } from '@/lib/portfolio-data';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                {personalInfo.title}
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Hi, I&apos;m{' '}
              <span className="block bg-gradient-to-r from-accent via-accent to-primary bg-clip-text text-transparent">
                {personalInfo.shortName}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed text-balance">
              {summary.short} I create efficient, user-centered digital solutions that blend thoughtful design with robust engineering.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => setActiveSection('projects')}
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className="px-8 py-4 border border-border rounded-lg font-semibold hover:bg-secondary/10 transition-colors"
            >
              Get In Touch
            </button>
          </div>

          <div className="pt-12 border-t border-border">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-accent">{heroStats.projectsCompleted}</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">{heroStats.yearsExperience}</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">{heroStats.technologiesUsed}</div>
                <div className="text-muted-foreground">Technologies Used</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
