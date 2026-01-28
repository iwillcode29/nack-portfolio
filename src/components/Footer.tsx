'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  const [uptime, setUptime] = useState('00:00:00');

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const hours = Math.floor(elapsed / 3600000);
      const minutes = Math.floor((elapsed % 3600000) / 60000);
      const seconds = Math.floor((elapsed % 60000) / 1000);
      setUptime(
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative py-12 border-t border-amber-400/20">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Logo & tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-amber-400/50 rotate-45 flex items-center justify-center">
                <span className="text-amber-400 font-display text-xs -rotate-45 font-bold">N</span>
              </div>
              <span className="font-display text-lg tracking-wider text-amber-100">NAVIGATOR</span>
            </div>
            <p className="text-sm text-gray-500 font-mono leading-relaxed">
              Crafting digital experiences at the intersection of design and technology.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-mono text-amber-400/60 mb-4">// NAVIGATION</h4>
            <div className="grid grid-cols-2 gap-2">
              {['ORIGIN', 'PROFILE', 'SYSTEMS', 'MISSIONS', 'TRANSMIT'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-amber-400 transition-colors font-mono"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* System status */}
          <div>
            <h4 className="text-xs font-mono text-amber-400/60 mb-4">// SYSTEM STATUS</h4>
            <div className="space-y-2 text-sm font-mono">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Status</span>
                <span className="text-emerald-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  OPERATIONAL
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Session</span>
                <span className="text-amber-400">{uptime}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Version</span>
                <span className="text-gray-400">v2.0.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-amber-400/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-gray-600">
                &copy; {currentYear} NACK // ALL RIGHTS RESERVED
              </span>
            </div>

            {/* Animated signal */}
            <motion.div
              className="flex items-center gap-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-xs font-mono text-gray-600">SIGNAL</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-amber-400/60"
                    animate={{
                      height: ['4px', '12px', '4px'],
                    }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            <div className="text-xs font-mono text-gray-600">
              DESIGNED & BUILT WITH{' '}
              <motion.span
                className="text-amber-400 inline-block"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {'<3'}
              </motion.span>
            </div>
          </div>
        </div>

        {/* ASCII art decoration */}
        <div className="mt-12 text-center">
          <pre className="text-[8px] sm:text-[10px] font-mono text-amber-400/20 leading-none select-none">
{`
    ╔══════════════════════════════════════════════════════════════╗
    ║  ███╗   ██╗ █████╗ ██╗   ██╗██╗ ██████╗  █████╗ ████████╗██████╗ ██████╗  ║
    ║  ████╗  ██║██╔══██╗██║   ██║██║██╔════╝ ██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗ ║
    ║  ██╔██╗ ██║███████║██║   ██║██║██║  ███╗███████║   ██║   ██║   ██║██████╔╝ ║
    ║  ██║╚██╗██║██╔══██║╚██╗ ██╔╝██║██║   ██║██╔══██║   ██║   ██║   ██║██╔══██╗ ║
    ║  ██║ ╚████║██║  ██║ ╚████╔╝ ██║╚██████╔╝██║  ██║   ██║   ╚██████╔╝██║  ██║ ║
    ║  ╚═╝  ╚═══╝╚═╝  ╚═╝  ╚═══╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝ ║
    ╚══════════════════════════════════════════════════════════════╝
`}
          </pre>
        </div>
      </div>
    </footer>
  );
}
