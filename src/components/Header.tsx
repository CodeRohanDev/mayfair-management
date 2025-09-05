'use client';

import Link from 'next/link';
import { useState } from 'react';
import { companyData } from '@/data/company';
import { navigationData } from '@/data/navigation';
import Container from '@/components/ui/Container';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Extra space above navbar */}
      <div className="bg-purple-950 h-5"></div>
      <header className="bg-white border-b border-gray-100">
        <Container>
          <div className="flex justify-between items-end pt-0 py-5">
            <div className="flex items-center">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <img src="/logo.jpg" alt={companyData.name} className="h-[100px] w-[220px]" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10 items-end py-2">
              {navigationData.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-lg text-purple-900 hover:text-purple-900 transition-colors tracking-wide font-normal group"
                >
                  <span className="absolute -top-2 left-0 w-0 h-0.5 bg-purple-900 transition-all duration-300 group-hover:w-full"></span>
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden relative flex flex-col justify-center items-center w-10 h-10 group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                <span className={`absolute w-6 h-0.5 bg-purple-900 transition-all duration-300 ease-in-out transform ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`}></span>
                <span className={`absolute w-6 h-0.5 bg-purple-900 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}></span>
                <span className={`absolute w-6 h-0.5 bg-purple-900 transition-all duration-300 ease-in-out transform ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                  }`}></span>
              </div>
            </button>
          </div>

        </Container>

        {/* Mobile Navigation Menu - Full Width Overlay */}
        <div className={`md:hidden fixed inset-x-0 top-[125px] bg-slate-800 z-50 shadow-lg transition-all duration-300 ease-in-out transform ${isMobileMenuOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-4 invisible'
          }`}>
          <nav className="px-6 py-8">
            {navigationData.main.map((item, index) => (
              <div
                key={item.name}
                className={`transition-all duration-300 ease-in-out transform ${isMobileMenuOpen
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-4'
                  }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms'
                }}
              >
                <Link
                  href={item.href}
                  className="block text-white text-xl py-4 hover:text-gray-300 transition-colors font-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {index < navigationData.main.length - 1 && (
                  <div className="border-b border-gray-600"></div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}