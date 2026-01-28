'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // Use motion values for immediate updates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Main cursor - very responsive, almost instant
  const cursorX = useSpring(mouseX, {
    stiffness: 1000,
    damping: 50,
    mass: 0.1
  });
  const cursorY = useSpring(mouseY, {
    stiffness: 1000,
    damping: 50,
    mass: 0.1
  });

  // Trailing cursor - smooth and elastic
  const trailX = useSpring(mouseX, {
    stiffness: 150,
    damping: 20,
    mass: 0.5
  });
  const trailY = useSpring(mouseY, {
    stiffness: 150,
    damping: 20,
    mass: 0.5
  });

  // Third trail - even more delayed for depth
  const trail2X = useSpring(mouseX, {
    stiffness: 80,
    damping: 25,
    mass: 0.8
  });
  const trail2Y = useSpring(mouseY, {
    stiffness: 80,
    damping: 25,
    mass: 0.8
  });

  // Use RAF for smoother updates
  const rafRef = useRef<number>();
  const mousePos = useRef({ x: 0, y: 0 });

  const updateCursor = useCallback(() => {
    mouseX.set(mousePos.current.x);
    mouseY.set(mousePos.current.y);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (!isVisible) setIsVisible(true);

      // Cancel previous frame and request new one
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateCursor);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveElement = target.closest('a, button, input, textarea, [data-cursor-hover]');
      if (interactiveElement) {
        setIsHovering(true);
        const cursorLabel = interactiveElement.getAttribute('data-cursor-text');
        if (cursorLabel) setCursorText(cursorLabel);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveElement = target.closest('a, button, input, textarea, [data-cursor-hover]');
      if (interactiveElement) {
        setIsHovering(false);
        setCursorText('');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [updateCursor, isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Outer trail (slowest) */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9998]"
            style={{
              x: trail2X,
              y: trail2Y,
              willChange: 'transform',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                border: '1px solid rgba(251, 191, 36, 0.1)',
              }}
              animate={{
                scale: isHovering ? 2.5 : 1,
                opacity: isHovering ? 0 : 0.3,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            />
          </motion.div>

          {/* Middle trail */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            style={{
              x: trailX,
              y: trailY,
              willChange: 'transform',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/20"
              animate={{
                scale: isHovering ? 1.8 : 1,
                opacity: isHovering ? 0 : 0.5,
                borderColor: isClicking ? 'rgba(251, 191, 36, 0.5)' : 'rgba(251, 191, 36, 0.2)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
          </motion.div>

          {/* Main cursor (fastest) */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
            style={{
              x: cursorX,
              y: cursorY,
              willChange: 'transform',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <motion.div
              className="relative -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: isClicking ? 0.7 : isHovering ? 1.4 : 1,
                rotate: isHovering ? 45 : 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 25,
                mass: 0.5
              }}
            >
              {/* Outer ring */}
              <motion.div
                className="w-10 h-10 rounded-full border-2"
                animate={{
                  borderColor: isHovering ? 'rgba(251, 191, 36, 1)' : 'rgba(251, 191, 36, 0.6)',
                  backgroundColor: isHovering ? 'rgba(251, 191, 36, 0.15)' : 'transparent',
                }}
                transition={{ duration: 0.2 }}
              />

              {/* Center dot */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400"
                animate={{
                  width: isClicking ? 8 : 4,
                  height: isClicking ? 8 : 4,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />

              {/* Crosshairs - animated */}
              <motion.div
                className="absolute top-1/2 left-0 h-px bg-amber-400/60 -translate-y-1/2"
                animate={{ width: isHovering ? 0 : 8 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="absolute top-1/2 right-0 h-px bg-amber-400/60 -translate-y-1/2"
                animate={{ width: isHovering ? 0 : 8 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="absolute top-0 left-1/2 w-px bg-amber-400/60 -translate-x-1/2"
                animate={{ height: isHovering ? 0 : 8 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="absolute bottom-0 left-1/2 w-px bg-amber-400/60 -translate-x-1/2"
                animate={{ height: isHovering ? 0 : 8 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            {/* Cursor text */}
            <AnimatePresence>
              {cursorText && (
                <motion.span
                  initial={{ opacity: 0, x: 10, y: 10 }}
                  animate={{ opacity: 1, x: 20, y: 20 }}
                  exit={{ opacity: 0, x: 10, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute text-[10px] font-mono text-amber-400 whitespace-nowrap tracking-widest"
                >
                  [{cursorText}]
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
