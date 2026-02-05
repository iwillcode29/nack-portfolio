'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 'PRJ-001',
    title: 'Running Club Mobile App',
    subtitle: 'Running Community Mobile App',
    description:
      'A comprehensive mobile application for running communities featuring event management, activity tracking, admin dashboard, announcements, and real-time participant coordination. Built for the Faburunsclub running community.',
    image: '/project-fabu-runs.png',
    tech: ['Flutter', 'Firebase', 'Dart', 'Cloud Functions'],
    status: 'DEPLOYED (Closed Source)',
    year: '2025',
    metrics: { events: '20+', users: '50+', runs: 'Weekly' },
    links: { live: '#', github: '#' },
    color: 'emerald',
  },
  {
    id: 'PRJ-002',
    title: 'Runner Utility',
    subtitle: 'Multi-Purpose Running Event Tool',
    description:
      'A comprehensive utility platform for running events featuring three powerful tools: Lucky Draw system for participant randomization, Email Preview for template testing and HTML email generation, and GPX Simulator for route tracking with animation and distance calculation.',
    image: '/project-runner-utility.png',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GPX Processing'],
    status: 'DEPLOYED',
    year: '2025',
    metrics: { tools: '3', features: '8+', users: 'Event' },
    links: { live: 'runner-untility.vercel.app', github: '#' },
    color: 'emerald',
  },
  {
    id: 'PRJ-003',
    title: 'PIXEL CAFE',
    subtitle: 'Retro Coffee Ordering App',
    description:
      'A charming pixel-art themed coffee ordering application with a playful retro aesthetic. Features barista status, drink menu browsing, order history, and a delightful onboarding experience.',
    image: '/project-pixel-cafe.png',
    tech: ['Progressive Web App', 'Vue.js', 'Tailwind CSS', 'UI/UX Design'],
    status: 'DRAFT',
    year: '2024',
    metrics: { drinks: '20+', style: 'Retro', orders: '∞' },
    links: { live: '#', github: '#' },
    color: 'amber',
  },
  {
    id: 'PRJ-004',
    title: 'DEVIL MONSTER GAME',
    subtitle: 'Gothic Web-Based Game',
    description:
      'An atmospheric web game featuring stunning gothic artwork, interactive mini-games, and an immersive dark fantasy world. Features beautiful hand-crafted illustrations and engaging gameplay mechanics.',
    image: '/project-devil-monster.png',
    tech: ['HTML/CSS', 'JavaScript', 'Game Design', 'Illustration'],
    status: 'DEPLOYED',
    year: '2024',
    metrics: { maps: '3+', games: 'Mini', art: 'Custom' },
    links: { live: 'https://devilmonstergame.vercel.app/', github: '#' },
    color: 'purple',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const getColorClasses = (color: string, type: 'bg' | 'border' | 'text' | 'glow') => {
    const colors: Record<string, Record<string, string>> = {
      emerald: {
        bg: 'bg-emerald-500/20',
        border: 'border-emerald-500/30',
        text: 'text-emerald-400',
        glow: 'from-emerald-400/20',
      },
      amber: {
        bg: 'bg-amber-500/20',
        border: 'border-amber-500/30',
        text: 'text-amber-400',
        glow: 'from-amber-400/20',
      },
      purple: {
        bg: 'bg-purple-500/20',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        glow: 'from-purple-400/20',
      },
    };
    return colors[color]?.[type] || colors.amber[type];
  };

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-30" />
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
            <span className="tech-label">[004]</span>
            <div className="h-px flex-1 bg-amber-400/20" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-wider">
            <span className="text-amber-400">MISSION</span>{' '}
            <span className="text-gray-400">ARCHIVE</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl">
            Real projects shipped and deployed. Each mission represents a unique challenge conquered
            with creativity and technical excellence.
          </p>
        </motion.div>

        {/* Projects - Featured layout */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
              className="panel corner-decoration overflow-hidden cursor-pointer group"
              data-cursor-text="VIEW"
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image side */}
                <div className={`relative h-64 sm:h-80 lg:h-[400px] overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  {/* Project image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${getColorClasses(project.color, 'glow')} via-transparent to-transparent opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c0f]/80 via-transparent to-[#0a0c0f]/80 lg:hidden" />

                  {/* Corner markers */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-400/60" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400/60" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-400/60" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-400/60" />

                  {/* Status badge */}
                  <div className="absolute top-6 right-6">
                    <span className={`px-3 py-1.5 text-[10px] font-mono font-bold ${getColorClasses(project.color, 'bg')} ${getColorClasses(project.color, 'text')} border ${getColorClasses(project.color, 'border')}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Project ID */}
                  <div className="absolute bottom-6 left-6">
                    <span className="text-sm font-mono text-amber-400/80 bg-black/50 px-2 py-1">{project.id}</span>
                  </div>

                  {/* Scan line on hover */}
                  <motion.div
                    className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    initial={{ top: '0%', opacity: 0 }}
                    animate={{
                      top: hoveredProject === project.id ? '100%' : '0%',
                      opacity: hoveredProject === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 1 }}
                  />
                </div>

                {/* Info side */}
                <div className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <motion.h3
                        className={`text-2xl sm:text-3xl font-display font-bold tracking-wider transition-colors ${
                          hoveredProject === project.id ? getColorClasses(project.color, 'text') : 'text-amber-100'
                        }`}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-sm text-gray-500 font-mono mt-1">{project.subtitle}</p>
                    </div>
                    <span className="text-xs font-mono text-gray-600 bg-black/30 px-2 py-1">{project.year}</span>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-black/40 text-xs font-mono text-gray-300 border border-amber-400/10 hover:border-amber-400/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex gap-6 pt-6 border-t border-amber-400/10">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className={`text-lg font-mono font-bold ${getColorClasses(project.color, 'text')}`}>{value}</div>
                        <div className="text-[10px] font-mono text-gray-600 uppercase tracking-wider">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action hint */}
                  <motion.div
                    className="mt-6 flex items-center gap-2 text-sm font-mono text-gray-500"
                    animate={{ x: hoveredProject === project.id ? 5 : 0 }}
                  >
                    <span>Click to view details</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more link */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-amber-400/30 text-amber-400 font-mono text-sm tracking-wider hover:bg-amber-400/10 transition-colors"
            data-cursor-text="GITHUB"
          >
            <span>VIEW ALL MISSIONS ON GITHUB</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </motion.div> */}
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-auto panel corner-decoration"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 text-gray-400 hover:text-amber-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal image */}
              <div className="relative h-64 sm:h-80 lg:h-96">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0f] via-[#0a0c0f]/50 to-transparent" />

                {/* Overlay info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-amber-400/80 bg-black/50 px-2 py-1">{selectedProject.id}</span>
                    <span className={`px-2 py-1 text-[10px] font-mono font-bold ${getColorClasses(selectedProject.color, 'bg')} ${getColorClasses(selectedProject.color, 'text')}`}>
                      {selectedProject.status}
                    </span>
                    <span className="text-xs font-mono text-gray-500">{selectedProject.year}</span>
                  </div>
                  <h3 className={`text-3xl sm:text-4xl font-display font-bold tracking-wider ${getColorClasses(selectedProject.color, 'text')}`}>
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 font-mono mt-1">{selectedProject.subtitle}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8">
                <p className="text-gray-300 leading-relaxed text-lg mb-8">{selectedProject.description}</p>

                {/* Tech stack */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono text-amber-400/60 mb-4 tracking-widest">// TECH STACK</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-amber-400/10 text-sm font-mono text-amber-200 border border-amber-400/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono text-amber-400/60 mb-4 tracking-widest">// MISSION STATS</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(selectedProject.metrics).map(([key, value]) => (
                      <div key={key} className="bg-black/40 p-4 text-center border border-amber-400/10">
                        <div className={`text-2xl font-mono font-bold ${getColorClasses(selectedProject.color, 'text')}`}>{value}</div>
                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mt-1">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.links.live}
                    className={`flex-1 py-4 ${selectedProject.color === 'emerald' ? 'bg-emerald-500' : selectedProject.color === 'purple' ? 'bg-purple-500' : 'bg-amber-400'} text-black font-mono text-sm text-center tracking-wider hover:opacity-90 transition-opacity font-bold`}
                  >
                    VIEW LIVE PROJECT
                  </a>
                  {/* <a
                    href={selectedProject.links.github}
                    className="flex-1 py-4 border border-amber-400/50 text-amber-400 font-mono text-sm text-center tracking-wider hover:bg-amber-400/10 transition-colors"
                  >
                    SOURCE CODE
                  </a> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
