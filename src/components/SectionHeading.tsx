import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      className={`max-w-3xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {kicker && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="block text-xs font-semibold tracking-widest text-[#8A9D84] uppercase mb-3"
        >
          {kicker}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#222521] leading-[1.15] text-balance"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-base sm:text-lg text-[#555C51] leading-relaxed font-normal"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
