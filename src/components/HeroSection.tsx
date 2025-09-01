import Container from '@/components/ui/Container';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-[350px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(30, 41, 59, 0.85) 50%, rgba(20, 184, 166, 0.3) 100%), url('/hero banner image.jpg')`
      }}
    >
      <Container className="relative pt-24 py-48">
        <div className="max-w-3xl mr-auto">
          <div className="w-35 h-0.5 bg-green-700 mb-6"></div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed">
            <span className="font-semibold">MayFair Management</span> is a private equity firm with a more than 30-year track record of successfully investing in companies across the lower middle market.
          </h1>
        </div>
      </Container>
    </section>
  );
}