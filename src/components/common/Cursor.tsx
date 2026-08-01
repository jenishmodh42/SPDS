import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';

export const Cursor: React.FC = () => {
  const { variant, cursorText } = useCursor();
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on desktop screens
    if (window.innerWidth < 1024) return;
    document.body.classList.add('custom-cursor-enabled');

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, [isVisible]);

  if (!isVisible || variant === 'hidden') return null;

  const isTextVariant = ['view', 'drag', 'explore'].includes(variant);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999] hidden lg:flex items-center justify-center rounded-full mix-blend-difference"
      animate={{
        x: mousePos.x,
        y: mousePos.y,
        width: isTextVariant ? 80 : variant === 'hover' ? 44 : 16,
        height: isTextVariant ? 80 : variant === 'hover' ? 44 : 16,
        backgroundColor: isTextVariant ? '#B89568' : variant === 'hover' ? 'rgba(255, 255, 255, 0.9)' : '#FFFFFF',
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 28,
        mass: 0.5,
      }}
      style={{
        transform: 'translate(-50%, -50%)',
      }}
    >
      {isTextVariant && (
        <span className="text-[10px] uppercase font-bold tracking-widest text-black text-center select-none px-1">
          {cursorText || variant}
        </span>
      )}
    </motion.div>
  );
};
