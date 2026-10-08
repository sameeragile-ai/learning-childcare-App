import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTASection } from '../components/CTASection';
import { PageTransition } from '../components/PageTransition';
import { MotionReveal } from '../components/MotionReveal';
import { RevealHeading } from '../components/RevealHeading';
import { faqsData } from '../data/siteData';
import { HelpCircle, Phone, Mail } from 'lucide-react';
import { Button } from '../components/Button';

export const FAQsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Enrolment & Fees', 'Daily Life & Care', 'Learning Philosophy'];

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCategory =
      selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesQuery =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <PageTransition className="pt-24 sm:pt-28">
      {/* 1. Header */}
      <section className="py-16 lg:py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-widest text-[#8A9D84] font-semibold"
            >
              Parent Knowledge Base
            </motion.span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#222521] font-normal leading-[1.12]">
              <RevealHeading as="span" text="Frequently asked questions." delay={0.1} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#555C51] leading-relaxed"
            >
              Clear, transparent answers about our enrolment steps, Child Care Subsidy (CCS), daily routines, meals, and educational standards.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Interactive FAQ Section */}
      <section className="py-12 lg:py-20 bg-[#FAF8F5] border-t border-[#2C3827]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Controls: Search & Category segmented filter */}
          <MotionReveal direction="up" className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search any question (e.g., CCS subsidy, meals, naps, fees)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-[#2C3827]/20 rounded-xs text-sm focus:outline-none focus:border-[#4E5E46] focus:ring-2 focus:ring-[#4E5E46]/20 transition-all duration-200"
              />
            </div>

            {/* Category Segmented Controls */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-xs transition-all duration-200 whitespace-nowrap active:scale-98 ${
                    selectedCategory === cat
                      ? 'bg-[#4E5E46] text-[#FAF8F5] shadow-2xs'
                      : 'bg-[#F3EFEA] text-[#555C51] hover:bg-[#E7ECE6] hover:text-[#222521]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </MotionReveal>

          {/* Accordion Component with Animated Disclosure */}
          {filteredFaqs.length > 0 ? (
            <MotionReveal direction="up" delay={0.15}>
              <FAQAccordion items={filteredFaqs} defaultOpenIndex={0} />
            </MotionReveal>
          ) : (
            <div className="py-12 text-center text-sm text-[#687163] bg-[#F3EFEA] rounded-xs border border-[#2C3827]/10 p-6">
              No matching questions found for "{searchQuery}". Please contact our admissions team directly and we'll gladly assist.
            </div>
          )}

          {/* Direct Support Card */}
          <MotionReveal direction="up" delay={0.25}>
            <div className="mt-12 p-8 bg-[#F3EFEA] border border-[#2C3827]/10 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xs hover:shadow-xs transition-shadow">
              <div className="space-y-1">
                <h3 className="font-serif text-xl text-[#222521] font-normal">
                  Have a question not listed here?
                </h3>
                <p className="text-sm text-[#555C51]">
                  Our Admissions Director Sarah is available by phone or email to answer any specific questions.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Button to="/contact" variant="primary" size="sm">
                  Contact Admissions
                </Button>
                <a
                  href="tel:0291824500"
                  className="text-xs text-[#4E5E46] font-medium hover:underline px-2 py-1"
                >
                  (02) 9182 4500
                </a>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
};
