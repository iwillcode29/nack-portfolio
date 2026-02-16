'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const timeline = [
  {
    year: '2019',
    title: 'University Begins',
    description:
      'Started Software Engineering at Chiang Mai University (CAMT).',
  },
  {
    year: '2021',
    title: 'Internship at Buzzwoo',
    description:
      'Joined Buzzwoo Asia as an intern — first real-world project experience.',
  },
  {
    year: '2023',
    title: 'Graduation & Full-Time',
    description:
      'Graduated from CMU. Continued at Buzzwoo Asia as a full-time Frontend Developer.',
  },
  {
    year: '2024',
    title: 'Growth & Expertise',
    description:
      'Expanded skills in Vue.js, React, Flutter, and UI/UX design. Shipped multiple production apps.',
  },
  {
    year: 'NOW',
    title: 'Current Mission',
    description:
      'Building exceptional digital experiences focused on modern frontend technologies.',
    active: true,
  },
];

const infoCards = [
  { icon: '💼', label: 'Role', value: 'Frontend Developer' },
  { icon: '🏢', label: 'Company', value: 'Buzzwoo Asia' },
  { icon: '📍', label: 'Location', value: 'Chiang Mai, TH' },
  { icon: '🎓', label: 'Education', value: 'CMU · Class of 2023' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (d: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: d,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-surface"
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #1a1a1a 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white text-brand text-sm font-medium rounded-full mb-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            About Me
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Passionate About Creating
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* ── Left: Bio + Info Cards ── */}
          <motion.div
            custom={0.1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            <p className="text-lg text-ink-light leading-relaxed mb-6">
              A frontend developer with a passion for creating beautiful,
              intuitive user interfaces. Based in Chiang Mai, Thailand, I
              combine technical expertise with an eye for design to build
              digital experiences that users love.
            </p>
            <p className="text-lg text-ink-light leading-relaxed mb-10">
              With 6+ years at Buzzwoo Asia, I&apos;ve honed my skills across
              the full frontend spectrum — from pixel-perfect UI implementation
              to complex application architecture. I believe great software is
              where code meets creativity.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4">
              {infoCards.map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={0.2 + i * 0.06}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={fadeUp}
                  className="p-5 bg-white rounded-[20px] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)]"
                >
                  <span className="text-2xl block mb-2">{item.icon}</span>
                  <div className="text-xs font-semibold text-ink-muted uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-ink">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Timeline ── */}
          <motion.div
            custom={0.2}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            <h3 className="font-display text-xl font-bold text-ink mb-8">
              My Journey
            </h3>

            <div className="relative">
              {/* Line */}
              <div className="absolute left-[15px] top-3 bottom-3 w-0.5 bg-[#e4e7ec] rounded-full" />

              <div className="space-y-7">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    custom={0.3 + index * 0.08}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                    className="relative pl-11"
                  >
                    {/* Dot */}
                    <div
                      className={`absolute left-0 top-1 w-[30px] h-[30px] rounded-full border-2 flex items-center justify-center bg-white ${
                        item.active ? 'border-brand' : 'border-[#d0d5dd]'
                      }`}
                    >
                      {item.active ? (
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand" />
                        </span>
                      ) : (
                        <div className="w-2 h-2 bg-[#d0d5dd] rounded-full" />
                      )}
                    </div>

                    {/* Card */}
                    <div
                      className={`p-4 rounded-[16px] transition-colors ${
                        item.active
                          ? 'bg-brand-50 border border-brand/20'
                          : 'bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className={`text-sm font-bold ${
                            item.active ? 'text-brand' : 'text-ink-muted'
                          }`}
                        >
                          {item.year}
                        </span>
                        {item.active && (
                          <span className="px-2.5 py-0.5 bg-brand text-white text-xs font-semibold rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <h4 className="font-semibold text-ink mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-ink-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
