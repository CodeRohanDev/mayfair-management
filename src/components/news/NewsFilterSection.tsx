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
                         <div className="flex-1 h-0.5 bg-purple-900 animate-[slideInLeft_1s_ease-in-out]"></div>
                        <h2 className="text-5xl font-light text-purple-900 text-center mx-8 tracking-wider">
                            IN THE NEWS
                        </h2>
                        <div className="flex-1 h-0.5 bg-purple-900 animate-[slideInRight_1s_ease-in-out]"></div>
                    </div>

                    {/* Filter buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => onFilterChange(filter.id)}
                                className={`
                                    px-6 py-3 font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm
                                    ${activeFilter === filter.id 
                                        ? 'bg-teal-700 text-white shadow-lg' 
                                        : 'bg-teal-600 text-white hover:bg-teal-700'
                                    }
                                `}
                            >
                                <span className="text-sm">📄</span>
                                <span className="whitespace-nowrap">{filter.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}