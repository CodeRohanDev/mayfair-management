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
    <section ref={sectionRef} className="py-16 md:py-24" style={{ backgroundColor: '#0a1b2f' }}>
      <Container>
        <div className={`flex items-center justify-center mb-1 md:mb-1 px-2 md:px-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <div className="flex-1 h-px bg-white"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white text-center mx-2 md:mx-8 tracking-wider">
            AT A GLANCE
          </h2>
          <div className="flex-1 h-px bg-white"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 md:gap-14 lg:gap-12 xl:gap-14 mb-0 min-h-80 md:min-h-96 lg:min-h-[24rem] xl:min-h-[26rem] px-2 md:px-0">
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
              <div className="flex justify-center mb-0 sm:mb-2 md:mb-2 lg:mb-0 xl:mb-7">
                <div
                  className={`
                    w-36 h-36
                    sm:w-40 sm:h-40
                    md:w-36 md:h-36 
                    lg:w-36 lg:h-36
                    xl:w-36 xl:h-36
                    2xl:w-40 2xl:h-40
                    flex items-center justify-center
                    transition-transform duration-700
                    ${isVisible ? 'scale-100' : 'scale-75'}
                  `}
                  style={{
                    transitionDelay: `${index * 200 + 300}ms`
                  }}
                >
                  <Image
                    src={stat.icon}
                    alt={`${stat.label} icon`}
                    width={160}
                    height={160}
                    sizes="(max-width: 640px) 144px, (max-width: 720px) 160px, (max-width: 768px) 128px, (max-width: 1024px) 144px, (max-width: 1280px) 152px, (max-width: 1536px) 160px, 160px"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="text-6xl sm:text-7xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-5 xl:mb-5" style={{ color: '#4080bf' }}>
                {stat.number}
              </div>
              <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl leading-relaxed max-w-56 sm:max-w-64 md:max-w-72 lg:max-w-72 xl:max-w-80 mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}