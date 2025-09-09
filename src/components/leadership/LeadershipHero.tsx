import Container from '@/components/ui/Container';
import { leadershipData } from '@/data/leadership';

export default function LeadershipHero() {
  return (
    <section
      className="relative min-h-[600px] sm:min-h-[600px] md:min-h-[600px] lg:min-h-[600px] xl:min-h-[700px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(10, 27, 47, 0.95) 0%, rgba(10, 27, 47, 0.85) 20%, rgba(64, 128, 191, 0.3) 100%), url('/LEADERSHIP_background.jpg')`
      }}
    >
      <Container className="relative">
        <div className="text-left max-w-3xl mr-auto px-4 md:px-0">
          <div className="w-24 md:w-35 h-0.5 mb-4 md:mb-6" style={{ backgroundColor: '#4080bf' }}></div>
          <h1 className="text-lg md:text-2xl lg:text-3xl font-light text-white leading-relaxed">
            <span className="font-semibold">MayFair Management</span> is a private equity firm with a more than 30-year track record of successfully investing in companies across the lower middle market.
          </h1>
        </div>
      </Container>
    </section>
  );
}
