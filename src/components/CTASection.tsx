import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from './Button';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaTo?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'Begin your family’s journey at Willow & Sage.',
  subtitle = 'Discover a place where childhood is cherished, nature is woven into every day, and educators know and celebrate your child.',
  primaryCtaText = 'Book a Campus Discovery Tour',
  primaryCtaTo = '/request-a-tour',
}) => {
  return (
    <section className="py-20 lg:py-24 bg-[#2C3827] text-[#FAF8F5] relative overflow-hidden">
      {/* Subtle organic light wash with animated breathing atmosphere */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4E5E46]/35 rounded-full blur-3xl pointer-events-none animate-atmosphere" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8A9D84]/20 rounded-full blur-2xl pointer-events-none animate-float-slow" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block text-xs uppercase tracking-widest text-[#8A9D84] font-semibold"
        >
          Enrolments &amp; Campus Tours
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] text-[#FAF8F5] text-balance"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-[#D1D8CE] max-w-2xl mx-auto font-normal leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            to={primaryCtaTo}
            variant="secondary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            {primaryCtaText}
          </Button>
          <Button
            to="/contact"
            variant="outline"
            size="lg"
            className="border-[#FAF8F5]/30 text-[#FAF8F5] hover:bg-[#FAF8F5]/10 hover:border-[#FAF8F5]"
          >
            Enquire About Enrolment
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="pt-4 text-xs text-[#8A9D84] flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <span>Woollahra Campus · Sydney</span>
          <span>·</span>
          <span>(02) 9182 4500</span>
          <span>·</span>
          <span>Child Care Subsidy (CCS) Approved</span>
        </motion.div>
      </div>
    </section>
  );
};
