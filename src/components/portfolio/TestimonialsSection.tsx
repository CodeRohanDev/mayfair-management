'use client';

import { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';
import { portfolioData } from '@/data/portfolio';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = portfolioData.testimonials.quotes;

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-12 md:py-20 bg-gray-100">
      <Container>
        <div className={`flex items-center justify-center mb-8 md:mb-16`}>
           <div className="flex-1 h-0.5 bg-purple-900 animate-[slideInLeft_1s_ease-in-out]"></div>
          <h2 className="text-3xl md:text-5xl font-light text-purple-900 text-center mx-4 md:mx-8 tracking-wider">
            TESTIMONIALS
          </h2>
          <div className="flex-1 h-0.5 bg-purple-900 animate-[slideInRight_1s_ease-in-out]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative px-4 md:px-16">
          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-1 md:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-teal-600 hover:text-teal-700 transition-colors duration-200 z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-1 md:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-teal-600 hover:text-teal-700 transition-colors duration-200 z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial content */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((quote) => (
                <div
                  key={quote.id}
                  className="w-full flex-shrink-0 p-4 md:p-12 text-left"
                >
                  <blockquote className="text-lg md:text-2xl text-gray-700 font-normal leading-relaxed mb-6 md:mb-8">
                    &ldquo;{quote.text}&rdquo;
                  </blockquote>

                  <div className="text-gray-600">
                    <p className="text-base md:text-xl font-normal mb-1">{quote.author}</p>
                    <p className="text-base md:text-xl text-teal-800 font-medium">{quote.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${index === currentIndex
                    ? 'bg-purple-900'
                    : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}