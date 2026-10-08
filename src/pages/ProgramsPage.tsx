import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { ProgramCard } from '../components/ProgramCard';
import { CTASection } from '../components/CTASection';
import { PageTransition } from '../components/PageTransition';
import { MotionReveal } from '../components/MotionReveal';
import { RevealHeading } from '../components/RevealHeading';
import { programsData } from '../data/siteData';

export const ProgramsPage: React.FC = () => {
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
              Age-Specific Environments
            </motion.span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#222521] font-normal leading-[1.12]">
              <RevealHeading as="span" text="Thoughtfully curated rooms for every chapter of early childhood." delay={0.1} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#555C51] leading-relaxed"
            >
              Every stage of early childhood brings distinctive physical, emotional, and cognitive rhythms. Our three dedicated communities provide the precise spatial intimacy, educator attunement, and sensory richness each age requires.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Program Cards List (Asymmetric Editorial Layouts) */}
      <section className="py-12 lg:py-20 bg-[#FAF8F5] border-t border-[#2C3827]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {programsData.map((program, index) => (
            <div key={program.id} id={program.id} className="scroll-mt-32">
              <ProgramCard program={program} reversed={index % 2 === 1} />
            </div>
          ))}
        </div>
      </section>

      {/* 3. The Enrolment & Orientation Journey */}
      <section className="py-20 bg-[#F3EFEA] border-y border-[#2C3827]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            align="center"
            kicker="Transition &amp; Settling"
            title="A gentle, tender transition into our community."
            subtitle="Starting early learning is a major milestone for both child and family. Our orientation process is designed to build calm, secure attachments from day one."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 'Step 01',
                title: 'Family Discovery Tour & Interview',
                desc: 'Walk through the classrooms, observe room dynamics, meet your room’s Lead Educator, and discuss your child’s specific home sleep and feeding patterns.',
              },
              {
                step: 'Step 02',
                title: 'Complimentary Stay & Play Orientations',
                desc: 'Three separate visits where you stay alongside your child for 90 minutes. Your child explores safely knowing you are near, building deep trust with their key educator.',
              },
              {
                step: 'Step 03',
                title: 'Unhurried First Days & Live Check-Ins',
                desc: 'Short initial days with proactive midday photo updates and phone check-ins from our educators, ensuring you feel reassured while settling into your work day.',
              },
            ].map((card, i) => (
              <MotionReveal key={i} direction="up" delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="p-8 bg-[#FAF8F5] border border-[#2C3827]/10 rounded-xs space-y-4 hover:border-[#4E5E46]/30 hover:shadow-2xs transition-all duration-300"
                >
                  <span className="text-xs uppercase tracking-widest text-[#8A9D84] font-semibold">
                    {card.step}
                  </span>
                  <h3 className="font-serif text-xl text-[#222521] font-normal">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#555C51] leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Find the right room for your little one."
        subtitle="Schedule a private tour of The Nest, The Meadow, or The Atelier with our Admissions team."
      />
    </PageTransition>
  );
};
