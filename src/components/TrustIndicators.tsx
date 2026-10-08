import React from 'react';
import { motion, type Variants } from 'motion/react';
import { Compass, Users, Sprout, Heart, Shield, Award } from 'lucide-react';

export const TrustIndicators: React.FC = () => {
  const indicators = [
    {
      icon: <Compass className="w-5 h-5 text-[#4E5E46]" />,
      title: 'Architectural Nature Spaces',
      description:
        'Indoor and outdoor environments designed with Australian timber, natural stone, open light, and lush edible gardens.',
    },
    {
      icon: <Award className="w-5 h-5 text-[#4E5E46]" />,
      title: 'University-Qualified Educators',
      description:
        'Dedicated degree-qualified Early Childhood Teachers guiding every room, exceeding National Quality Framework ratios.',
    },
    {
      icon: <Sprout className="w-5 h-5 text-[#4E5E46]" />,
      title: 'Reggio & EYLF Curriculum',
      description:
        'Inquiry-based, project-driven learning honoring children’s curiosity, autonomy, and environmental stewardship.',
    },
    {
      icon: <Heart className="w-5 h-5 text-[#4E5E46]" />,
      title: 'Family-First Community',
      description:
        'Warm, unhurried handovers, real-time developmental journals, and collaborative partnerships with parents.',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-16 bg-[#F3EFEA] border-y border-[#2C3827]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {indicators.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="space-y-3 p-6 bg-[#FAF8F5]/90 border border-[#2C3827]/10 rounded-xs shadow-2xs hover:shadow-sm hover:border-[#4E5E46]/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xs bg-[#E7ECE6] flex items-center justify-center transition-colors duration-200 group-hover:bg-[#D9E1D7]">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg font-medium text-[#222521] group-hover:text-[#4E5E46] transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-sm text-[#555C51] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
