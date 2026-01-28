'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const profileData = {
  designation: 'Frontend Developer',
  company: 'Buzzwoo Asia',
  location: 'Chiang Mai, TH',
  specialization: 'Frontend & Design',
  yearsActive: '6+',
  status: 'ACTIVE',
};

const timeline = [
  {
    year: '2019',
    title: 'University Begins',
    description: 'Started Software Engineering at Chiang Mai University (CAMT). First exposure to programming and web development.',
    status: 'COMPLETED',
  },
  {
    year: '2021',
    title: 'Internship at Buzzwoo',
    description: 'Joined Buzzwoo Asia as an intern. Got hands-on experience with real-world projects and professional development workflows.',
    status: 'COMPLETED',
  },
  {
    year: '2023',
    title: 'Graduation & Full-Time',
    description: 'Graduated from CMU with Software Engineering degree. Continued at Buzzwoo Asia as a full-time Frontend Developer.',
    status: 'COMPLETED',
  },
  {
    year: '2024',
    title: 'Growth & Expertise',
    description: 'Expanded skills in Vue.js, React, Flutter, and UI/UX design. Shipped multiple production apps and client projects.',
    status: 'COMPLETED',
  },
  {
    year: 'NOW',
    title: 'Current Mission',
    description: 'Building exceptional digital experiences at Buzzwoo Asia. Focused on modern frontend technologies and creative design solutions.',
    status: 'IN PROGRESS',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-background opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="tech-label">[002]</span>
            <div className="h-px flex-1 bg-amber-400/20" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-wider">
            <span className="text-amber-400">PERSONNEL</span>{' '}
            <span className="text-gray-400">FILE</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="panel corner-decoration p-6 sm:p-8">
              {/* Profile header */}
              <div className="flex items-start gap-6 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-400/20 to-cyan-400/20 flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-amber-400">N</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 px-2 py-1 bg-emerald-500 text-black text-[10px] font-mono font-bold">
                    {profileData.status}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-mono text-amber-400/60 mb-1">
                    CALLSIGN: NAVIGATOR
                  </div>
                  <h3 className="text-2xl font-display font-bold text-amber-100 mb-1">
                    NUNTAPONG LAMLOE
                  </h3>
                  <div className="text-sm font-mono text-gray-400">
                    {profileData.designation}
                  </div>
                  <div className="text-xs font-mono text-cyan-400 mt-1">
                    @ {profileData.company}
                  </div>
                </div>
              </div>

              {/* Profile stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 p-3">
                  <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1">
                    Role
                  </div>
                  <div className="text-sm font-mono text-amber-300">
                    {profileData.designation}
                  </div>
                </div>
                <div className="bg-black/30 p-3">
                  <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1">
                    Company
                  </div>
                  <div className="text-sm font-mono text-amber-300">
                    {profileData.company}
                  </div>
                </div>
                <div className="bg-black/30 p-3">
                  <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1">
                    Location
                  </div>
                  <div className="text-sm font-mono text-amber-300">
                    {profileData.location}
                  </div>
                </div>
                <div className="bg-black/30 p-3">
                  <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1">
                    Experience
                  </div>
                  <div className="text-sm font-mono text-amber-300">
                    {profileData.yearsActive} Years
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="border-t border-amber-400/20 pt-6">
                <div className="text-xs font-mono text-amber-400/60 mb-3">
                  // BIOGRAPHICAL DATA
                </div>
                <p className="text-gray-300 leading-relaxed">
                  A frontend developer with a passion for creating beautiful, intuitive user interfaces.
                  Based in Chiang Mai, Thailand, I combine technical expertise with an eye for design
                  to build digital experiences that users love.
                </p>
                <p className="text-gray-400 leading-relaxed mt-4">
                  With {profileData.yearsActive} years at Buzzwoo Asia, I&apos;ve honed my skills across
                  the full frontend spectrum—from pixel-perfect UI implementation to complex application
                  architecture. I believe great software is where code meets creativity.
                </p>
              </div>

              {/* Education */}
              <div className="mt-6 border-t border-amber-400/20 pt-6">
                <div className="text-xs font-mono text-amber-400/60 mb-3">
                  // EDUCATION
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-purple-400">CMU</span>
                  </div>
                  <div>
                    <h4 className="text-gray-200 font-medium">Chiang Mai University</h4>
                    <p className="text-sm text-gray-400">Software Engineering, CAMT</p>
                    <p className="text-xs font-mono text-gray-500 mt-1">Class of 2023</p>
                  </div>
                </div>
              </div>

              {/* Terminal-style info */}
              <div className="mt-6 bg-black/50 p-4 font-mono text-sm">
                <div className="text-green-400 mb-2">$ whoami</div>
                <div className="text-gray-400 pl-4">
                  frontend_developer | ui_designer | creative_coder
                </div>
                <div className="text-green-400 mt-3 mb-2">$ cat skills.txt</div>
                <div className="text-gray-400 pl-4">
                  vue.js, react, flutter, tailwind, figma, ui/ux
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="text-xs font-mono text-amber-400/60 mb-6">
                // MISSION LOG
              </div>

              {/* Timeline line */}
              <div className="absolute left-4 top-12 bottom-0 w-px bg-gradient-to-b from-amber-400/50 via-amber-400/20 to-transparent" />

              {/* Timeline items */}
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="relative pl-12"
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-0 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                        item.status === 'IN PROGRESS'
                          ? 'border-cyan-400 bg-cyan-400/10'
                          : 'border-amber-400/50 bg-amber-400/10'
                      }`}
                    >
                      {item.status === 'IN PROGRESS' ? (
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                      ) : (
                        <svg
                          className="w-4 h-4 text-amber-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>

                    {/* Content */}
                    <div className="panel p-4 hover:border-amber-400/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-display text-lg text-amber-400 font-bold">
                          {item.year}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-1 ${
                            item.status === 'IN PROGRESS'
                              ? 'bg-cyan-400/20 text-cyan-400'
                              : 'bg-amber-400/20 text-amber-400'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <h4 className="text-gray-200 font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.description}</p>
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
