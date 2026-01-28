'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const socialLinks = [
  { name: 'GITHUB', url: 'https://github.com/nack', icon: 'GH' },
  { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/nuntapong-lamloe-b027291a6/', icon: 'LI' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [transmitting, setTransmitting] = useState(false);
  const [transmitted, setTransmitted] = useState(false);
  const [signalStrength, setSignalStrength] = useState(0);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setSignalStrength((prev) => {
          const next = prev + Math.random() * 10 - 3;
          return Math.max(60, Math.min(100, next));
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTransmitting(true);

    // Simulate transmission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setTransmitting(false);
    setTransmitted(true);
    setFormState({ name: '', email: '', message: '' });

    setTimeout(() => setTransmitted(false), 5000);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-400/[0.02] to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-amber-400/20" />
            <span className="tech-label">[005]</span>
            <div className="h-px w-16 bg-amber-400/20" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-wider">
            <span className="text-amber-400">INITIATE</span>{' '}
            <span className="text-gray-400">TRANSMISSION</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Ready to collaborate on your next mission? Send a transmission and let&apos;s
            build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Signal status panel */}
            <div className="panel p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg font-bold text-amber-100 tracking-wider">
                  COMMUNICATION STATUS
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400">ONLINE</span>
                </div>
              </div>

              {/* Signal strength meter */}
              <div className="mb-4">
                <div className="flex justify-between text-xs font-mono text-gray-500 mb-2">
                  <span>SIGNAL STRENGTH</span>
                  <span className="text-amber-400">{Math.round(signalStrength)}%</span>
                </div>
                <div className="h-2 bg-black/50 flex gap-px">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-emerald-400/20"
                      animate={{
                        backgroundColor:
                          i < (signalStrength / 100) * 20
                            ? 'rgba(52, 211, 153, 0.8)'
                            : 'rgba(52, 211, 153, 0.2)',
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  ))}
                </div>
              </div>

              {/* Connection info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-xs font-mono text-gray-500 block mb-1">PROTOCOL</span>
                  <span className="font-mono text-amber-300">HTTPS/2.0</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-500 block mb-1">LATENCY</span>
                  <span className="font-mono text-amber-300">{'< 50ms'}</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-500 block mb-1">ENCRYPTION</span>
                  <span className="font-mono text-amber-300">AES-256</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-500 block mb-1">CHANNEL</span>
                  <span className="font-mono text-amber-300">SECURE</span>
                </div>
              </div>
            </div>

            {/* Contact methods */}
            <div className="panel p-6 mb-6">
              <h3 className="font-display text-lg font-bold text-amber-100 tracking-wider mb-4">
                DIRECT CHANNELS
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center gap-4 p-3 bg-black/30 hover:bg-amber-400/5 transition-colors group"
                  data-cursor-text="EMAIL"
                >
                  <div className="w-10 h-10 border border-amber-400/30 flex items-center justify-center group-hover:border-amber-400/60 transition-colors">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-500">EMAIL</div>
                    <div className="font-mono text-amber-300 group-hover:text-amber-200 transition-colors">
                      hello@example.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 bg-black/30">
                  <div className="w-10 h-10 border border-amber-400/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-500">LOCATION</div>
                    <div className="font-mono text-amber-300">Chiang Mai, Thailand</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="panel p-6">
              <h3 className="font-display text-lg font-bold text-amber-100 tracking-wider mb-4">
                SOCIAL FREQUENCIES
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-black/30 hover:bg-amber-400/10 border border-transparent hover:border-amber-400/30 transition-all group"
                    data-cursor-text={link.name}
                  >
                    <div className="w-8 h-8 bg-amber-400/10 flex items-center justify-center font-mono text-xs text-amber-400 group-hover:bg-amber-400/20 transition-colors">
                      {link.icon}
                    </div>
                    <span className="text-sm font-mono text-gray-400 group-hover:text-amber-300 transition-colors">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="panel corner-decoration p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-lg font-bold text-amber-100 tracking-wider">
                  COMPOSE MESSAGE
                </h3>
                <div className="text-xs font-mono text-gray-500">
                  TRANSMISSION #{Math.floor(Math.random() * 9000) + 1000}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div>
                  <label className="block text-xs font-mono text-amber-400/60 mb-2">
                    // SENDER IDENTIFICATION
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-black/50 border border-amber-400/20 text-amber-100 font-mono placeholder-gray-600 focus:outline-none focus:border-amber-400/50 transition-colors"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label className="block text-xs font-mono text-amber-400/60 mb-2">
                    // RETURN FREQUENCY
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-black/50 border border-amber-400/20 text-amber-100 font-mono placeholder-gray-600 focus:outline-none focus:border-amber-400/50 transition-colors"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-mono text-amber-400/60 mb-2">
                    // MESSAGE CONTENT
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    rows={5}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 bg-black/50 border border-amber-400/20 text-amber-100 font-mono placeholder-gray-600 focus:outline-none focus:border-amber-400/50 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={transmitting}
                  className="w-full py-4 bg-amber-400 text-black font-mono font-bold tracking-widest hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all relative overflow-hidden group"
                >
                  {transmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                      />
                      TRANSMITTING...
                    </span>
                  ) : transmitted ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      TRANSMISSION SUCCESSFUL
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <span>SEND TRANSMISSION</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>

              {/* Terminal-style footer */}
              <div className="mt-6 pt-6 border-t border-amber-400/10">
                <div className="font-mono text-xs text-gray-500">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-emerald-400">{'>'}</span>
                    <span>All transmissions are encrypted end-to-end</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">{'>'}</span>
                    <span>Expected response time: {'< 24 hours'}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
