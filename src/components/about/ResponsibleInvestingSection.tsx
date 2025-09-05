'use client';

import Link from 'next/link';
import Container from '@/components/ui/Container';
import { leadershipData } from '@/data/leadership';

export default function ResponsibleInvestingSection() {
  // Get Philip Kim's data (first member in investment committee)
  const philipKim = leadershipData.sections.investmentCommittee.members[0];
  return (
    <section className="py-8 md:py-20 bg-white">
      <Container>
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <div className={`flex items-center justify-center mb-8 md:mb-16 `}>
            <div className="flex-1 h-px bg-purple-900"></div>
            <h2 className="text-2xl md:text-5xl font-light text-purple-900 text-center mx-4 md:mx-8 tracking-wider">
              RESPONSIBLE INVESTING
            </h2>
            <div className="flex-1 h-px bg-purple-900"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-6">
            <div className="space-y-4 md:space-y-0 lg:order-1 lg:col-span-2">
              <p className="text-gray-700 text-sm md:text-2xl leading-relaxed">
                The firm has made ESG a priority because when thoughtfully executed, responsible investing is a win for everyone involved.
              </p>
              <p className="text-gray-700 text-sm md:text-2xl leading-relaxed">
                The United Nations Principles for Responsible Investing (UNPRI) is the springboard for Lincolnshire Management&apos;s ESG approach, and its early entry into adopting an ESG strategy means there is added experience and perspective to each one of Lincolnshire Management&apos;s investments. The firm&apos;s executives also work alongside portfolio management teams to develop strategic and sustainable plans for their businesses. This means that each company&apos;s ESG strategies are unique and tailored to their business, operations and industry.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end lg:order-2 w-full lg:max-w-[250px] lg:ml-auto">
              {/* Photo section */}
              <Link href={`/leadership/${philipKim.id}`} className="w-48 md:w-56 lg:w-full group cursor-pointer">
                <div className="aspect-[3/4] bg-gray-50 relative overflow-hidden">
                  {/* Teal hover overlay with arrow icon */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-65 transition-all duration-300 z-10 flex items-center justify-center" style={{ backgroundColor: '#00a887' }}>
                    <div className="w-16 h-16 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <img src="/icon-arrows.svg" alt="Arrow" className="w-16 h-16" />
                    </div>
                  </div>
                  
                  <img
                    src={philipKim.image}
                    alt={philipKim.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='384' viewBox='0 0 320 384'%3E%3Crect width='320' height='384' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='16' fill='%236b7280'%3ETeam Member%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>

                {/* Member info section */}
                <div className="p-3 md:p-4 bg-gray-50">
                  {/* Teal accent line */}
                  <div className="w-6 md:w-8 h-0.5 bg-teal-500 mb-2"></div>

                  {/* Name */}
                  <h3 className="text-sm md:text-base font-normal text-gray-700 mb-1 leading-tight">
                    {philipKim.name}
                  </h3>

                  {/* Title */}
                  <p className="text-xs md:text-sm font-semibold text-gray-800 uppercase tracking-wide leading-tight mb-2">
                    {philipKim.title}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}