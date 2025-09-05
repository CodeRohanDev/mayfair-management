import Container from '@/components/ui/Container';
import { portfolioData } from '@/data/portfolio';

export default function RepresentativeInvestmentsSection() {
  return (
    <section className="py-0 pb-25 bg-white">
      <Container>
        <div className="mb-6">
          <h2 className="text-4xl font-semibold text-teal-700 mb-2">Representative Investments</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.investments.map((investment) => (
            <div
              key={investment.id}
              className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-teal-600 overflow-hidden min-h-[400px]"
            >
              {/* Left side - Company info */}
              <div className="bg-white pl-0 pt-4 flex flex-col justify-between md:col-span-1">
                <div>
                  <h3 className="text-lg font-medium text-slate-800 uppercase mb-2">
                    {investment.name}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {investment.fundLevel}
                  </p>
                  <a
                    href={investment.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-700 transition-colors font-medium text-xl"
                  >
                    Website »
                  </a>
                </div>
                <div>
                  
                </div>
              </div>

              {/* Right side - Description */}
              <div className="bg-gray-200 p-6 md:col-span-2">
                <p className="text-gray-700 text-lg font-normal leading-relaxed">
                  {investment.description} {investment.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}