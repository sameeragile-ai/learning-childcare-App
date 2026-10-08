import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, GraduationCap } from 'lucide-react';
import { TeamMember } from '../data/siteData';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="bg-[#FAF8F5] border border-[#2C3827]/10 p-7 rounded-xs flex flex-col justify-between space-y-5 hover:border-[#4E5E46]/40 hover:shadow-xs transition-all duration-300 group"
    >
      <div>
        {/* Header with avatar / portrait slot */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xs bg-[#E7ECE6] border border-[#2C3827]/10 flex items-center justify-center shrink-0 text-[#4E5E46] font-serif text-lg font-medium transition-colors duration-200 group-hover:bg-[#D9E1D7]">
            {initials}
          </div>
          <div>
            <h3 className="font-serif text-xl font-normal text-[#222521] group-hover:text-[#4E5E46] transition-colors duration-200">
              {member.name}
            </h3>
            <p className="text-xs uppercase tracking-wider text-[#8A9D84] font-semibold mt-0.5">
              {member.role}
            </p>
            <p className="text-xs text-[#687163] mt-1 font-medium">
              {member.experience}
            </p>
          </div>
        </div>

        {/* Credentials */}
        <div className="mt-4 pt-4 border-t border-[#2C3827]/5 flex items-center gap-2 text-xs text-[#555C51]">
          <GraduationCap className="w-4 h-4 text-[#4E5E46] shrink-0" />
          <span className="truncate">{member.credentials}</span>
        </div>

        {/* Bio */}
        <p className="mt-4 text-sm text-[#555C51] leading-relaxed">
          {member.bio}
        </p>
      </div>

      {/* Focus Area */}
      <div className="pt-3 border-t border-[#2C3827]/5 text-xs text-[#687163]">
        <span className="font-medium text-[#222521]">Pedagogical Focus:</span>{' '}
        {member.focus}
      </div>
    </motion.div>
  );
};
