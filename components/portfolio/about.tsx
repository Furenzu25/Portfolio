'use client';

import { GraduationCap, Award } from 'lucide-react';
import { summary, education, languages } from '@/lib/portfolio-data';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8">About Me</h2>
        
        {/* Summary */}
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
          {summary.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Education Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent/10">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">{education.degree}</p>
              <p className="text-muted-foreground">{education.school}</p>
              <p className="text-sm text-muted-foreground">{education.period}</p>
              <div className="pt-4">
                <p className="text-sm font-medium mb-2">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {education.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-foreground/80"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent/10">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Honors & Awards</h3>
            </div>
            <div className="space-y-3">
              {education.honors.map((honor) => (
                <div key={honor} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{honor}</p>
                </div>
              ))}
            </div>
            <div className="pt-6 mt-6 border-t border-border">
              <p className="text-sm font-medium mb-2">Languages:</p>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
