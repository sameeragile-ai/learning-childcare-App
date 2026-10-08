import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { ProgramItem } from '../data/siteData';
import { Button } from './Button';

interface ProgramCardProps {
  program: ProgramItem;
  reversed?: boolean;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program, reversed = false }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-12 first:pt-0 last:pb-0 border-b last:border-b-0 border-[#2C3827]/10"
    >
      {/* Visual Asset Slot */}
      <div
        className={`lg:col-span-6 ${
          reversed ? 'lg:order-2' : 'lg:order-1'
        } relative group overflow-hidden rounded-xs bg-[#E7ECE6] border border-[#2C3827]/10`}
      >
        <img
          src={program.image}
          alt={`Early learning environment at Willow & Sage: ${program.name}`}
          className="w-full aspect-4/3 object-cover transition-transform duration-700 ease-out group-hover:scale-104"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />
      </div>

      {/* Content Slot */}
      <div
        className={`lg:col-span-6 ${
          reversed ? 'lg:order-1' : 'lg:order-2'
        } space-y-6`}
      >
        <div>
          {/* Zero-Pill unboxed metadata */}
          <div className="flex items-center gap-2 text-xs text-[#687163] font-medium tracking-wide uppercase mb-2">
            <span>{program.ageRange}</span>
            <span aria-hidden="true">·</span>
            <span>{program.ratio}</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#222521] font-normal leading-tight">
            {program.name}
          </h3>
          <p className="mt-3 text-base text-[#555C51] leading-relaxed">
            {program.shortDescription}
          </p>
        </div>

        {/* Key benefits list with staggered checkmarks */}
        <div className="space-y-2.5 pt-2">
          <p className="text-xs uppercase tracking-wider font-semibold text-[#8A9D84]">
            Key Program Focus
          </p>
          <ul className="space-y-2">
            {program.keyBenefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[#444C40]">
                <Check className="w-4 h-4 text-[#4E5E46] shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Controls */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <Button
            to={`/request-a-tour?program=${program.id}`}
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Tour {program.name.split(' ')[0]}
          </Button>
          <Link
            to="/learning"
            className="text-sm font-medium text-[#4E5E46] hover:text-[#2C3827] underline underline-offset-4 decoration-[#8A9D84] transition-colors"
          >
            Explore Curriculum Approach
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
