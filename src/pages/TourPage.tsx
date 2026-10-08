import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { TourForm } from '../components/TourForm';
import { Clock, Users, Coffee, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';
import { MotionReveal } from '../components/MotionReveal';
import { RevealHeading } from '../components/RevealHeading';

export const TourPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialProgram = searchParams.get('program') || '';

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
              Private Campus Visit
            </motion.span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#222521] font-normal leading-[1.12]">
              <RevealHeading as="span" text="Experience Willow & Sage in person." delay={0.1} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#555C51] leading-relaxed"
            >
              We warmly welcome prospective parents to step inside our light-filled studios, meet our educators, and witness the unhurried joy and curiosity our children experience every day.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Main Tour Content Grid */}
      <section className="py-12 lg:py-20 bg-[#FAF8F5] border-t border-[#2C3827]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: What to expect on your tour */}
            <MotionReveal direction="left" className="lg:col-span-5 space-y-8">
              <div className="p-8 bg-[#F3EFEA] border border-[#2C3827]/10 rounded-xs space-y-6 shadow-2xs">
                <h3 className="font-serif text-2xl text-[#222521] font-normal">
                  What to Expect on Your Tour
                </h3>

                <div className="space-y-4 text-sm text-[#444C40]">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#4E5E46] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#222521]">35-Minute Guided Walkthrough</strong>
                      <span>Personalised tour hosted directly by Centre Director Sarah Mitchell or Educational Leader Liam Campbell.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#4E5E46] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#222521]">Intimate Group Size</strong>
                      <span>We cap each tour at 2–3 families maximum to preserve calm room dynamics and allow deep conversation.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Coffee className="w-5 h-5 text-[#4E5E46] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#222521]">Chef's Refreshments &amp; Q&amp;A</strong>
                      <span>Sample our on-site wholefoods snacks and enjoy organic herbal tea while discussing fee structures and the Child Care Subsidy.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#4E5E46] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#222521]">Children Warmly Welcome</strong>
                      <span>We encourage bringing your infant or toddler! Watching how they respond to our natural spaces is the best indicator of belonging.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2C3827]/10 text-xs text-[#687163] space-y-1">
                  <p className="font-semibold text-[#222521]">Tour Times (Mon – Fri):</p>
                  <p>· Morning Discovery: 9:30 am</p>
                  <p>· Mid-Morning Garden Tour: 10:30 am</p>
                  <p>· Afternoon Rest &amp; Atelier: 2:30 pm</p>
                </div>
              </div>

              {/* Campus Address Reminder */}
              <div className="p-6 bg-[#E7ECE6]/60 border border-[#2C3827]/10 rounded-xs text-xs text-[#555C51] space-y-2 shadow-2xs">
                <span className="font-semibold text-[#222521] block text-sm">
                  Woollahra Campus Address
                </span>
                <p>42 Parkland Avenue, Woollahra NSW 2025</p>
                <p>Underground visitor parking available via Entry Gate B on arrival.</p>
              </div>
            </MotionReveal>

            {/* Right Column: Tour Booking Form */}
            <MotionReveal direction="right" className="lg:col-span-7">
              <TourForm initialProgram={initialProgram} />
            </MotionReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
