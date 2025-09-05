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
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Filter out current member and get other members
  const otherMembers = allMembers.filter(m => m.id !== currentMemberId);
  
  // Number of items to show at once
  const itemsPerPage = 6;
  
  // Get current page items
  const startIndex = currentIndex;
  const endIndex = Math.min(startIndex + itemsPerPage, otherMembers.length);
  const currentPageMembers = otherMembers.slice(startIndex, endIndex);
  
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(Math.max(0, currentIndex - itemsPerPage));
    }
  };
  
  const handleNext = () => {
    if (currentIndex + itemsPerPage < otherMembers.length) {
      setCurrentIndex(Math.min(otherMembers.length - itemsPerPage, currentIndex + itemsPerPage));
    }
  };
  
  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex + itemsPerPage < otherMembers.length;

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

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-2 border-teal-600 border-t-0 z-50">
          {/* Navigation Controls */}
          {otherMembers.length > itemsPerPage && (
            <div className="flex justify-between items-center p-2 bg-gray-100 border-b border-teal-600">
              <button
                onClick={handlePrevious}
                disabled={!canGoPrevious}
                className={`p-1 ${canGoPrevious ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 cursor-not-allowed'}`}
              >
                ◀
              </button>
              
              {/* Scrollbar indicator */}
              <div className="flex-1 mx-2">
                <div className="w-full h-2 bg-gray-200 rounded">
                  <div 
                    className="h-full bg-gray-600 rounded transition-all duration-200"
                    style={{ 
                      width: `${(itemsPerPage / otherMembers.length) * 100}%`,
                      marginLeft: `${(currentIndex / otherMembers.length) * 100}%`
                    }}
                  />
                </div>
              </div>
              
              <button
                onClick={handleNext}
                disabled={!canGoNext}
                className={`p-1 ${canGoNext ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 cursor-not-allowed'}`}
              >
                ▶
              </button>
            </div>
          )}

          {/* Member List */}
          <div className="max-h-80 overflow-y-auto">
            {currentPageMembers.map((member) => (
              <Link
                key={member.id}
                href={`/leadership/${member.id}`}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 border-b border-teal-600 last:border-b-0 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {member.name}
              </Link>
            ))}
          </div>

          {/* View All Bios Button */}
          <Link
            href="/leadership"
            className="block bg-gray-700 text-white text-center py-3 hover:bg-gray-600 transition-colors font-semibold"
            onClick={() => setIsOpen(false)}
          >
            View All Bios
          </Link>
        </div>
      )}
    </div>
  );
}