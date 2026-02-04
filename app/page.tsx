'use client';

import { useState } from 'react';
import Header from '@/components/portfolio/header';
import Hero from '@/components/portfolio/hero';
import Projects from '@/components/portfolio/projects';
import About from '@/components/portfolio/about';
import Skills from '@/components/portfolio/skills';
import Contact from '@/components/portfolio/contact';
import Footer from '@/components/portfolio/footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <main className="min-h-screen bg-background text-foreground">
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
