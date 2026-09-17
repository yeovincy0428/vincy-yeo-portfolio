import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const ViewfinderCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device to prevent showing cursor on mobile/touch screens
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable or interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'button, a, input, textarea, select, [role="button"], .cursor-pointer, [data-interactive="true"]'
        );
        setIsHovered(!!interactive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-9999 select-none"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        willChange: 'transform',
      }}
    >
      {/* Center dot */}
      <motion.div
        animate={{
          scale: isHovered ? 1.2 : 1,
          backgroundColor: '#C8523B',
        }}
        transition={{ duration: 0.15 }}
        className="absolute -top-1 -left-1 w-2 h-2 rounded-full shadow-xs"
      />

      {/* Viewfinder Circle / 2.39:1 Frame */}
      <motion.div
        animate={{
          width: isHovered ? 76 : 28,
          height: isHovered ? 32 : 28, // 76 / 32 ≈ 2.38:1 (Cinemascope ratio)
          borderRadius: isHovered ? 2 : 999,
          borderColor: isHovered ? '#C8523B' : '#383431',
          borderWidth: isHovered ? 1 : 1.5,
          opacity: 1,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className="absolute -translate-x-1/2 -translate-y-1/2 border transition-colors flex items-center justify-center pointer-events-none"
        style={{
          boxShadow: isHovered ? '0 0 12px rgba(200, 82, 59, 0.25)' : 'none',
        }}
      >
        {/* L-shaped corner markings when hovering */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 pointer-events-none"
            >
              {/* Top-left corner */}
              <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#C8523B]" />
              {/* Top-right corner */}
              <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-[#C8523B]" />
              {/* Bottom-left corner */}
              <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-[#C8523B]" />
              {/* Bottom-right corner */}
              <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#C8523B]" />

              {/* Tiny crosshair ticks */}
              <span className="absolute top-1/2 -left-1 w-1 h-[1px] bg-[#C8523B]" />
              <span className="absolute top-1/2 -right-1 w-1 h-[1px] bg-[#C8523B]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 2.39:1 FOCUS Tag */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: -4, y: -2 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -4, y: -2 }}
            transition={{ duration: 0.18 }}
            className="absolute left-11 -top-4 pointer-events-none flex items-center gap-1 bg-[#1C1917]/90 text-white px-1.5 py-0.5 rounded-[3px] border border-[#C8523B]/60 shadow-xs backdrop-blur-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8523B] animate-pulse" />
            <span className="text-[8px] font-mono tracking-wider font-bold text-[#E5D7B7] whitespace-nowrap">
              2.39:1 FOCUS
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
