import Container from '@/components/ui/Container';

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div>
          <div className={`flex items-center mb-16 `}>
            <div className="flex-1 h-0.5 bg-purple-900"></div>
            <h2 className="text-5xl font-light text-purple-900 mx-8 tracking-wider">
              PORTFOLIO
            </h2>
            <div className="flex-1 h-0.5 bg-purple-900"></div>
          </div>
          <p className="text-2xl font-light text-gray-600 max-w-6xl leading-relaxed">
            Lincolnshire Management focuses on investing and providing support to founders and operators of family-owned companies. Our continued success comes from aligning with the founders, families, and management teams to meet their goals and accelerate the growth of their business to meet each companies&apos; fullest potential.
          </p>
          <p className="text-2xl font-light text-gray-600 max-w-6xl leading-relaxed">
            As a result, Lincolnshire Management&apos;s team has deep experience across a multitude of industries, primarily with business & industrial services, niche manufacturing, and consumer goods & services.
          </p>
        </div>
      </Container>
    </section>
  );
}