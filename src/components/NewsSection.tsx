'use client';

import Link from 'next/link';
import Container from '@/components/ui/Container';
import { newsPosts } from '@/data/news';
import { useEffect, useRef, useState } from 'react';

export default function NewsSection() {
  // Get first 5 news posts for 3x2 grid layout
  const displayedNews = newsPosts.slice(0, 5);
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-white">
      <Container>
        <div className={`flex items-center justify-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex-1 h-px" style={{ backgroundColor: '#0a1b2f' }}></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-center mx-4 sm:mx-6 md:mx-8 tracking-wider" style={{ color: '#0a1b2f' }}>
            IN THE NEWS
          </h2>
          <div className="flex-1 h-px" style={{ backgroundColor: '#0a1b2f' }}></div>
        </div>
        {/* Responsive grid: 1 col on small, 2 cols on small+, 3 cols on medium+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {displayedNews.map((post, index) => {
            const isImageTop = index % 2 === 0; // Alternating design
            return (
              <div
                key={post.id}
                className={`transition-all duration-1000 ${isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <Link href={`/news/${post.id}`}>
                  <div className="border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-[400px] sm:h-[450px] md:h-[556px] flex flex-col relative group" style={{ backgroundColor: '#f0f0f0' }}>
                  {/* Teal hover overlay with button */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-65 transition-all duration-300 z-10 flex items-center justify-center" style={{ backgroundColor: '#4080bf' }}>
                    <div className="w-16 h-16 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <img src="/icon-arrows.svg" alt="Arrow" className="w-16 h-16" />
                    </div>
                  </div>

                  {isImageTop ? (
                    // Design 1: Image on top, title at bottom
                    <>
                      <div className="h-[200px] sm:h-[225px] md:h-[278px] overflow-hidden">
                        <img
                          src={post.image || "/hero banner image.jpg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3 sm:p-4 h-[200px] sm:h-[225px] md:h-[278px] flex flex-col justify-between" style={{ backgroundColor: '#f0f0f0' }}>
                        <div>
                          <div className="w-25 h-0.5 mb-2" style={{ backgroundColor: '#4080bf' }}></div>
                          <div className="text-lg sm:text-xl font-medium mb-2" style={{ color: '#0a1b2f' }}>
                            {new Date(post.date).toLocaleDateString('en-GB', {
                              year: 'numeric',
                              month: 'short'
                            })}
                          </div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-light leading-tight text-gray-700 overflow-hidden mb-3 sm:mb-4" style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical'
                          }}>
                            {post.title}
                          </h3>
                          <div className="text-lg sm:text-xl font-medium transition-colors duration-200 hover:opacity-80" style={{ color: '#4080bf' }}>
                            READ MORE &gt;&gt;
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    // Design 2: Title on top, image at bottom
                    <>
                      <div className="p-3 sm:p-4 h-[200px] sm:h-[225px] md:h-[278px] flex flex-col justify-between" style={{ backgroundColor: '#f0f0f0' }}>
                        <div>
                          <div className="w-25 h-0.5 mb-2" style={{ backgroundColor: '#4080bf' }}></div>
                          <div className="text-lg sm:text-xl font-medium mb-2" style={{ color: '#0a1b2f' }}>
                            {new Date(post.date).toLocaleDateString('en-GB', {
                              year: 'numeric',
                              month: 'short'
                            })}
                          </div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-light leading-tight text-gray-700 overflow-hidden mb-3 sm:mb-4" style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical'
                          }}>
                            {post.title}
                          </h3>
                          <div className="text-lg sm:text-xl font-medium transition-colors duration-200 hover:opacity-80" style={{ color: '#4080bf' }}>
                            READ MORE &gt;&gt;
                          </div>
                        </div>
                      </div>
                      <div className="h-[200px] sm:h-[225px] md:h-[278px] overflow-hidden">
                        <img
                          src={post.image || "/hero banner image.jpg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </>
                  )}
                </div>
                </Link>
              </div>
            );
          })}

          {/* View More News Card */}
          <div
            className={`transition-all duration-1000 ${isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
            }`}
            style={{
              transitionDelay: `${5 * 150}ms`
            }}
          >
            <Link href="/news">
              <div className="border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-[400px] sm:h-[450px] md:h-[556px] flex flex-col justify-center items-center relative group" style={{ backgroundColor: '#f0f0f0' }}>
              {/* Teal hover overlay for "View More" card */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-65 transition-all duration-300 z-10" style={{ backgroundColor: '#4080bf' }}>
              </div>

              <div className="text-center relative z-20">
                <h3 className="text-lg sm:text-xl font-medium group-hover:text-white transition-colors duration-300 mb-2 sm:mb-3 md:mb-2" style={{ color: '#0a1b2f' }}>
                  VIEW ALL NEWS
                </h3>
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <svg viewBox="0 0 59.1 59.1" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                    <circle fill="none" stroke="#0a1b2f" strokeMiterlimit="10" className="group-hover:stroke-white transition-colors duration-300" cx="29.5" cy="29.5" r="29" />
                    <g>
                      <path fill="#0a1b2f" className="group-hover:fill-white transition-colors duration-300" d="M17.3,38.2l7.6-8.4l-7.6-8.4l1.9-4.1L30.4,27v5.8l-11.2,9.6L17.3,38.2z M30.5,38.2l7.6-8.4l-7.6-8.4l1.9-4.1
                        L43.5,27v5.8l-11.2,9.6L30.5,38.2z"/>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}