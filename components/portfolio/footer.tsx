'use client';

import { personalInfo } from '@/lib/portfolio-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">{personalInfo.shortName}</h3>
            <p className="text-muted-foreground text-sm">
              {personalInfo.title}. Building efficient, user-centered digital solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <span className="text-muted-foreground">
                  {personalInfo.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with React & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
