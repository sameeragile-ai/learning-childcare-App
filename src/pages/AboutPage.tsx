import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Heart, Trees, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { CTASection } from '../components/CTASection';
import { PageTransition } from '../components/PageTransition';
import { MotionReveal } from '../components/MotionReveal';
import { RevealHeading } from '../components/RevealHeading';
import { siteImages } from '../data/siteData';

export const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Children as Protagonists',
      desc: 'We see every infant, toddler, and child not as empty vessels to be filled, but as capable, creative investigators with their own ideas, theories, and voices.',
    },
    {
      title: 'Nature as the Third Educator',
      desc: 'Our architecture dissolves the boundary between indoors and outdoors. Sunlight, botanical gardens, and raw timber nurture innate ecological reverence.',
    },
    {
      title: 'Unhurried Childhood',
      desc: 'In a world that rushes children into rigid benchmarks, we fiercely protect childhood as a sanctuary for play, wonder, deep focus, and joyful stillness.',
    },
    {
      title: 'Authentic Family Partnership',
      desc: 'Parents are a child’s first and most enduring educators. We foster genuine, transparent relationships with families, creating a shared community of care.',
    },
  ];

  const timelineMilestones = [
    {
      year: '2019',
      title: 'The Seed & Architectural Vision',
      desc: 'Founder Sarah Mitchell conceptualised Willow & Sage after observing a lack of authentic nature-integrated early learning sanctuaries across Sydney’s Eastern Suburbs.',
    },
    {
      year: '2021',
      title: 'Woollahra Campus Restoration',
      desc: 'Bespoke architectural transformation of 42 Parkland Avenue using sustainable Australian timber, acoustic linen ceilings, and living edible gardens.',
    },
    {
      year: '2023',
      title: 'Exceeding National Quality Standards',
      desc: 'Formally rated "Exceeding" in all seven quality areas of the Australian National Quality Standard (NQS), celebrating our educator pedagogical depth.',
    },
    {
      year: '2026',
      title: 'Living Nature Atelier Expansion',
      desc: 'Unveiled our dedicated rainwater catchment flumes and botanical atelier, connecting local Sydney children with native biodiversity.',
    },
  ];

  return (
    <PageTransition className="pt-24 sm:pt-28">
      {/* 1. Editorial Header */}
      <section className="py-16 lg:py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-widest text-[#8A9D84] font-semibold"
            >
              Our Story &amp; Heritage
            </motion.span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#222521] font-normal leading-[1.12]">
              <RevealHeading as="span" text="Rooted in nature, guided by tenderness." delay={0.1} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#555C51] leading-relaxed"
            >
              Willow &amp; Sage was born from a simple conviction: that early learning should feel like an extension of a loving, thoughtful home—surrounded by greenery, art, and genuine human connection.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Visual Story Split */}
      <section className="py-12 bg-[#F3EFEA] border-y border-[#2C3827]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <MotionReveal direction="left" className="lg:col-span-6 relative rounded-xs overflow-hidden border border-[#2C3827]/10 bg-white group">
              <img
                src={siteImages.hero}
                alt="Children exploring natural courtyard at Willow & Sage"
                className="w-full aspect-4/3 object-cover transition-transform duration-700 group-hover:scale-103"
              />
            </MotionReveal>

            <MotionReveal direction="right" className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#4E5E46]">
                Our Origin Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#222521] font-normal leading-tight">
                Crafting a sanctuary for Sydney’s children.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#555C51] leading-relaxed">
                <p>
                  When Centre Director Sarah Mitchell searched for early learning for her own daughter in Sydney, she encountered sterile plastic rooms, rigid institutional schedules, and stressed educators. She envisioned something radically different.
                </p>
                <p>
                  Together with architectural landscape designers and early childhood specialists, she transformed an established leafy property in Woollahra into an organic haven. Every timber beam, sand flume, and book was chosen with intention.
                </p>
                <p>
                  Today, Willow &amp; Sage is home to a close-knit community of 65 Sydney families and 18 dedicated educators who share the belief that children deserve the very best start in life.
                </p>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 3. Core Philosophy & Pillars */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            align="center"
            kicker="Our Guiding Values"
            title="Principles that shape every moment of care."
            subtitle="How we think, educate, and care for your child from their first morning drop-off."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <MotionReveal key={i} direction="up" delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="p-8 bg-[#F3EFEA] border border-[#2C3827]/10 rounded-xs space-y-3 hover:border-[#4E5E46]/30 transition-all duration-300 shadow-2xs hover:shadow-xs"
                >
                  <span className="text-xs font-semibold text-[#8A9D84] uppercase tracking-wider">
                    Principle 0{i + 1}
                  </span>
                  <h3 className="font-serif text-2xl text-[#222521] font-normal">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[#555C51] leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Timeline / Visual Journey */}
      <section className="py-20 bg-[#E7ECE6]/50 border-y border-[#2C3827]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            kicker="Our Journey"
            title="The story of our Woollahra campus."
            subtitle="A deliberate evolution rooted in educational research and community partnership."
          />

          <div className="relative border-l border-[#2C3827]/20 ml-4 sm:ml-8 space-y-12">
            {timelineMilestones.map((item, index) => (
              <MotionReveal key={index} direction="up" delay={index * 0.1}>
                <div className="relative pl-8 sm:pl-12">
                  <span className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-[#4E5E46] border-2 border-[#FAF8F5]" />
                  <span className="text-xs uppercase tracking-widest text-[#4E5E46] font-semibold">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#222521] font-normal mt-1">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#555C51] leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Commitment to Families */}
      <section className="py-20 lg:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal direction="up">
            <div className="p-8 sm:p-14 bg-[#2C3827] text-[#FAF8F5] rounded-xs space-y-8 relative overflow-hidden shadow-sm">
              <div className="max-w-2xl space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#8A9D84] font-semibold">
                  Our Family Covenant
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] font-normal">
                  Our Promise to Every Parent
                </h2>
                <p className="text-sm sm:text-base text-[#D1D8CE] leading-relaxed">
                  When you entrust your child to Willow &amp; Sage, you become part of our extended family. We commit to transparency, emotional honesty, safety without compromise, and celebrating every small milestone your child experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#FAF8F5]/10">
                <div className="space-y-2">
                  <h4 className="font-serif text-lg text-white font-normal">Open Door Culture</h4>
                  <p className="text-xs text-[#A8B2A4] leading-relaxed">
                    Parents are always welcome. Unhurried handovers and frequent informal chats ensure continuous alignment.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif text-lg text-white font-normal">Daily Insights</h4>
                  <p className="text-xs text-[#A8B2A4] leading-relaxed">
                    Personalised digital journals detailing your child’s rest, nourishing meals, friendship dynamics, and creative explorations.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif text-lg text-white font-normal">Exceeding Safety</h4>
                  <p className="text-xs text-[#A8B2A4] leading-relaxed">
                    Rigorous paediatric first-aid, anaphylaxis management, air purification, and secure digital gate access.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Button to="/request-a-tour" variant="secondary" size="md">
                  Meet Director Sarah Mitchell on a Tour
                </Button>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
};
