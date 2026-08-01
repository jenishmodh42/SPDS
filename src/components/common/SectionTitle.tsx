import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col ${alignClasses[align]} max-w-4xl ${className}`}>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-[1px] bg-[#B89568]" />
          <span className="text-xs uppercase tracking-[0.35em] text-[#B89568] font-semibold">
            {subtitle}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight mb-6"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#A7A7A7] text-base md:text-lg font-light leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
