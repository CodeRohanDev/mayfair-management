import Container from '@/components/ui/Container';

export default function OurFundsSection() {
  return (
    <section className="py-8 md:py-17 bg-teal-600">
      <Container>
        <div className="max-w-6xl mx-auto text-center px-4 md:px-0">
          <div className="flex items-center justify-center mb-8 md:mb-16">
            <div className="flex-1 h-0.5 bg-white"></div>
            <h2 className="text-2xl md:text-5xl font-light text-white text-center mx-4 md:mx-8 tracking-wider">
              OUR FUNDS
            </h2>
            <div className="flex-1 h-0.5 bg-white"></div>
          </div>

          <p className="text-white text-sm md:text-2xl leading-relaxed mb-8 md:mb-16 text-left">
            Lincolnshire Management has over $1.9 billion of private equity funds under management.
          </p>

          {/* Funds timeline with connecting lines */}
          <div className="relative flex items-center justify-between mb-0 overflow-x-auto">
            {/* Left connecting line */}
            <div className="hidden md:block flex-1 h-0.5 bg-white"></div>

            {/* Roman numeral circles I-V */}
            <div className="flex items-center justify-center w-full md:w-auto">
              {['I', 'II', 'III', 'IV', 'V'].map((numeral, index) => (
                <div key={numeral} className="flex items-center">
                  <div className="w-12 h-12 md:w-20 md:h-20 border-2 border-white rounded-full flex items-center justify-center mx-1 md:mx-4 flex-shrink-0">
                    <span className="text-sm md:text-2xl font-light text-white">{numeral}</span>
                  </div>
                  {index < 4 && <div className="w-4 md:w-30 h-0.5 bg-white"></div>}
                </div>
              ))}
            </div>

            {/* Right connecting line */}
            <div className="hidden md:block flex-1 h-0.5 bg-white"></div>
          </div>
          {/* 2022 positioned in bottom right */}
          <div className="text-right mt-4 mr-2 md:mr-5">
            <div className="text-4xl md:text-7xl font-bold text-white leading-none">2022</div>
          </div>
        </div>
      </Container>
    </section>
  );
}