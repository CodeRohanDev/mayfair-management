import Container from '@/components/ui/Container';
import { leadershipData } from '@/data/leadership';

export default function LeadershipDescription() {
  return (
    <section className="py-1 bg-white">
      <Container>
        <div className={`flex items-center justify-center mb-4 md:mb-5 mt-12 md:mt-20 px-4 md:px-0`}>
          <div className="flex-1 h-0.5 bg-purple-950 animate-[slideInLeft_1s_ease-in-out]"></div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-purple-900 text-center mx-4 md:mx-8 tracking-wider">
            LEADERSHIP
          </h2>
          <div className="flex-1 h-0.5 bg-purple-950 animate-[slideInRight_1s_ease-in-out]"></div>
        </div>
        <p className="text-sm md:text-xl lg:text-2xl leading-relaxed text-gray-700 font-light px-4 pt-3 md:pt-5">
          {leadershipData.description.text}
        </p>
    </Container>
    </section >
  );
}