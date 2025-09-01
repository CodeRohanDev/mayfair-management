import Image from 'next/image';
import { statsData } from '@/data/stats';
import Container from '@/components/ui/Container';

export default function StatsSection() {
  return (
    <section className="py-20 bg-slate-800">
      <Container>
<div className="flex items-center justify-center mb-16">
          <div className="flex-1 h-px bg-white"></div>
          <h2 className="text-3xl font-light text-white text-center mx-8 tracking-wider">
          AT A GLANCE
        </h2>
          <div className="flex-1 h-px bg-white"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {statsData.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="flex justify-center mb-6">
                <Image 
                  src={stat.icon} 
                  alt={`${stat.label} icon`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto"
                />
              </div>
              <div className="text-7xl font-blod-500 text-teal-600 mb-4">
                {stat.number}
              </div>
              <div className="text-white text-m leading-relaxed max-w-xs mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}