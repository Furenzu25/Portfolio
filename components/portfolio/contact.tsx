"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/portfolio-data";

function MagneticButton({
  children,
  className = "",
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
      ref.current.style.transform = "translate(0, 0)";
    }
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: MapPin, label: "Location", value: "Davao City, Philippines", href: null },
  ];

  const socials = [
    { icon: Github, label: "GitHub", href: socialLinks.github, rel: "noopener noreferrer" },
    { icon: Linkedin, label: "LinkedIn", href: socialLinks.linkedin, rel: "noopener noreferrer" },
  ].filter((s) => s.href && s.href !== "#");

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
          <h2 className="text-3xl sm:text-5xl font-heading font-bold mt-3 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto">
            Have a project in mind? I&apos;d love to hear about it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
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
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full px-4 py-3 min-h-11 rounded-xl glass border-0 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 transition-shadow text-sm ${
                      errors.name ? "focus:ring-red-500/30" : "focus:ring-accent/30"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-red-400 mt-1" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full px-4 py-3 min-h-11 rounded-xl glass border-0 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 transition-shadow text-sm ${
                      errors.email ? "focus:ring-red-500/30" : "focus:ring-accent/30"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-400 mt-1" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`w-full px-4 py-3 rounded-xl glass border-0 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 transition-shadow text-sm resize-none ${
                    errors.message ? "focus:ring-red-500/30" : "focus:ring-accent/30"
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-red-400 mt-1" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <MagneticButton
                type="submit"
                className="w-full px-6 py-3.5 min-h-11 rounded-xl bg-accent text-white font-semibold text-sm flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
              >
                {submitted ? "Opening Email Client..." : "Send Message"}
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
                      <p className="text-sm font-medium text-foreground truncate">{method.value}</p>
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
