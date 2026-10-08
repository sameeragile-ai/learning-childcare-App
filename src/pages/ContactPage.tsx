import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { EnquiryForm } from '../components/EnquiryForm';
import { PageTransition } from '../components/PageTransition';
import { MotionReveal } from '../components/MotionReveal';
import { RevealHeading } from '../components/RevealHeading';
import { centreContactDetails } from '../data/siteData';
import { MapPin, Phone, Mail, Clock, Car, Shield, Navigation } from 'lucide-react';
import { Button } from '../components/Button';

export const ContactPage: React.FC = () => {
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
              Get in Touch
            </motion.span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#222521] font-normal leading-[1.12]">
              <RevealHeading as="span" text="We would love to hear from your family." delay={0.1} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#555C51] leading-relaxed"
            >
              Whether you are inquiring about immediate enrolment availability, waitlist positions for 2026, or general fee questions, we are here to support your family.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-12 lg:py-20 bg-[#FAF8F5] border-t border-[#2C3827]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact details & Campus visit info */}
            <MotionReveal direction="left" className="lg:col-span-5 space-y-8">
              <div className="p-8 bg-[#F3EFEA] border border-[#2C3827]/10 rounded-xs space-y-6 shadow-2xs">
                <h3 className="font-serif text-2xl text-[#222521] font-normal">
                  Woollahra Campus
                </h3>

                <ul className="space-y-4 text-sm text-[#444C40]">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#4E5E46] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#222521]">Street Address:</strong>
                      <span>{centreContactDetails.address}</span>
                      <span className="block text-xs text-[#687163] mt-0.5">
                        Convenient pram &amp; stroller access from Parkland Ave
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#4E5E46] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#222521]">Telephone:</strong>
                      <a
                        href="tel:0291824500"
                        className="text-[#4E5E46] hover:underline font-medium"
                      >
                        {centreContactDetails.phone}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#4E5E46] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#222521]">Email Enquiries:</strong>
                      <a
                        href={`mailto:${centreContactDetails.email}`}
                        className="text-[#4E5E46] hover:underline"
                      >
                        {centreContactDetails.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#4E5E46] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#222521]">Operating Hours:</strong>
                      <span>{centreContactDetails.hours}</span>
                      <span className="block text-xs text-[#687163] mt-0.5">
                        50 weeks per year · Closed public holidays
                      </span>
                    </div>
                  </li>
                </ul>

                <div className="pt-4 border-t border-[#2C3827]/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#555C51]">
                    <Car className="w-4 h-4 text-[#4E5E46]" />
                    <span>Dedicated 15-minute underground drop-off parking bays</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#555C51]">
                    <Shield className="w-4 h-4 text-[#4E5E46]" />
                    <span>Child Care Subsidy (CCS) Provider ID: 1900-2819-W</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    to="/request-a-tour"
                    variant="primary"
                    size="md"
                    className="w-full"
                  >
                    Prefer to Book a Tour First?
                  </Button>
                </div>
              </div>

              {/* Styled Interactive Map Showcase */}
              <div className="rounded-xs overflow-hidden border border-[#2C3827]/10 bg-[#E7ECE6] p-6 space-y-4 shadow-2xs">
                <div className="flex items-center justify-between text-xs text-[#444C40] font-medium">
                  <span className="flex items-center gap-1.5">
                    <Navigation className="w-4 h-4 text-[#4E5E46]" />
                    Sydney Location &amp; Proximity
                  </span>
                  <span>Woollahra NSW</span>
                </div>

                <div className="bg-[#FAF8F5] p-5 rounded-xs border border-[#2C3827]/10 space-y-3">
                  <div className="font-serif text-lg text-[#222521]">
                    Central to Sydney's Eastern Suburbs
                  </div>
                  <p className="text-xs text-[#555C51] leading-relaxed">
                    Conveniently positioned 3 minutes from Edgecliff Station and Oxford Street, servicing families across Woollahra, Paddington, Double Bay, Bellevue Hill, and Bondi Junction.
                  </p>
                  <div className="text-[11px] text-[#687163] pt-1 border-t border-[#2C3827]/5 flex justify-between items-center">
                    <span>GPS: -33.8860° S, 151.2460° E</span>
                    <a
                      href="https://maps.google.com/?q=Woollahra+Sydney+NSW"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4E5E46] font-medium hover:underline"
                    >
                      Open in Maps ↗
                    </a>
                  </div>
                </div>
              </div>
            </MotionReveal>

            {/* Right Column: Interactive Enquiry Form */}
            <MotionReveal direction="right" className="lg:col-span-7">
              <EnquiryForm />
            </MotionReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
