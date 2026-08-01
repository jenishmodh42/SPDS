import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

export const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B0B0B] text-white select-none"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8"
          >
            <Logo size="lg" />
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-48 h-[2px] bg-white/10 relative overflow-hidden rounded-full mb-4">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-[#B89568]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.2 }}
            />
          </div>

          {/* Counter & Subtitle */}
          <div className="flex items-center gap-4 text-xs tracking-[0.3em] uppercase text-[#A7A7A7]">
            <span>Architecture & Interior</span>
            <span className="text-[#B89568] font-mono">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
