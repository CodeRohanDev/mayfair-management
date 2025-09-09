'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TeamMember } from '@/data/leadership';

interface OtherBiosDropdownProps {
  allMembers: TeamMember[];
  currentMemberId: string;
}

export default function OtherBiosDropdown({ allMembers, currentMemberId }: OtherBiosDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Filter out current member and get other members
  const otherMembers = allMembers.filter(m => m.id !== currentMemberId);

  return (
    <div className="relative">
      {/* Other Bios Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-teal-600 p-4 text-white font-semibold text-sm flex items-center justify-between hover:bg-teal-700 transition-colors"
      >
        <span>Other Bios</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▲
        </span>
      </button>

      {/* Full Width Dropdown Content */}
      {isOpen && (
        <div className="absolute top-full left-0 bg-white border-2 border-teal-600 border-t-0 z-50 shadow-lg" 
             style={{ 
               width: '100vw', 
               marginLeft: 'calc(-50vw + 50%)',
               maxWidth: '100vw'
             }}>
          {/* Scrollbar indicator at the top */}
          <div className="flex justify-between items-center p-3 bg-gray-100 border-b border-teal-600">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm">◀</span>
            </div>
            
            {/* Custom scrollbar indicator */}
            <div className="flex-1 mx-4">
              <div className="w-full h-3 bg-gray-300 rounded-full relative">
                <div className="absolute top-0 right-0 w-4 h-3 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm">▶</span>
            </div>
          </div>

          {/* Scrollable Member List */}
          <div className="max-h-96 overflow-y-auto other-bios-scroll">
            {otherMembers.map((member) => (
              <Link
                key={member.id}
                href={`/leadership/${member.id}`}
                className="block px-6 py-4 text-gray-700 hover:bg-gray-50 border-b border-teal-600 last:border-b-0 transition-colors text-base"
                onClick={() => setIsOpen(false)}
              >
                {member.name}
              </Link>
            ))}
          </div>

          {/* View All Bios Button */}
          <Link
            href="/leadership"
            className="block bg-gray-700 text-white text-center py-4 hover:bg-gray-600 transition-colors font-semibold text-base"
            onClick={() => setIsOpen(false)}
          >
            View All Bios
          </Link>
        </div>
      )}
    </div>
  );
}