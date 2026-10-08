import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import { centreContactDetails } from '../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#222521] text-[#FAF8F5] pt-16 pb-12 border-t border-[#2C3827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#FAF8F5]/10">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-normal tracking-tight text-[#FAF8F5]">
                Willow &amp; Sage
              </span>
              <span className="block text-xs uppercase tracking-widest text-[#8A9D84] font-medium mt-0.5">
                Early Learning · Sydney
              </span>
            </Link>
            <p className="text-sm text-[#A8B2A4] leading-relaxed max-w-sm">
              A nature-led, architectural early childhood sanctuary in Sydney’s Eastern Suburbs.
              Cultivating joyful wonder, primary security, and lifelong creative agency for children aged 6 weeks to 6 years.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#8A9D84]">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#8A9D84]" />
                Australian CCS Approved
              </span>
              <span className="inline-flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-[#8A9D84]" />
                Exceeding NQS Standards
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8A9D84] font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D1D8CE]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Our Story &amp; Philosophy
                </Link>
              </li>
              <li>
                <Link to="/learning" className="hover:text-white transition-colors">
                  Learning Approach
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-white transition-colors">
                  Rooms &amp; Programs
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  Our Educators
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-white transition-colors">
                  Parent FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Rooms / Ages */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8A9D84] font-semibold mb-4">
              Our Programs
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D1D8CE]">
              <li>
                <Link to="/programs" className="hover:text-white transition-colors">
                  The Nest (6 wks – 18 mos)
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-white transition-colors">
                  The Meadow (18 mos – 3 yrs)
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-white transition-colors">
                  The Atelier (3 – 5 yrs Kindy)
                </Link>
              </li>
              <li>
                <Link to="/learning" className="hover:text-white transition-colors">
                  Outdoor Nature Immersion
                </Link>
              </li>
              <li>
                <Link to="/learning" className="hover:text-white transition-colors">
                  Wholefoods Culinary Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8A9D84] font-semibold mb-4">
              Woollahra Campus
            </h4>
            <ul className="space-y-3 text-sm text-[#D1D8CE]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8A9D84] shrink-0 mt-0.5" />
                <span>{centreContactDetails.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8A9D84] shrink-0" />
                <a href="tel:0291824500" className="hover:text-white transition-colors">
                  {centreContactDetails.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8A9D84] shrink-0" />
                <a
                  href={`mailto:${centreContactDetails.email}`}
                  className="hover:text-white transition-colors"
                >
                  {centreContactDetails.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-[#A8B2A4]">
                <Clock className="w-4 h-4 text-[#8A9D84] shrink-0 mt-0.5" />
                <span>{centreContactDetails.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A9D84]">
          <div>
            &copy; {new Date().getFullYear()} {centreContactDetails.name}. All rights reserved. · ABN {centreContactDetails.abn}
          </div>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">
              Enrolment Enquiries
            </Link>
            <Link to="/request-a-tour" className="hover:text-white transition-colors">
              Book a Tour
            </Link>
            <span className="text-[#555C51]">·</span>
            <span>Sydney, NSW, Australia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
