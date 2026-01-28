'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'ORIGIN', href: '#hero', code: '001' },
  { label: 'PROFILE', href: '#about', code: '002' },
  { label: 'SYSTEMS', href: '#skills', code: '003' },
  { label: 'MISSIONS', href: '#projects', code: '004' },
  { label: 'TRANSMIT', href: '#contact', code: '005' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [systemTime, setSystemTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSystemTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled ? 'bg-[#0a0c0f]/90 backdrop-blur-md' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo / Callsign */}
            <motion.div
              className="flex items-center gap-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="w-10 h-10 border border-amber-400/50 rotate-45 flex items-center justify-center">
                  <span className="text-amber-400 font-display text-sm -rotate-45 font-bold">
                    N
                  </span>
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full pulse-glow" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xs font-mono text-amber-400/60 tracking-widest">
                  CALLSIGN
                </div>
                <div className="text-sm font-display tracking-wider text-amber-100">
                  NAVIGATOR
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.code}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 group ${
                    activeSection === item.href.slice(1)
                      ? 'text-amber-400'
                      : 'text-gray-400 hover:text-amber-200'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-[10px] font-mono text-amber-400/40 block mb-0.5">
                    [{item.code}]
                  </span>
                  <span className="text-xs font-mono tracking-widest">
                    {item.label}
                  </span>
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-px bg-amber-400"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-amber-400/0 group-hover:bg-amber-400/30 transition-colors" />
                </motion.button>
              ))}
            </div>

            {/* System Status */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="text-right">
                <div className="text-[10px] font-mono text-gray-500 tracking-widest">
                  SYSTEM TIME
                </div>
                <div className="text-sm font-mono text-amber-400 tracking-wider">
                  {systemTime}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono text-emerald-400 tracking-widest">
                  ONLINE
                </span>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <motion.span
                  className="absolute left-0 w-full h-px bg-amber-400"
                  animate={{
                    top: mobileMenuOpen ? '50%' : '25%',
                    rotate: mobileMenuOpen ? 45 : 0,
                  }}
                />
                <motion.span
                  className="absolute left-0 top-1/2 w-full h-px bg-amber-400"
                  animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                />
                <motion.span
                  className="absolute left-0 w-full h-px bg-amber-400"
                  animate={{
                    top: mobileMenuOpen ? '50%' : '75%',
                    rotate: mobileMenuOpen ? -45 : 0,
                  }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-px bg-amber-400/10">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-500 to-cyan-400"
            style={{
              width: `${((navItems.findIndex(item => item.href.slice(1) === activeSection) + 1) / navItems.length) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] bg-[#0a0c0f]/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.code}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-2xl font-display tracking-widest ${
                    activeSection === item.href.slice(1)
                      ? 'text-amber-400'
                      : 'text-gray-400'
                  }`}
                >
                  <span className="text-xs font-mono text-amber-400/40 mr-4">
                    {item.code}
                  </span>
                  {item.label}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-center"
              >
                <div className="text-xs font-mono text-gray-500">
                  SYSTEM TIME
                </div>
                <div className="text-xl font-mono text-amber-400">
                  {systemTime}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
