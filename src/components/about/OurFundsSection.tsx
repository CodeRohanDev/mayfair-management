import Container from '@/components/ui/Container';

export default function OurFundsSection() {
  return (
    <section className="py-8 md:py-17 overflow-hidden" style={{ backgroundColor: '#0a1b2f' }}>
      <Container>
        <div className="max-w-6xl mx-auto text-center px-4 md:px-6 lg:px-0">
          <div className="flex items-center justify-center mb-8 md:mb-16">
            <div className="flex-1 h-0.5 bg-white animate-[slideInLeft_1s_ease-in-out]"></div>
            <h2 className="text-2xl md:text-5xl font-light text-white text-center mx-4 md:mx-8 tracking-wider">
              OUR FUNDS
            </h2>
            <div className="flex-1 h-0.5 bg-white animate-[slideInRight_1s_ease-in-out]"></div>
          </div>

          <p className="text-white text-sm md:text-2xl leading-relaxed mb-8 md:mb-16 text-left">
            MayFair Management has over $1.9 billion of private equity funds under management.
          </p>

          {/* Funds timeline with connecting lines */}
          <div className="relative mb-0">
            {/* Container for the timeline */}
            <div className="flex items-center justify-center">
              {/* Left connecting line */}
              <div className="hidden lg:block flex-1 h-0.5 bg-white max-w-16"></div>

              {/* Roman numeral circles I-V */}
              <div className="flex items-center justify-center px-4">
                {['I', 'II', 'III', 'IV', 'V'].map((numeral, index) => (
                  <div key={numeral} className="flex items-center">
                    <div className="w-12 h-12 md:w-16 lg:w-20 md:h-16 lg:h-20 border-2 border-white rounded-full flex items-center justify-center mx-1 md:mx-2 lg:mx-4 flex-shrink-0">
                      <span className="text-sm md:text-xl lg:text-2xl font-light text-white">{numeral}</span>
                    </div>
                    {index < 4 && <div className="w-3 md:w-6 lg:w-12 h-0.5 bg-white"></div>}
                  </div>
                ))}
              </div>

              {/* Right connecting line */}
              <div className="hidden lg:block flex-1 h-0.5 bg-white max-w-16"></div>
            </div>
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