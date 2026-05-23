"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { HEADER_SCROLL_THRESHOLD_PX } from "@/lib/constants";

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > HEADER_SCROLL_THRESHOLD_PX);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const handleNav = (id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-3 sm:top-4 left-3 right-3 sm:left-4 sm:right-4 z-50"
    >
      <nav
        className={`max-w-3xl mx-auto px-2 sm:px-2.5 py-2 rounded-2xl transition-all duration-500 ${
          scrolled ? "glass-strong shadow-elevated-lg" : "glass"
        }`}
      >
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNav("home")}
            className="px-3 py-2 min-h-11 min-w-11 text-sm font-heading font-bold tracking-tight text-gradient cursor-pointer"
          >
            JT
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-xl transition-colors duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-xl bg-accent/15 border border-accent/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2.5 min-h-11 min-w-11 rounded-xl hover:bg-foreground/5 transition-colors cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Theme toggle (desktop) */}
          {mounted ? (
            <button
              type="button"
              className="hidden md:flex p-2.5 min-h-11 min-w-11 rounded-xl hover:bg-foreground/5 transition-colors cursor-pointer items-center justify-center"
              onClick={toggleTheme}
              aria-label={
                resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5 text-muted-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
          ) : null}
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div className="pt-2 pb-1 space-y-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNav(item.id)}
                    className={`block w-full text-left px-4 py-2.5 min-h-11 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                      activeSection === item.id
                        ? "bg-accent/15 text-foreground"
                        : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                {mounted ? (
                  <motion.button
                    type="button"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: navItems.length * 0.05 }}
                    onClick={toggleTheme}
                    className="flex w-full items-center gap-2 px-4 py-2.5 min-h-11 rounded-xl text-sm font-medium text-muted-foreground hover:bg-foreground/5 hover:text-foreground cursor-pointer"
                    aria-label={
                      resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"
                    }
                  >
                    {resolvedTheme === "dark" ? (
                      <Sun className="w-5 h-5" />
                    ) : (
                      <Moon className="w-5 h-5" />
                    )}
                    {resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
                  </motion.button>
                ) : null}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
