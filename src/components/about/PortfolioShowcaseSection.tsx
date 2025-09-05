'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';

interface PortfolioCompany {
  id: string;
  name: string;
  image: string;
  description: string;
  detailImage: string;
  link?: string;
}

const portfolioCompanies: PortfolioCompany[] = [
  {
    id: 'desch-plantpak',
    name: 'Desch Plantpak',
    image: '/despach-ABOUT.jpg',
    description: 'Desch Plantpak, a designer, manufacturer and supplier of premium plant containers, operates manufacturing facilities across the world. The company has implemented environmentally friendly initiatives such as sustainable materials and eco-friendly production processes.',
    detailImage: '/despach-ABOUT.jpg'
  },
  {
    id: 'nursery-supplies',
    name: 'Nursery Supplies Inc. (NSI)',
    image: '/NSI.jpg',
    description: 'Nursery Supplies Inc., a leading provider of horticultural products and services, operates distribution centers nationwide. The company focuses on sustainable gardening solutions and environmentally responsible supply chain management.',
    detailImage: '/NSI.jpg'
  },
  {
    id: 'delba-holdings',
    name: 'Delba Holdings, Inc.',
    image: '/DALBO-tankline2.jpg',
    description: 'Delba Holdings, Inc., a diversified industrial company, operates across multiple sectors including manufacturing and logistics. The company has implemented comprehensive environmental management systems and sustainable operational practices.',
    detailImage: '/DALBO-tankline2.jpg'
  },
  {
    id: 'true-sports',
    name: 'TRUE Sports',
    image: '/TRUE-skate_custom_performance_video_thumbnail.jpg',
    description: 'TRUE Sports, a designer, manufacturer and supplier of premium sporting goods, operates manufacturing facilities across the world. Throughout all of these locations, the company has implemented environmentally friendly initiatives such as removing hazardous chemicals from wastewater, recycling waste oil, reducing paper usage with Go Green, and treating gas emission to reducing the amount of chemicals entering the atmosphere.',
    detailImage: '/TRUE-skate_custom_performance_video_thumbnail.jpg',
    link: 'TRUE Sports'
  }
];

export default function PortfolioShowcaseSection() {
  const [selectedCompany, setSelectedCompany] = useState<string | null>('true-sports');

  const handleCardClick = (companyId: string) => {
    setSelectedCompany(companyId);
  };

  const selectedCompanyData = portfolioCompanies.find(company => company.id === selectedCompany);

  return (
    <section className="py-0 bg-white">
      <Container>
        <div className="max-w-6xl mx-auto py-4 md:py-20 px-4 md:px-0">
          {/* Portfolio Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-13 relative">
            {portfolioCompanies.map((company) => (
              <div
                key={company.id}
                className={`relative cursor-pointer transition-all duration-300 ${selectedCompany === company.id ? 'ring-2 ring-teal-500' : ''
                  }`}
                onClick={() => handleCardClick(company.id)}
              >
                <div className="aspect-[4/3] md:aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg md:rounded-none">
                  <img
                    src={company.image}
                    alt={company.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.log(`Failed to load image: ${company.image}`);
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='16' fill='%236b7280'%3E${company.name}%3C/text%3E%3C/svg%3E`;
                    }}
                    onLoad={() => console.log(`Successfully loaded image: ${company.image}`)}
                  />
                  {/* Overlay with company name */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                    <div className="p-2 md:p-4 text-white w-full">
                      <h3 className="text-xs md:text-lg font-semibold leading-tight">{company.name}</h3>
                    </div>
                  </div>
                </div>

                {/* Arrow indicator for selected card */}
                {selectedCompany === company.id && (
                  <div className="absolute -bottom-4 md:-bottom-9 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] md:border-l-[18px] md:border-r-[18px] md:border-t-[18px] border-l-transparent border-r-transparent border-t-teal-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Expandable Detail Section */}
          {selectedCompanyData && (
            <div className="bg-[#efefef] shadow-lg overflow-hidden animate-in slide-in-from-top duration-300 rounded-lg md:rounded-none mx-2 md:mx-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Detail Image - Show first on mobile */}
                <div className="relative order-1 lg:order-2">
                  <img
                    src={selectedCompanyData.detailImage}
                    alt={`${selectedCompanyData.name} detail`}
                    className="w-full h-full object-cover min-h-[180px] md:min-h-[300px]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f3f6f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' fill='%236b7280'%3E${selectedCompanyData.name} Detail%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                </div>

                {/* Text Content */}
                <div className="p-4 md:p-8 lg:p-12 order-2 lg:order-1">
                  <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-3 md:mb-6">
                    {selectedCompanyData.name}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-lg">
                    {selectedCompanyData.link ? (
                      <>
                        <span className="underline text-teal-600">{selectedCompanyData.link}</span>
                        {selectedCompanyData.description.replace(selectedCompanyData.link, '')}
                      </>
                    ) : (
                      selectedCompanyData.description
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}