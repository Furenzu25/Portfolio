'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/portfolio/header';
import Hero from '@/components/portfolio/hero';
import Projects from '@/components/portfolio/projects';
import About from '@/components/portfolio/about';
import Skills from '@/components/portfolio/skills';
import Contact from '@/components/portfolio/contact';
import Footer from '@/components/portfolio/footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'projects', 'about', 'skills', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground grain overflow-x-hidden">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero setActiveSection={setActiveSection} />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
