'use client';

import Container from '@/components/ui/Container';

interface NewsFilterSectionProps {
    onFilterChange: (filter: string) => void;
    activeFilter: string;
}

const filters = [
    { id: 'all', label: 'By Archive' },
    { id: 'press', label: 'Press Releases' },
    { id: 'firm', label: 'Firm News' },
    { id: 'portfolio', label: 'Portfolio News' }
];

export default function NewsFilterSection({ onFilterChange, activeFilter }: NewsFilterSectionProps) {
    return (
        <section className="bg-white py-16 pb-0">
            <Container>
                <div className="text-center">
                    {/* IN THE NEWS heading with decorative lines */}
                    <div className={`flex items-center justify-center mb-16 `}>
                        <div className="flex-1 h-0.5 bg-purple-900"></div>
                        <h2 className="text-5xl font-light text-purple-900 text-center mx-8 tracking-wider">
                            IN THE NEWS
                        </h2>
                        <div className="flex-1 h-0.5 bg-purple-900"></div>
                    </div>

                    {/* Filter buttons */}
                    <div className="flex flex-wrap justify-between gap-6">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => onFilterChange(filter.id)}
                                className="bg-teal-600 text-white px-18 py-2 font-medium transition-all duration-300 hover:bg-teal-700 flex gap-2"
                                style={{ minWidth: '200px' }}
                            >
                                <span className="text-sm">📄</span>
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}