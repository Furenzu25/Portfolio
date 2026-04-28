'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';
import { personalInfo, socialLinks } from '@/lib/portfolio-data';

function MagneticButton({
  children,
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current!.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'translate(0, 0)';
    }
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ${className}`}
      {...props}
    />
  );
}

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: 'Davao City, Philippines', href: null },
  ];

  const socials = [
    { icon: Github, label: 'GitHub', href: socialLinks.github },
    { icon: Linkedin, label: 'LinkedIn', href: socialLinks.linkedin },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto" ref={sectionRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-mono font-medium tracking-wider uppercase">
            // Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-3 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Have a project in mind? I&apos;d love to hear about it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form - takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass border-0 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-shadow text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass border-0 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-shadow text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl glass border-0 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-shadow text-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <MagneticButton
                type="submit"
                className="w-full px-6 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
              >
                {submitted ? (
                  'Opening Email Client...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </MagneticButton>
            </form>
          </motion.div>

          {/* Info side - takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact methods */}
            <div className="space-y-3">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const content = (
                  <div className="glass rounded-xl p-4 flex items-center gap-4 hover:border-accent/20 transition-colors duration-200 cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] text-muted-foreground uppercase tracking-wider">
                        {method.label}
                      </p>
                      <p className="text-sm font-medium text-foreground truncate">
                        {method.value}
                      </p>
                    </div>
                  </div>
                );

                return method.href ? (
                  <a key={method.label} href={method.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={method.label}>{content}</div>
                );
              })}
            </div>

            {/* Socials */}
            <div className="pt-2">
              <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                Follow me
              </p>
              <div className="flex gap-3">
                {socials.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/20 transition-all duration-200 cursor-pointer"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/20 transition-all duration-200 cursor-pointer"
                  aria-label="Email"
                >
                  <ArrowUpRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
