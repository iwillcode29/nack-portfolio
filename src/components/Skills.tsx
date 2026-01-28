'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    name: 'FRONTEND SYSTEMS',
    code: 'FE-001',
    icon: '◇',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'Vue.js', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Three.js / WebGL', level: 75 },
      { name: 'Flutter', level: 88 },
    ],
  },
  {
    name: 'BACKEND SYSTEMS',
    code: 'BE-002',
    icon: '◆',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Firebase', level: 82 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'GraphQL', level: 80 },
      { name: 'REST APIs', level: 92 },
    ],
  },
  {
    name: 'DEV OPERATIONS',
    code: 'DO-003',
    icon: '○',
    skills: [
      { name: 'Docker', level: 78 },
      { name: 'AWS / Cloud', level: 75 },
      { name: 'CI/CD Pipelines', level: 82 },
      { name: 'Git / GitHub', level: 95 },
      { name: 'Linux', level: 80 },
    ],
  },
  {
    name: 'DESIGN TOOLS',
    code: 'DT-004',
    icon: '□',
    skills: [
      { name: 'Figma', level: 88 },
      { name: 'UI/UX Design', level: 85 },
      { name: 'Design Systems', level: 82 },
      { name: 'Prototyping', level: 80 },
      { name: 'Animation', level: 78 },
    ],
  },
];

const techStack = [
  'Vue.js', 'React', 'Next.js', 'Flutter', 'TypeScript', 'JavaScript',
  'Tailwind CSS', 'SCSS', 'Figma', 'Firebase', 'Git', 'Vercel', 'PWA',
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-400/[0.02] to-transparent" />
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
            <span className="tech-label">[003]</span>
            <div className="h-px flex-1 bg-amber-400/20" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-wider">
            <span className="text-amber-400">SYSTEM</span>{' '}
            <span className="text-gray-400">CAPABILITIES</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl">
            Core competencies and technical proficiencies acquired through years of
            hands-on experience and continuous learning.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.code}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="panel corner-decoration p-6 card-hover"
            >
              {/* Category header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-amber-400">{category.icon}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-amber-100 tracking-wider">
                      {category.name}
                    </h3>
                    <span className="text-xs font-mono text-gray-500">{category.code}</span>
                  </div>
                </div>
                <div className="w-12 h-12 border border-amber-400/30 flex items-center justify-center">
                  <span className="text-xs font-mono text-amber-400">
                    {Math.round(
                      category.skills.reduce((a, b) => a + b.level, 0) / category.skills.length
                    )}%
                  </span>
                </div>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: catIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-xs font-mono text-amber-400">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        className="progress-bar-fill"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 + 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="panel p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-display text-xl font-bold text-amber-100 tracking-wider mb-1">
                ACTIVE TECH STACK
              </h3>
              <p className="text-sm text-gray-500 font-mono">
                // Primary tools and technologies in current rotation
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400">ALL SYSTEMS OPERATIONAL</span>
            </div>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-amber-400/5 border border-amber-400/30 text-sm font-mono text-amber-200 hover:bg-amber-400/10 hover:border-amber-400/50 transition-colors cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>

          {/* Radar visualization */}
          <div className="mt-12 flex justify-center">
            <div className="relative w-64 h-64">
              {/* Radar circles */}
              {[1, 0.75, 0.5, 0.25].map((scale, i) => (
                <div
                  key={i}
                  className="absolute inset-0 border border-amber-400/10 rounded-full"
                  style={{ transform: `scale(${scale})` }}
                />
              ))}

              {/* Radar lines */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-amber-400/10" />
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-amber-400/10" />
                <div className="absolute inset-0 rotate-45">
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-amber-400/10" />
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-amber-400/10" />
                </div>
              </div>

              {/* Radar sweep */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                <div
                  className="absolute top-1/2 left-1/2 w-1/2 h-px origin-left"
                  style={{
                    background: 'linear-gradient(90deg, var(--amber-400), transparent)',
                  }}
                />
              </motion.div>

              {/* Center dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-amber-400 rounded-full pulse-glow" />

              {/* Skill points */}
              {skillCategories.map((cat, i) => {
                const angle = (i * 90 - 90) * (Math.PI / 180);
                const avgLevel = cat.skills.reduce((a, b) => a + b.level, 0) / cat.skills.length / 100;
                const x = Math.cos(angle) * (avgLevel * 100);
                const y = Math.sin(angle) * (avgLevel * 100);
                return (
                  <motion.div
                    key={cat.code}
                    className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                    style={{
                      top: `calc(50% + ${y}px - 6px)`,
                      left: `calc(50% + ${x}px - 6px)`,
                    }}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 1 + i * 0.2, type: 'spring' }}
                    whileHover={{ scale: 1.5 }}
                  />
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 flex justify-center gap-8 text-xs font-mono text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" />
              <span>Skill Domain</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full" />
              <span>Core Proficiency</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
