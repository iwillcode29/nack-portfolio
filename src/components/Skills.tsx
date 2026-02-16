'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    name: 'Frontend',
    icon: '🎨',
    accent: 'brand' as const,
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'Vue.js', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Flutter', level: 88 },
      { name: 'GreenSock', level: 88 },
    ],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    accent: 'coral' as const,
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Firebase', level: 82 },
      { name: 'GraphQL', level: 80 },
      { name: 'REST APIs', level: 92 },
    ],
  },
  {
    name: 'DevOps',
    icon: '🚀',
    accent: 'brand' as const,
    skills: [
      { name: 'CI/CD Pipelines', level: 82 },
      { name: 'Git / GitHub', level: 95 },
    ],
  },
  {
    name: 'Design',
    icon: '✨',
    accent: 'coral' as const,
    skills: [
      { name: 'Figma', level: 88 },
      { name: 'UI/UX Design', level: 85 },
      { name: 'Design Systems', level: 82 },
      { name: 'Prototyping', level: 80 },
    ],
  },
];

const techStack = [
  'Vue.js',
  'React',
  'Next.js',
  'Flutter',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'SCSS',
  'Figma',
  'Firebase',
  'Git',
  'Vercel',
  'PWA',
  'Shopify',
  'WordPress',
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-coral-50 text-coral text-sm font-medium rounded-full mb-4">
            Skills & Technologies
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            What I Work With
          </h2>
          <p className="mt-4 text-ink-light max-w-xl mx-auto text-lg">
            Core competencies built through years of hands-on experience and
            continuous learning.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="p-6 sm:p-7 bg-white rounded-[24px] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06),0_12px_40px_rgba(0,0,0,0.06)] transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="font-display text-xl font-bold text-ink">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-ink">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-ink-muted">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-surface rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          category.accent === 'coral'
                            ? 'bg-gradient-to-r from-coral to-coral-light'
                            : 'bg-gradient-to-r from-brand to-brand-light'
                        }`}
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : {}
                        }
                        transition={{
                          duration: 1,
                          delay: catIndex * 0.1 + skillIndex * 0.08 + 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="font-display text-xl font-bold text-ink mb-6">
            Active Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.03 }}
                whileHover={{ scale: 1.06, y: -2 }}
                className="px-5 py-2.5 bg-white text-sm font-medium text-ink rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.06)] transition-shadow duration-200 cursor-default border border-transparent hover:border-brand/20"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
