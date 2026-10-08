import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Check, Heart, Shield, SunMedium } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { TrustIndicators } from '../components/TrustIndicators';
import { CTASection } from '../components/CTASection';
import { PageTransition } from '../components/PageTransition';
import { MotionReveal } from '../components/MotionReveal';
import { RevealHeading } from '../components/RevealHeading';
import { siteImages, programsData, testimonialsData } from '../data/siteData';

export const HomePage: React.FC = () => {
  return (
    <PageTransition className="pt-24 sm:pt-28">
      {/* 1. Large Editorial Hero Section with Cinematic Motion */}
      <section className="relative overflow-hidden pt-6 pb-16 lg:pt-14 lg:pb-24">
        {/* Subtle background atmosphere: Cream to soft sage with gentle breathing animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5] to-[#F3EFEA] -z-10" />
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#E7ECE6]/60 rounded-full blur-3xl pointer-events-none -z-10 animate-atmosphere" />
        <div className="absolute -bottom-10 left-10 w-[400px] h-[400px] bg-[#8A9D84]/10 rounded-full blur-3xl pointer-events-none -z-10 animate-float-slow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Headline, Copy, CTA (Staggered Animation) */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              {/* Zero-Pill kicker */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs uppercase tracking-widest text-[#4E5E46] font-semibold flex items-center gap-2"
              >
                <span>Woollahra, Sydney</span>
                <span aria-hidden="true">·</span>
                <span>Ages 6 Weeks – 6 Years</span>
              </motion.div>

              {/* Staggered Word Reveal Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#222521] font-normal leading-[1.12] text-balance tracking-tight">
                <RevealHeading
                  as="span"
                  text="Where little minds grow, wonder begins."
                  delay={0.1}
                />
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg sm:text-xl text-[#555C51] leading-relaxed max-w-xl font-normal"
              >
                A warm, nurturing early learning environment where children are encouraged to explore, connect and grow with confidence.
              </motion.p>

              {/* CTAs with tactile hover and arrow movement */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <Button
                  to="/request-a-tour"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Request a Tour
                </Button>
                <Button
                  to="/learning"
                  variant="outline"
                  size="lg"
                >
                  Explore Our Approach
                </Button>
              </motion.div>

              {/* Quiet editorial trust markers */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="pt-4 border-t border-[#2C3827]/10 flex flex-wrap items-center gap-6 text-xs text-[#687163]"
              >
                <div className="flex items-center gap-1.5">
                  <SunMedium className="w-4 h-4 text-[#4E5E46]" />
                  <span>Nature-Led Courtyards</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#4E5E46]" />
                  <span>Primary Key Educator Care</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#4E5E46]" />
                  <span>Australian CCS Approved</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Hero Image with reveal mask and gentle scale */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xs hover:shadow-md border border-[#2C3827]/10 bg-[#E7ECE6] transition-shadow duration-500">
                <img
                  src={siteImages.hero}
                  alt="Children exploring natural water play and timber pergola in Sydney courtyard at Willow & Sage"
                  className="w-full aspect-4/3 object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />
              </div>

              {/* Floating editorial caption */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#687163] px-1">
                <span>The Courtyard &amp; Living Water Atelier</span>
                <span>Woollahra Campus · Sydney</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Trust Indicators / Purpose Section */}
      <TrustIndicators />

      {/* 3. Introduction: A place to belong, explore and grow */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <MotionReveal direction="up" className="lg:col-span-5 space-y-6">
              <SectionHeading
                kicker="Our Core Philosophy"
                title="A place to belong, explore and grow."
                subtitle="We believe early childhood is not a race to prepare for tests, but an unhurried, golden chapter where children establish their relationship with the natural world and their community."
              />
              <p className="text-sm sm:text-base text-[#555C51] leading-relaxed">
                Nestled amidst established gum trees in Sydney's Eastern Suburbs, Willow &amp; Sage was founded to provide an authentic sanctuary away from sterile, plastic-heavy daycares. Here, materials are organic, light is generous, and every educator knows your child by name and heart.
              </p>
              <div className="pt-2">
                <Button to="/about" variant="olive" size="md">
                  Read Our Story &amp; Founders’ Note
                </Button>
              </div>
            </MotionReveal>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  step: '01. Environments',
                  title: 'Purpose-Built Spaces',
                  desc: 'Architectural studios featuring soaring glass, acoustic soft linens, non-toxic timber finishes, and seamless indoor-outdoor flow.',
                },
                {
                  step: '02. Pedagogy',
                  title: 'Nature-Inspired Learning',
                  desc: 'Daily sensory engagement with rainfall catchments, loose organic parts, vegetable gardens, and clay studios inspired by Reggio Emilia.',
                },
                {
                  step: '03. Faculty',
                  title: 'Experienced Educators',
                  desc: 'Degree-qualified Early Childhood Teachers who co-research alongside children with warmth, emotional attunement, and respect.',
                },
                {
                  step: '04. Nourishment',
                  title: 'Wholefoods Culinary Care',
                  desc: 'Five seasonal meals freshly crafted each day by our on-site executive chef, celebrating fresh Australian produce and positive food relationships.',
                },
              ].map((card, i) => (
                <MotionReveal key={i} direction="up" delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.25 }}
                    className="p-8 bg-[#F3EFEA] border border-[#2C3827]/10 rounded-xs space-y-3 shadow-2xs hover:shadow-xs hover:border-[#4E5E46]/30 transition-all duration-300"
                  >
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#8A9D84]">
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
        </div>
      </section>

      {/* 4. Editorial Learning Section: Curiosity, Connection, Play */}
      <section className="py-20 lg:py-28 bg-[#E7ECE6]/50 border-y border-[#2C3827]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Split layout image with hover zoom */}
            <MotionReveal direction="left" className="lg:col-span-6 relative rounded-xs overflow-hidden border border-[#2C3827]/10 bg-white group">
              <div className="overflow-hidden">
                <img
                  src={siteImages.philosophy}
                  alt="Early childhood educator guiding young toddlers exploring herb garden at Willow & Sage"
                  className="w-full aspect-4/3 object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-[#FAF8F5] border-t border-[#2C3827]/10 text-xs text-[#555C51]">
                <span className="font-semibold text-[#222521]">Sensory Herb &amp; Botanical Studio:</span> Children exploring fresh sage, mint, and soil biology under gentle morning light.
              </div>
            </MotionReveal>

            {/* Split layout copy */}
            <MotionReveal direction="right" className="lg:col-span-6 space-y-6">
              <SectionHeading
                kicker="Pedagogical Framework"
                title="Learning through curiosity, connection and play."
                subtitle="Children are naturally born researchers. When given beautiful natural tools, time to linger, and supportive mentors, their capacity for understanding is boundless."
              />

              <div className="space-y-4 pt-2">
                <div className="border-l-2 border-[#4E5E46] pl-4 space-y-1">
                  <h4 className="font-serif text-lg text-[#222521] font-normal">
                    Exploration &amp; The Hundred Languages
                  </h4>
                  <p className="text-sm text-[#555C51] leading-relaxed">
                    We listen to the hundred ways children express ideas—through painting, building, dancing, questioning, and quiet reflection.
                  </p>
                </div>

                <div className="border-l-2 border-[#4E5E46] pl-4 space-y-1">
                  <h4 className="font-serif text-lg text-[#222521] font-normal">
                    Sensory &amp; Outdoor Mastery
                  </h4>
                  <p className="text-sm text-[#555C51] leading-relaxed">
                    Unstructured outdoor time builds resilience, physical balance, and environmental care through real mud, running water, and garden botany.
                  </p>
                </div>

                <div className="border-l-2 border-[#4E5E46] pl-4 space-y-1">
                  <h4 className="font-serif text-lg text-[#222521] font-normal">
                    Confidence for the Next Chapter
                  </h4>
                  <p className="text-sm text-[#555C51] leading-relaxed">
                    Emotional self-regulation and empathetic communication form the bedrock of true school readiness.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Button to="/learning" variant="primary" size="md">
                  Discover Our Curriculum
                </Button>
                <Button to="/request-a-tour" variant="ghost" size="md">
                  See Studios in Action →
                </Button>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 5. Programs Preview */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              kicker="Our Developmental Rooms"
              title="Tailored environments for every developmental chapter."
              subtitle="Three purposefully curated communities tailored to developmental milestones from infancy through to preschool transition."
            />
            <Button to="/programs" variant="outline" size="md">
              View All Programs
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programsData.map((program, idx) => (
              <MotionReveal key={program.id} direction="up" delay={idx * 0.12}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="bg-[#F3EFEA] border border-[#2C3827]/10 p-6 rounded-xs flex flex-col justify-between space-y-6 group hover:border-[#4E5E46]/40 hover:shadow-xs transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-xs bg-[#E7ECE6] aspect-4/3">
                      <img
                        src={program.image}
                        alt={program.name}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#687163] uppercase tracking-wide font-medium">
                      <span>{program.ageRange}</span>
                      <span aria-hidden="true">·</span>
                      <span>{program.ratio}</span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#222521] font-normal group-hover:text-[#4E5E46] transition-colors duration-200">
                      {program.name}
                    </h3>

                    <p className="text-sm text-[#555C51] leading-relaxed">
                      {program.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#2C3827]/10 flex items-center justify-between">
                    <Link
                      to={`/programs#${program.id}`}
                      className="text-xs font-semibold tracking-wider uppercase text-[#4E5E46] hover:text-[#222521] flex items-center gap-1 group/link"
                    >
                      <span>Room Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </Link>
                    <Link
                      to={`/request-a-tour?program=${program.id}`}
                      className="text-xs text-[#687163] hover:text-[#222521] transition-colors"
                    >
                      Book Tour
                    </Link>
                  </div>
                </motion.div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Authentic Family Testimonials */}
      <section className="py-20 lg:py-28 bg-[#F3EFEA] border-t border-[#2C3827]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            align="center"
            kicker="Voices of Our Community"
            title="Trusted by Sydney families every day."
            subtitle="Read reflections from parents whose children thrive in our nature-inspired rooms."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((item, idx) => (
              <MotionReveal key={item.id} direction="up" delay={idx * 0.12}>
                <motion.blockquote
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="bg-[#FAF8F5] p-8 rounded-xs border border-[#2C3827]/10 flex flex-col justify-between space-y-6 shadow-2xs hover:shadow-xs hover:border-[#4E5E46]/30 transition-all duration-300"
                >
                  <p className="text-sm sm:text-base text-[#444C40] leading-relaxed italic">
                    “{item.quote}”
                  </p>

                  <div className="pt-4 border-t border-[#2C3827]/10 space-y-1">
                    <div className="font-serif text-base text-[#222521] font-medium">
                      {item.parentName}
                    </div>
                    <div className="text-xs text-[#687163]">
                      {item.childrenDetails} · {item.suburb}
                    </div>
                    <div className="text-[11px] text-[#8A9D84] font-medium">
                      {item.attendanceDuration}
                    </div>
                  </div>
                </motion.blockquote>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <CTASection />
    </PageTransition>
  );
};
