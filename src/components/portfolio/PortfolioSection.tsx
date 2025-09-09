import Container from '@/components/ui/Container';

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div>
          <div className={`flex items-center mb-16 `}>
             <div className="flex-1 h-0.5 animate-[slideInLeft_1s_ease-in-out]" style={{ backgroundColor: '#0a1b2f' }}></div>
            <h2 className="text-5xl font-light mx-8 tracking-wider" style={{ color: '#0a1b2f' }}>
              PORTFOLIO
            </h2>
            <div className="flex-1 h-0.5 animate-[slideInRight_1s_ease-in-out]" style={{ backgroundColor: '#0a1b2f' }}></div>
          </div>
          <p className="text-2xl font-light text-gray-600 max-w-6xl leading-relaxed">
            MayFair Management focuses on investing and providing support to founders and operators of family-owned companies. Our continued success comes from aligning with the founders, families, and management teams to meet their goals and accelerate the growth of their business to meet each companies&apos; fullest potential.
          </p>
          <p className="text-2xl font-light text-gray-600 max-w-6xl leading-relaxed">
            As a result, MayFair Management&apos;s team has deep experience across a multitude of industries, primarily with business & industrial services, niche manufacturing, and consumer goods & services.
          </p>
        </div>
      </Container>
    </section>
  );
}