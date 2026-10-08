import React from 'react';
import { motion, type Variants } from 'motion/react';

interface RevealHeadingProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span';
  delay?: number;
}

export const RevealHeading: React.FC<RevealHeadingProps> = ({
  text,
  className = '',
  as = 'h2',
  delay = 0,
}) => {
  const words = text.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const Component = as;

  return (
    <Component className={className}>
      <motion.span
        className="inline-block"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
            <motion.span variants={child} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
};
