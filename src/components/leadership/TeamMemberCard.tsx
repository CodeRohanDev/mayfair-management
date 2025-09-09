'use client';

import Link from 'next/link';
import { TeamMember } from '@/data/leadership';

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  // Check if image exists and is not a placeholder path
  const hasValidImage = member.image && 
    !member.image.includes('member') && 
    member.image !== '/team/placeholder.jpg';

  return (
    <Link href={`/leadership/${member.id}`} className="block">
      <div className="bg-white shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer">
        {/* Photo - only show if valid image exists */}
        {hasValidImage && (
          <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden group">
            {/* Teal hover overlay - only on image */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-65 transition-all duration-300 z-10 flex items-center justify-center" style={{ backgroundColor: '#00a887' }}>
              <div className="w-16 h-16 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                <svg viewBox="0 0 59.1 59.1" className="w-16 h-16">
                  <circle fill="none" stroke="white" strokeMiterlimit="10" cx="29.5" cy="29.5" r="29" />
                  <g>
                    <path fill="white" d="M17.3,38.2l7.6-8.4l-7.6-8.4l1.9-4.1L30.4,27v5.8l-11.2,9.6L17.3,38.2z M30.5,38.2l7.6-8.4l-7.6-8.4l1.9-4.1L43.5,27v5.8l-11.2,9.6L30.5,38.2z"/>
                  </g>
                </svg>
              </div>
            </div>
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                // Hide the entire photo section if image fails to load
                const target = e.target as HTMLImageElement;
                const photoSection = target.closest('.aspect-\\[3\\/4\\]') as HTMLElement;
                if (photoSection) {
                  photoSection.style.display = 'none';
                }
              }}
            />
          </div>
        )}
        
        {/* Member info section */}
        <div className="p-3 md:p-6 bg-gray-50">
          {/* Teal accent line */}
          <div className="w-12 md:w-16 h-0.5 bg-teal-500 mb-2 md:mb-4"></div>
          
          {/* Name */}
          <h3 className="text-sm md:text-lg font-normal text-gray-700 mb-1 md:mb-2 leading-tight">
            {member.name}
          </h3>
          
          {/* Title */}
          <p className="text-xs md:text-sm font-semibold text-gray-800 uppercase tracking-wide leading-tight mb-2 md:mb-3">
            {member.title}
          </p>
        </div>
      </div>
    </Link>
  );
}