'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const containerRef = useRef<HTMLElement>(null);
  const fullText = 'FRONTEND DEVELOPER';

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden grid-background"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orbital rings - repositioned for split layout */}
        <div className="absolute top-1/2 right-[25%] -translate-y-1/2 hidden lg:block">
          <motion.div
            className="w-[500px] h-[500px] border border-amber-400/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-amber-400/5 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-cyan-400/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Corner coordinates */}
        <div className="absolute top-24 left-8 coordinates hidden sm:block">
          <div>X: 0.000</div>
          <div>Y: 0.000</div>
          <div>Z: 1.000</div>
        </div>
        <div className="absolute top-24 right-8 coordinates text-right hidden sm:block">
          <div>LAT: 48.8566</div>
          <div>LON: 2.3522</div>
          <div>ALT: 35m</div>
        </div>

        {/* Scanning dots */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full hidden lg:block"
            style={{
              top: `${20 + i * 15}%`,
              left: `${5 + i * 3}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Main content - Split layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div style={{ y, opacity }} className="text-center lg:text-left order-2 lg:order-1">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-6 px-4 py-2 border border-amber-400/30 bg-amber-400/5"
            >
              <div className="status-indicator active" />
              <span className="tech-label">SYSTEM ACTIVE // READY FOR DEPLOYMENT</span>
            </motion.div>

            {/* Main title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-4">
                <span className="text-amber-400 glow-text">NACK</span>
              </h1>
              <div className="font-mono text-xl sm:text-2xl md:text-3xl text-gray-400 tracking-widest">
                {typedText}
                <span
                  className={`inline-block w-3 h-6 md:h-8 bg-amber-400 ml-1 align-middle ${
                    showCursor ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </motion.div>

            {/* Subtitle / Mission statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-xl mt-6 text-gray-400 font-light text-lg leading-relaxed"
            >
              Crafting digital experiences at the intersection of
              <span className="text-amber-300"> design </span>
              and
              <span className="text-cyan-400"> technology</span>.
              <br />
              Building the future, one pixel at a time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8"
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-amber-400 text-black font-mono text-sm tracking-widest overflow-hidden"
                data-cursor-text="VIEW WORK"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>VIEW MISSIONS</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-amber-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 border border-amber-400/50 text-amber-400 font-mono text-sm tracking-widest hover:bg-amber-400/10 transition-colors"
                data-cursor-text="CONTACT"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>INITIATE CONTACT</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex justify-center lg:justify-start gap-8 sm:gap-12 mt-10"
            >
              {[
                { value: '6+', label: 'YEARS EXP' },
                { value: '20+', label: 'PROJECTS' },
                { value: '∞', label: 'CURIOSITY' },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-display text-amber-400 font-bold">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono text-gray-500 tracking-widest mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Avatar with holographic frame */}
          <motion.div
            style={{ scale: imageScale, y: imageY }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              {/* Holographic frame container */}
              <div className="relative w-[320px] h-[480px] sm:w-[400px] sm:h-[600px] lg:w-[480px] lg:h-[700px]">
                {/* Outer glow effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-amber-400/20 via-transparent to-cyan-400/20 blur-3xl" />

                {/* Main frame */}
                <div className="relative w-full h-full">
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-400" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-400" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-400" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-400" />

                  {/* Inner frame lines */}
                  <div className="absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-amber-400/50 via-amber-400/20 to-amber-400/50" />
                  <div className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-amber-400/50 via-amber-400/20 to-amber-400/50" />
                  <div className="absolute top-4 bottom-4 left-4 w-px bg-gradient-to-b from-amber-400/50 via-amber-400/20 to-amber-400/50" />
                  <div className="absolute top-4 bottom-4 right-4 w-px bg-gradient-to-b from-amber-400/50 via-amber-400/20 to-amber-400/50" />

                  {/* Scan line effect */}
                  <motion.div
                    className="absolute left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
                    animate={{ top: ['10%', '90%', '10%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  />

                  {/* Image container */}
                  <div className="absolute inset-6 overflow-hidden">
                    {/* Hexagon clip mask effect - subtle */}
                    <div className="relative w-full h-full">
                      <Image
                        src="/nack-avatar.png"
                        alt="Nack - Frontend Developer"
                        fill
                        className="object-contain object-bottom"
                        priority
                      />

                      {/* Holographic overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0f] via-transparent to-transparent opacity-60" />

                      {/* Glitch lines overlay */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        animate={{ opacity: [0, 0.1, 0] }}
                        transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 5 }}
                      >
                        <div className="absolute top-[20%] left-0 right-0 h-px bg-cyan-400" />
                        <div className="absolute top-[40%] left-0 right-0 h-px bg-amber-400" />
                        <div className="absolute top-[60%] left-0 right-0 h-px bg-cyan-400" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Data readouts */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex justify-between items-end">
                      <div className="text-[10px] font-mono text-amber-400/70">
                        <div>ID: NVG-001</div>
                        <div>STATUS: ACTIVE</div>
                      </div>
                      <div className="text-[10px] font-mono text-amber-400/70 text-right">
                        <div>RANK: NAVIGATOR</div>
                        <div>CLEARANCE: L5</div>
                      </div>
                    </div>
                  </div>

                  {/* Animated corner dots */}
                  <motion.div
                    className="absolute top-0 left-0 w-2 h-2 bg-amber-400"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute top-0 right-0 w-2 h-2 bg-amber-400"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-400"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-400"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>

                {/* Floating data particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-amber-400/50 rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${10 + Math.random() * 80}%`,
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      delay: i * 0.3,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>

              {/* Side labels */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 hidden xl:block">
                <span className="text-[10px] font-mono text-amber-400/50 tracking-[0.3em]">
                  PERSONNEL_FILE
                </span>
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 rotate-90 hidden xl:block">
                <span className="text-[10px] font-mono text-amber-400/50 tracking-[0.3em]">
                  CLEARANCE_L5
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-gray-500 tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-amber-400/50 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Scan line effect */}
      <div className="h-scan absolute inset-0 pointer-events-none" />
    </section>
  );
}
