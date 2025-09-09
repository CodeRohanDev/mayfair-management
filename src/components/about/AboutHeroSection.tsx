import Container from '@/components/ui/Container';

export default function AboutHeroSection() {
  return (
    <section
      className="relative min-h-[600px] sm:min-h-[600px] md:min-h-[600px] lg:min-h-[600px] xl:min-h-[700px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(10, 27, 47, 0.95) 0%, rgba(10, 27, 47, 0.85) 20%, rgba(64, 128, 191, 0.3) 100%), url('/ABOUT-HERO.jpg')`
      }}
    >
      <Container className="relative py-41">
        <div className="max-w-4xl text-left flex items-center min-h-full">
          <div className="max-w-3xl">
            <div className="w-35 h-0.5 mb-6" style={{ backgroundColor: '#4080bf' }}></div>
            <h1 className="text-xl md:text-3xl lg:text-3xl font-light text-white leading-relaxed">
              Founded in 1986, <span className="font-semibold">MayFair Management</span> is an experienced private equity firm focused on investing in companies across the lower middle market.
            </h1>
          </div>
        </div>
      </Container>
    </section>
  );
}