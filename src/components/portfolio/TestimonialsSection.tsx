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
    <section className="py-20 bg-gray-100">
      <Container>
        <div className={`flex items-center justify-center mb-16 `}>
          <div className="flex-1 h-0.5 bg-purple-900"></div>
          <h2 className="text-5xl font-light text-purple-900 text-left mx-8 tracking-wider">
            TESTIMONIALS
          </h2>
          <div className="flex-1 h-0.5 bg-purple-900"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 w-12 h-12 flex items-center justify-center text-teal-600 hover:text-teal-700 transition-colors duration-200 z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 w-12 h-12 flex items-center justify-center text-teal-600 hover:text-teal-700 transition-colors duration-200 z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className="w-full flex-shrink-0 p-12 text-left"
                >
                  <blockquote className="text-2xl text-gray-700 font-normal leading-relaxed mb-8">
                    &ldquo;{quote.text}&rdquo;
                  </blockquote>

                  <div className="text-gray-600">
                    <p className="text-xl font-normal text-lg mb-1">{quote.author}</p>
                    <p className="text-xl text-teal-800 font-medium">{quote.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentIndex
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