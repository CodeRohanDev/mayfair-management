'use client';

import Image from 'next/image';
import { statsData } from '@/data/stats';
import Container from '@/components/ui/Container';
import { useEffect, useRef, useState } from 'react';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-slate-800">
      <Container>
        <div className={`flex items-center justify-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <div className="flex-1 h-px bg-white"></div>
          <h2 className="text-5xl font-light text-white text-center mx-8 tracking-wider">
            AT A GLANCE
          </h2>
          <div className="flex-1 h-px bg-white"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-0 min-h-96">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className={`text-center transition-all duration-1000 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
                }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className="flex justify-center mb-6">
                <Image
                  src={stat.icon}
                  alt={`${stat.label} icon`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={`w-auto h-auto transition-transform duration-700 ${isVisible ? 'scale-100' : 'scale-75'
                    }`}
                  style={{
                    transitionDelay: `${index * 200 + 300}ms`
                  }}
                />
              </div>
              <div className="text-6xl font-bold text-teal-600 mb-4">
                {stat.number}
              </div>
              <div className="text-white text-2xl leading-relaxed max-w-60 mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}