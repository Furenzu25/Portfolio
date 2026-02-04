'use client';

import React from 'react';
import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { personalInfo, socialLinks } from '@/lib/portfolio-data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/-/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null,
    },
  ];

  const socialMediaLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: socialLinks.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: socialLinks.linkedin,
    },
    {
      icon: Mail,
      label: 'Email',
      href: `mailto:${personalInfo.email}`,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? I&apos;d love to hear about it. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              {submitted ? 'Opening Email Client...' : 'Send Message'}
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a question, a project proposal, or just want to say hello, 
                don&apos;t hesitate to reach out. I&apos;m always interested in hearing about 
                new opportunities and collaborations.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const content = (
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{method.label}</p>
                      <p className="font-medium">{method.value}</p>
                    </div>
                  </div>
                );

                if (method.href) {
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      className="block p-3 rounded-lg border border-border hover:border-accent/50 hover:bg-secondary/10 transition-all"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={method.label}
                    className="block p-3 rounded-lg border border-border"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-semibold">Follow Me</h4>
              <div className="flex gap-4">
                {socialMediaLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
