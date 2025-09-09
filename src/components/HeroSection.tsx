import Container from '@/components/ui/Container';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[600px] sm:min-h-[600px] md:min-h-[600px] lg:min-h-[600px] xl:min-h-[700px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(10, 27, 47, 0.95) 0%, rgba(10, 27, 47, 0.85) 20%, rgba(64, 128, 191, 0.3) 100%), url('/hero banner image.jpg')`
      }}
    >
      <Container className="relative sm:py-1 md:py-2 lg:py-2 xl:py-28 flex items-center min-h-full">
        <div className="max-w-3xl mr-auto">
          <div className="w-16 sm:w-20 md:w-24 lg:w-32 xl:w-35 h-0.5 mb-4 sm:mb-5 md:mb-6" style={{ backgroundColor: '#4080bf' }}></div>
          <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-light text-white leading-relaxed">
            <span className="font-semibold">MayFair Management</span> is a private equity firm with a more than 30-year track record of successfully investing in companies across the lower middle market.
          </h1>
        </div>
      </Container>
    </section>
  );
}
