import Container from '@/components/ui/Container';
import { leadershipData } from '@/data/leadership';

export default function LeadershipHero() {
  return (
    <section
      className="relative h-[582px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(88, 28, 135, 0.7) 0%, rgba(59, 130, 246, 0.3) 50%, rgba(37, 99, 235, 0.2) 100%), url('${leadershipData.hero.backgroundImage}')`
      }}
    >
      <Container className="relative">
        <div className="text-left max-w-3xl mr-auto">
          <div className="w-35 h-0.5 bg-green-700 mb-6"></div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed">
            <span className="font-semibold">MayFair Management</span> is a private equity firm with a more than 30-year track record of successfully investing in companies across the lower middle market.
          </h1>
        </div>
      </Container>
    </section>
  );
}