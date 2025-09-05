import Container from '@/components/ui/Container';
import { leadershipData } from '@/data/leadership';

export default function LeadershipDescription() {
  return (
    <section className="py-1 bg-white">
      <Container>
        <div className={`flex items-center justify-center mb-5 mt-20`}>
          <div className="flex-1 h-0.5 bg-purple-900"></div>
          <h2 className="text-5xl font-light text-purple-900 text-center mx-8 tracking-wider">
            LEADERSHIP
          </h2>
          <div className="flex-1 h-0.5 bg-purple-900"></div>
        </div>
        <p className="text-2xl leading-relaxed text-gray-700 font-light px-4 pt-5">
          {leadershipData.description.text}
        </p>
    </Container>
    </section >
  );
}