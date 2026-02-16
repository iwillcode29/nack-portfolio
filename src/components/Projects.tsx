'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 'PRJ-001',
    title: 'Running Club App',
    subtitle: 'Community Mobile Application',
    description:
      'A comprehensive mobile app for running communities featuring event management, activity tracking, admin dashboard, and real-time participant coordination.',
    image: '/project-fabu-runs.png',
    tech: ['Flutter', 'Firebase', 'Dart', 'Cloud Functions'],
    year: '2025',
    metrics: { events: '20+', users: '50+', runs: 'Weekly' },
    link: '#',
    accent: 'brand' as const,
  },
  {
    id: 'PRJ-002',
    title: 'Runner Utility',
    subtitle: 'Multi-Purpose Running Event Tool',
    description:
      'A utility platform featuring Lucky Draw, Email Preview, and GPX Simulator tools for running event management.',
    image: '/project-runner-utility.png',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GPX Processing'],
    year: '2025',
    metrics: { tools: '3', features: '8+', type: 'Event' },
    link: 'https://runner-untility.vercel.app',
    accent: 'brand' as const,
  },
  {
    id: 'PRJ-003',
    title: 'Pixel Cafe',
    subtitle: 'Retro Coffee Ordering App',
    description:
      'A pixel-art themed coffee ordering app with barista status, drink menu, order history, and a delightful onboarding experience.',
    image: '/project-pixel-cafe.png',
    tech: ['Vue.js', 'Tailwind CSS', 'PWA', 'UI/UX Design'],
    year: '2024',
    metrics: { drinks: '20+', style: 'Retro', orders: '∞' },
    link: '#',
    accent: 'coral' as const,
  },
  {
    id: 'PRJ-004',
    title: 'Devil Monster Game',
    subtitle: 'Gothic Web-Based Game',
    description:
      'An atmospheric web game with stunning gothic artwork, interactive mini-games, and an immersive dark fantasy world.',
    image: '/project-devil-monster.png',
    tech: ['HTML/CSS', 'JavaScript', 'Game Design', 'Illustration'],
    year: '2024',
    metrics: { maps: '3+', games: 'Mini', art: 'Custom' },
    link: 'https://devilmonstergame.vercel.app/',
    accent: 'coral' as const,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-surface"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white text-brand text-sm font-medium rounded-full mb-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            Featured Projects
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Work I&apos;m Proud Of
          </h2>
          <p className="mt-4 text-ink-light max-w-xl mx-auto text-lg">
            Real projects shipped and deployed. Each represents a unique
            challenge conquered with creativity and code.
          </p>
        </motion.div>

        {/* Projects list */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-[24px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer"
            >
              <div
                className={`grid lg:grid-cols-2 gap-0 ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-64 sm:h-80 lg:h-[400px] overflow-hidden ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Year badge */}
                  <div className="absolute top-5 left-5">
                    <span className="px-3.5 py-1.5 bg-white/90 backdrop-blur-sm text-sm font-semibold text-ink rounded-full shadow-sm">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div
                  className={`p-7 sm:p-8 lg:p-10 flex flex-col justify-center ${
                    index % 2 === 1
                      ? 'lg:col-start-1 lg:row-start-1'
                      : ''
                  }`}
                >
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-2 group-hover:text-brand transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ink-muted font-medium mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-ink-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full ${
                          project.accent === 'coral'
                            ? 'bg-coral-50 text-coral'
                            : 'bg-brand-50 text-brand'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex gap-6">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div
                          className={`text-lg font-display font-bold ${
                            project.accent === 'coral'
                              ? 'text-coral'
                              : 'text-brand'
                          }`}
                        >
                          {value}
                        </div>
                        <div className="text-xs text-ink-muted font-medium uppercase tracking-wider">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Arrow hint */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-ink-muted group-hover:text-brand transition-colors">
                    <span>View details</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Project detail modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-auto bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.1)] text-ink-muted hover:text-ink transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Image */}
              <div className="relative h-64 sm:h-80">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
                <div className="absolute bottom-6 left-8 right-8">
                  <h3 className="font-display text-3xl font-bold text-ink">
                    {selectedProject.title}
                  </h3>
                  <p className="text-ink-muted font-medium">
                    {selectedProject.subtitle}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                <p className="text-ink-light leading-relaxed text-lg mb-8">
                  {selectedProject.description}
                </p>

                {/* Tech */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-ink-muted uppercase tracking-wider mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-surface text-sm font-medium text-ink rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-ink-muted uppercase tracking-wider mb-3">
                    Stats
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(selectedProject.metrics).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="p-4 bg-surface rounded-[16px] text-center"
                        >
                          <div className="text-2xl font-display font-bold text-brand">
                            {value}
                          </div>
                          <div className="text-xs text-ink-muted font-medium uppercase tracking-wider mt-1">
                            {key}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Link */}
                {selectedProject.link !== '#' && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand text-white font-semibold rounded-full hover:bg-brand-dark transition-colors shadow-[0_2px_8px_rgba(66,133,244,0.3)]"
                  >
                    View Live Project
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
