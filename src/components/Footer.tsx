'use client';

import { motion } from 'framer-motion';

const footerLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/nack9993' },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nuntapong-lamloe-b027291a6/',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand rounded-[12px] flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">
                  N
                </span>
              </div>
              <span className="font-display font-bold text-xl">Nack</span>
            </div>
            <p className="text-[#888] leading-relaxed">
              Crafting digital experiences at the intersection of design and
              technology.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold mb-4 text-white/90">
              Navigation
            </h4>
            <div className="space-y-2.5">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-[#888] hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-bold mb-4 text-white/90">
              Connect
            </h4>
            <div className="space-y-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#888] hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="mailto:nack99993@gmail.com"
                className="block text-[#888] hover:text-white transition-colors duration-200"
              >
                nack99993@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#666]">
            &copy; {currentYear} Nack. All rights reserved.
          </p>
          <p className="text-sm text-[#666]">
            Designed & built with{' '}
            <motion.span
              className="text-coral inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ♥
            </motion.span>
          </p>
        </div>
      </div>
    </footer>
  );
}
