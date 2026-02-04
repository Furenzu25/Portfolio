'use client';

import {
  Code2,
  Database,
  Server,
  Brain,
  Layers,
  Users,
} from 'lucide-react';
import { skillCategories } from '@/lib/portfolio-data';

// Map category names to icons
const categoryIcons: Record<string, typeof Code2> = {
  'Programming Languages': Code2,
  'Frameworks & Libraries': Layers,
  'Databases': Database,
  'DevOps & Systems': Server,
  'Machine Learning': Brain,
  'Soft Skills': Users,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through academic training and hands-on project experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((categoryData) => {
            const Icon = categoryIcons[categoryData.category] || Code2;
            return (
              <div
                key={categoryData.category}
                className="group relative p-6 rounded-xl border border-border bg-card hover:border-accent/50 transition-all duration-300 overflow-hidden"
              >
                {/* Background gradient effect */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${categoryData.color}`}
                />

                {/* Icon header */}
                <div className="relative flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${categoryData.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{categoryData.category}</h3>
                </div>

                {/* Skills list */}
                <div className="relative grid grid-cols-2 gap-3">
                  {categoryData.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-2 rounded-lg bg-secondary/40 group-hover:bg-secondary/60 transition-colors text-sm font-medium text-foreground/90"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
