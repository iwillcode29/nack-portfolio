'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const stagger = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 + i * 0.1,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* ── Background blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob absolute -top-32 -right-32 w-[650px] h-[650px] bg-brand/[.14]" />
        <div
          className="blob-slow absolute -bottom-40 -left-24 w-[500px] h-[500px] bg-coral/[.11]"
          style={{ animationDelay: '-4s' }}
        />
        <div
          className="blob absolute top-[40%] left-[30%] w-[280px] h-[280px] bg-brand/[.07]"
          style={{ animationDelay: '-8s' }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #1a1a1a 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* ── Content ── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Status badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-brand-50 rounded-full mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-brand">
                Available for work
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="font-display text-[clamp(2.5rem,5.5vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight mb-6"
            >
              Crafting Digital{' '}
              <span className="text-brand">Experiences</span>{' '}
              <br className="hidden sm:block" />
              That Users <span className="text-coral">Love</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-lg text-ink-light leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10"
            >
              Hi, I&apos;m Nack — a frontend developer based in Chiang Mai,
              Thailand. I build beautiful, intuitive interfaces where design
              meets technology.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                onClick={() =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-3.5 bg-brand text-white font-semibold rounded-full shadow-[0_4px_16px_rgba(66,133,244,0.3)] hover:shadow-[0_6px_24px_rgba(66,133,244,0.4)] hover:bg-brand-dark transition-all"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-3.5 border-2 border-[#e0e4ea] text-ink font-semibold rounded-full hover:border-brand hover:text-brand transition-all"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Get in Touch
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="flex justify-center lg:justify-start gap-10"
            >
              {[
                { value: '6+', label: 'Years Experience' },
                { value: '20+', label: 'Projects Built' },
                { value: '∞', label: 'Curiosity' },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl font-display font-bold text-ink">
                    {stat.value}
                  </div>
                  <div className="text-sm text-ink-muted mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Image side ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Tilted backdrop */}
              <div className="absolute -inset-6 bg-gradient-to-br from-brand/10 via-coral-50 to-brand-50 rounded-[2.5rem] -rotate-3" />

              {/* Avatar container */}
              <div className="relative w-[280px] h-[380px] sm:w-[340px] sm:h-[460px] lg:w-[400px] lg:h-[540px] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
                <Image
                  src="/nack-avatar.png"
                  alt="Nack — Frontend Developer"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/30 to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-3 -right-3 px-4 py-2 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center gap-2"
                animate={{ y: [-4, 6, -4] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <span className="text-lg">🎨</span>
                <span className="text-sm font-semibold text-ink">UI/UX</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-3 px-4 py-2 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center gap-2"
                animate={{ y: [4, -6, 4] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <span className="text-lg">⚡</span>
                <span className="text-sm font-semibold text-ink">React</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-6 px-4 py-2 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center gap-2"
                animate={{ y: [-5, 7, -5] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              >
                <span className="text-lg">🔥</span>
                <span className="text-sm font-semibold text-ink">Vue.js</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium text-ink-muted tracking-wider uppercase">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-[#d0d5dd] rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-brand rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
