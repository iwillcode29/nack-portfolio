'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING SYSTEMS');

  useEffect(() => {
    const loadingSteps = [
      { progress: 20, text: 'LOADING CORE MODULES' },
      { progress: 40, text: 'ESTABLISHING CONNECTION' },
      { progress: 60, text: 'SYNCHRONIZING DATA' },
      { progress: 80, text: 'CALIBRATING INTERFACE' },
      { progress: 100, text: 'SYSTEM READY' },
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setProgress(loadingSteps[currentStep].progress);
        setLoadingText(loadingSteps[currentStep].text);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-[#0a0c0f] flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="relative">
          <div className="w-20 h-20 border-2 border-amber-400/50 rotate-45 flex items-center justify-center">
            <span className="text-4xl font-display font-bold text-amber-400 -rotate-45">N</span>
          </div>
          <motion.div
            className="absolute inset-0 border-2 border-amber-400 rotate-45"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Loading bar */}
      <div className="w-64 mb-6">
        <div className="h-1 bg-gray-800 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-500 to-amber-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Progress text */}
      <div className="text-center">
        <motion.div
          key={loadingText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-mono text-amber-400 tracking-widest mb-2"
        >
          {loadingText}
        </motion.div>
        <div className="text-xs font-mono text-gray-600">
          [{progress}%]
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-8 text-xs font-mono text-gray-700">
        <div>SYS.INIT v2.0.0</div>
        <div>BOOT SEQUENCE ACTIVE</div>
      </div>
      <div className="absolute bottom-8 right-8 text-xs font-mono text-gray-700 text-right">
        <div>ENCRYPTED CONNECTION</div>
        <div>STATUS: SECURE</div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-amber-400/30" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-amber-400/30" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-amber-400/30" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-amber-400/30" />
    </motion.div>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Loading screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Custom cursor (desktop only) */}
      {!isMobile && <CustomCursor />}

      {/* Main content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </motion.main>
    </>
  );
}
