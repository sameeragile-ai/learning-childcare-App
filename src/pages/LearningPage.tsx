import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Compass, Sparkles, Sprout, Palette, Trees, Heart, BookOpen, SunMedium } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { CTASection } from '../components/CTASection';
import { PageTransition } from '../components/PageTransition';
import { MotionReveal } from '../components/MotionReveal';
import { RevealHeading } from '../components/RevealHeading';
import { siteImages } from '../data/siteData';

export const LearningPage: React.FC = () => {
  const learningPillars = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#4E5E46]" />,
      title: 'Inquiry Through Play',
      subtitle: 'The Serious Work of Wonder',
      description:
        'Play is a child’s natural laboratory. Through loose parts, open-ended construction, and sustained shared thinking, children formulate hypotheses, experiment with physical laws, and experience the euphoria of creative mastery.',
    },
    {
      icon: <Sprout className="w-5 h-5 text-[#4E5E46]" />,
      title: 'Outdoor Nature Immersion',
      subtitle: 'Connecting with the Earth',
      description:
        'Children spend substantial daily hours in our nature courtyards. Rain gardens, mud kitchens, worm farms, and native eucalyptus groves teach environmental stewardship, tactile resilience, and seasonal rhythms firsthand.',
    },
    {
      icon: <Heart className="w-5 h-5 text-[#4E5E46]" />,
      title: 'Secure Relationships & Belonging',
      subtitle: 'Attachment-First Foundation',
      description:
        'Cognitive growth only occurs when a child feels emotionally anchored. Our primary educator model guarantees that every child has a key adult who deeply understands their emotional cues, soothe patterns, and joy triggers.',
    },
    {
      icon: <Palette className="w-5 h-5 text-[#4E5E46]" />,
      title: 'The Hundred Languages of Children',
      subtitle: 'Expressive Arts & Atelier',
      description:
        'Inspired by Reggio Emilia, our atelier provides access to authentic fine art materials: botanical inks, stoneware clay, charcoal, wire, and loose wool textiles, honoring multi-modal thought beyond words.',
    },
    {
      icon: <Trees className="w-5 h-5 text-[#4E5E46]" />,
      title: 'Active Exploration & Spatial Balance',
      subtitle: 'Gross-Motor Courage',
      description:
        'Children climb genuine Australian ironbark logs, balance on natural sandstone, and navigate sloping lawns. This dynamic physical risk-taking builds proprioception, spatial awareness, and genuine self-confidence.',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-[#4E5E46]" />,
      title: 'Contextual Early Literacy & Numeracy',
      subtitle: 'Organic School Readiness',
      description:
        'Rather than dry rote worksheets, mathematics and language emerge contextually through measuring garden harvests, writing signs for building projects, and reading rich Australian children’s literature together.',
    },
  ];

  return (
    <PageTransition className="pt-24 sm:pt-28">
      {/* 1. Page Header */}
      <section className="py-16 lg:py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-widest text-[#8A9D84] font-semibold"
            >
              Curriculum &amp; Pedagogy
            </motion.span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#222521] font-normal leading-[1.12]">
              <RevealHeading as="span" text="Learning through curiosity, connection and play." delay={0.1} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#555C51] leading-relaxed"
            >
              We empower children to become independent, empathetic, and imaginative thinkers by integrating the Australian Early Years Learning Framework (EYLF) with the child-centred philosophy of Reggio Emilia.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Visual Split Section: The Atelier and Botanical Studio */}
      <section className="py-12 bg-[#F3EFEA] border-y border-[#2C3827]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <MotionReveal direction="left" className="lg:col-span-6 relative rounded-xs overflow-hidden border border-[#2C3827]/10 bg-white group">
              <div className="overflow-hidden">
                <img
                  src={siteImages.preschool}
                  alt="Children exploring clay and watercolours in atelier at Willow & Sage"
                  className="w-full aspect-4/3 object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                  loading="eager"
                />
              </div>
              <div className="p-4 bg-[#FAF8F5] border-t border-[#2C3827]/10 text-xs text-[#555C51]">
                <span className="font-semibold text-[#222521]">The Creative Atelier:</span> Dedicated studio space for natural clay, botanical watercolours, and architectural loose parts.
              </div>
            </MotionReveal>

            <MotionReveal direction="right" className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#4E5E46]">
                Pedagogical Core
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#222521] font-normal leading-tight">
                An environment designed to provoke deep inquiry.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#555C51] leading-relaxed">
                <p>
                  At Willow &amp; Sage, learning is neither passive nor predetermined. Our educators act as co-researchers alongside children. When a group of toddlers notices snails emerging after a Sydney morning shower, educators don’t dismiss it—they build an inquiry project around habitats, moisture, and gentle touch.
                </p>
                <p>
                  Our children sketch their observations, examine spiral shells under magnification, read stories of soil ecology, and model shells in clay. Through this integrated inquiry, literacy, scientific method, and empathy grow simultaneously.
                </p>
              </div>

              <div className="pt-2">
                <Button to="/request-a-tour" variant="primary" size="md">
                  Observe a Learning Project on a Tour
                </Button>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 3. The 6 Learning Pillars */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            align="center"
            kicker="Six Pillars of Child Development"
            title="How children flourish under our care."
            subtitle="A holistic approach nurturing intellectual curiosity, physical joy, emotional resilience, and community."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningPillars.map((pillar, idx) => (
              <MotionReveal key={idx} direction="up" delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="p-8 bg-[#F3EFEA] border border-[#2C3827]/10 rounded-xs space-y-4 flex flex-col justify-between hover:border-[#4E5E46]/40 hover:shadow-xs transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xs bg-[#E7ECE6] flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#8A9D84]">
                      {pillar.subtitle}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#222521] font-normal">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#555C51] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-2 text-xs text-[#687163] font-medium">
                    EYLF Outcome Integrated
                  </div>
                </motion.div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Wholefoods Nutrition Curriculum */}
      <section className="py-20 bg-[#E7ECE6]/60 border-y border-[#2C3827]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <MotionReveal direction="left" className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#4E5E46] font-semibold">
                Nourishment &amp; Well-being
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#222521] font-normal leading-tight">
                Nourishing growing bodies with organic wholefoods.
              </h2>
              <p className="text-base text-[#555C51] leading-relaxed">
                Nutrition is an integral component of our daily curriculum. Led by Executive Chef Marcus Brody, our kitchen prepares five seasonal meals each day without refined sugars, unnecessary additives, or artificial preservatives.
              </p>

              <div className="space-y-3 text-sm text-[#444C40]">
                <div className="p-4 bg-[#FAF8F5] border border-[#2C3827]/10 rounded-xs">
                  <strong className="block text-[#222521] font-serif text-base mb-1">
                    Morning Herb &amp; Garden Harvests
                  </strong>
                  Children assist in picking fresh rosemary, basil, baby spinach, and cherry tomatoes from our raised kitchen planter beds.
                </div>
                <div className="p-4 bg-[#FAF8F5] border border-[#2C3827]/10 rounded-xs">
                  <strong className="block text-[#222521] font-serif text-base mb-1">
                    Communal Family-Style Dining
                  </strong>
                  Mealtime is a peaceful, unhurried ritual where children practice serving themselves, pouring water, and engaging in respectful table conversation.
                </div>
                <div className="p-4 bg-[#FAF8F5] border border-[#2C3827]/10 rounded-xs">
                  <strong className="block text-[#222521] font-serif text-base mb-1">
                    Individual Dietary &amp; Allergy Protocol
                  </strong>
                  Comprehensive clinical protocols for anaphylaxis, dairy-free, gluten-free, halal, and vegetarian family requirements.
                </div>
              </div>
            </MotionReveal>

            <MotionReveal direction="right" className="lg:col-span-6 relative rounded-xs overflow-hidden border border-[#2C3827]/10 bg-white group">
              <img
                src={siteImages.philosophy}
                alt="Toddler tasting fresh herbs in the Sydney garden"
                className="w-full aspect-4/3 object-cover transition-transform duration-700 group-hover:scale-103"
                loading="lazy"
              />
            </MotionReveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience our learning rooms in person."
        subtitle="Book a morning discovery tour to observe children engaging in inquiry, art, and nature play."
      />
    </PageTransition>
  );
};
