import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../data/siteData';

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  defaultOpenIndex,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex !== undefined ? defaultOpenIndex : 0
  );

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-[#2C3827]/10 border-y border-[#2C3827]/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="py-4 sm:py-5 transition-colors">
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="w-full flex items-start justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4E5E46] py-1 rounded-xs group"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg sm:text-xl text-[#222521] group-hover:text-[#4E5E46] font-normal leading-snug transition-colors duration-200">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="p-1 text-[#4E5E46] shrink-0 mt-0.5"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 pb-2 text-sm sm:text-base text-[#555C51] leading-relaxed max-w-3xl">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
