import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { TeamCard } from '../components/TeamCard';
import { CTASection } from '../components/CTASection';
import { PageTransition } from '../components/PageTransition';
import { MotionReveal } from '../components/MotionReveal';
import { RevealHeading } from '../components/RevealHeading';
import { teamData } from '../data/siteData';
import { GraduationCap, Award, Heart, Sparkles } from 'lucide-react';

export const TeamPage: React.FC = () => {
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
              Our Educators &amp; Faculty
            </motion.span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#222521] font-normal leading-[1.12]">
              <RevealHeading as="span" text="Passionate early childhood professionals devoted to your child." delay={0.1} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#555C51] leading-relaxed"
            >
              We invest deeply in our teaching faculty. Our centre exceeds national qualification requirements, pairing university-degreed Early Childhood Teachers (ECTs) with seasoned diploma specialists who view their profession as a lifelong calling.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Educator Credentials Banner */}
      <section className="py-10 bg-[#F3EFEA] border-y border-[#2C3827]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <MotionReveal direction="up" delay={0.1} className="flex items-center gap-3 justify-center sm:justify-start">
              <GraduationCap className="w-5 h-5 text-[#4E5E46] shrink-0" />
              <div className="text-xs text-[#555C51]">
                <strong className="block text-[#222521] text-sm">100% Qualified</strong>
                B.Ed, Master of Teaching &amp; Diploma educators
              </div>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.2} className="flex items-center gap-3 justify-center sm:justify-start">
              <Award className="w-5 h-5 text-[#4E5E46] shrink-0" />
              <div className="text-xs text-[#555C51]">
                <strong className="block text-[#222521] text-sm">Above Award Ratios</strong>
                Significantly lower ratios than Australian regulations
              </div>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.3} className="flex items-center gap-3 justify-center sm:justify-start">
              <Heart className="w-5 h-5 text-[#4E5E46] shrink-0" />
              <div className="text-xs text-[#555C51]">
                <strong className="block text-[#222521] text-sm">Low Staff Turnover</strong>
                Consistent, stable attachment figures for your child
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 3. Team Roster Grid */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#2C3827]/10 pb-6">
            <SectionHeading
              kicker="Leadership &amp; Room Leads"
              title="Meet the mentors shaping each day."
              subtitle="Each educator brings specialised pedagogical inquiry and deep empathy to our Woollahra campus."
            />
            <div className="text-xs text-[#687163] italic">
              * Photography &amp; biographical profiles are updated annually.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member, index) => (
              <MotionReveal key={index} direction="up" delay={index * 0.1}>
                <TeamCard member={member} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Professional Development & Mentorship */}
      <section className="py-20 bg-[#E7ECE6]/50 border-t border-[#2C3827]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal direction="up" className="max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#4E5E46] font-semibold">
              Continuous Pedagogical Growth
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#222521] font-normal leading-tight">
              A learning culture that supports our teachers.
            </h2>
            <p className="text-base text-[#555C51] leading-relaxed">
              Great childcare starts with valued, well-supported educators. We provide dedicated non-contact planning hours each week so our educators can research, document children’s learning stories, design inspiring provocations, and collaborate with Australian early childhood academics.
            </p>
          </MotionReveal>
        </div>
      </section>

      <CTASection
        title="Come say hello in person."
        subtitle="Book a morning tour to meet Sarah, Liam, and our educators inside the classrooms."
      />
    </PageTransition>
  );
};
