'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import { portfolioData } from '@/data/portfolio';

export default function AllInvestmentsSection() {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const allInvestments = portfolioData.allInvestments.investments;

  // Filter investments based on status (for demo purposes, we'll show all as active)
  const getFilteredInvestments = () => {
    const filtered = [...allInvestments];

    // Add sorting logic
    if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  };

  const filteredInvestments = getFilteredInvestments();

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20" style={{ backgroundColor: '#00a887' }}>
      <Container>
        {/* Header */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex-1 h-0.5 bg-white"></div>
          <h2 className="text-5xl font-light text-white text-center mx-8 tracking-wider">
            ALL INVESTMENTS
          </h2>
          <div className="flex-1 h-0.5 bg-white"></div>
        </div>

        {/* Filter Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          <button
            onClick={() => setFilter('realized')}
            className={`px-6 py-3 bg-white text-teal-700 font-medium rounded-sm transition-colors duration-200 flex items-center justify-center ${filter === 'realized' ? 'ring-2 ring-white' : ''
              }`}
          >
            Realized
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <button
            onClick={() => setSortBy(sortBy === 'name' ? 'fund' : 'name')}
            className={`px-6 py-3 bg-white text-teal-700 font-medium rounded-sm transition-colors duration-200 flex items-center justify-center ${sortBy === 'fund' ? 'ring-2 ring-white' : ''
              }`}
          >
            Sort by Fund
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <button
            onClick={() => setFilter('open')}
            className={`px-6 py-3 bg-white text-teal-700 font-medium rounded-sm transition-colors duration-200 flex items-center justify-center ${filter === 'open' ? 'ring-2 ring-white' : ''
              }`}
          >
            Open All
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>

        {/* Investments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0 text-white">
          {filteredInvestments.map((investment, index) => (
            <div key={index}>
              {/* Investment Name - Clickable */}
              <div
                className="flex items-center cursor-pointer transition-colors duration-200 py-1 px-2"
                onClick={() => toggleExpanded(index)}
              >
                <span className="text-sm font-light">{investment.name}</span>
                <span className={`text-teal-200 transition-transform duration-200 ml-2 ${expandedIndex === index ? 'rotate-45' : ''
                  }`}>
                  +
                </span>
              </div>

              {/* Expanded Description */}
              {expandedIndex === index && (
                <div
                  className="px-2 pb-3 transition-all duration-300 ease-in-out"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <p className="text-white/90 text-xs leading-relaxed">
                    {investment.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        
      </Container>
    </section>
  );
}