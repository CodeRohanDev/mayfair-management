'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { companyData } from '@/data/company';
import { navigationData } from '@/data/navigation';
import Container from '@/components/ui/Container';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Handle scroll behavior for navbar hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Don't hide header if mobile menu is open
      if (isMobileMenuOpen) return;

      // Show header when at top of page
      if (currentScrollY < 10) {
        setIsHeaderVisible(true);
      }
      // Hide header when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isMobileMenuOpen]);

  // Function to check if a navigation item is active
  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      {/* Custom CSS for 1004px breakpoint */}
      <style jsx global>{`
        .desktop-nav-1004 {
          display: none;
        }
        .mobile-menu-1004 {
          display: flex;
        }
        .mobile-overlay-1004 {
          display: block;
        }
        .mobile-nav-1004 {
          display: block;
        }
        
        @media (min-width: 1004px) {
          .desktop-nav-1004 {
            display: flex !important;
          }
          .mobile-menu-1004 {
            display: none !important;
          }
          .mobile-overlay-1004 {
            display: none !important;
          }
          .mobile-nav-1004 {
            display: none !important;
          }
        }
      `}</style>

      {/* Extra space above navbar - Fixed positioning with same behavior */}
      <div className={`h-4 sm:h-4 md:h-4 lg:h-4 xl:h-4 fixed top-0 left-0 right-0 z-30 transition-transform duration-300 ease-in-out ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`} style={{ backgroundColor: '#0a1b2f' }}></div>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-[calc(theme(spacing.0)+theme(spacing.0))] sm:h-[calc(theme(spacing.0)+theme(spacing.0))] md:h-[calc(theme(spacing.0)+theme(spacing.0))] lg:h-[calc(theme(spacing.0)+theme(spacing.0))] xl:h-[calc(theme(spacing.0)+theme(spacing.0))]"></div>

      <header className={`bg-white border-b border-gray-100 fixed left-0 right-0 z-40 shadow-sm transition-transform duration-300 ease-in-out ${isHeaderVisible
        ? 'translate-y-[12px]'
        : '-translate-y-full'
        }`}>
        <Container>
          <div className="flex justify-between items-center py-3 sm:py-4 lg:py-2 xl:py-2">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">x
              <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
                <img
                  src="/logo.jpg"
                  alt={companyData.name}
                  className="h-16 w-auto sm:h-20 md:h-24 lg:h-16 xl:h-26 max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[160px] xl:max-w-[160px] object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Hidden below 1004px */}
            <nav className="desktop-nav-1004 items-center space-x-6 xl:space-x-8 2xl:space-x-10">
              {navigationData.main.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative text-base xl:text-lg transition-all duration-200 tracking-wide font-normal group whitespace-nowrap ${active ? 'hover:opacity-80' : 'hover:opacity-60'
                      }`}
                    style={{ color: '#0a1b2f' }}
                  >
                    {/* Active indicator bar */}
                    <span className={`absolute -top-2 left-0 h-0.5 transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} style={{ backgroundColor: '#0a1b2f' }}></span>
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Hamburger Button - Shown below 1004px */}
            <button
              className="mobile-menu-1004 relative flex-col justify-center items-center w-10 h-10 group focus:outline-none focus:ring-2 focus:ring-opacity-50 rounded"
              style={{ '--tw-ring-color': '#0a1b2f' } as React.CSSProperties}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                <span className={`absolute w-6 h-0.5 transition-all duration-300 ease-in-out transform ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`} style={{ backgroundColor: '#0a1b2f' }}></span>
                <span className={`absolute w-6 h-0.5 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`} style={{ backgroundColor: '#0a1b2f' }}></span>
                <span className={`absolute w-6 h-0.5 transition-all duration-300 ease-in-out transform ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                  }`} style={{ backgroundColor: '#0a1b2f' }}></span>
              </div>
            </button>
          </div>
        </Container>

        {/* Mobile Navigation Menu Overlay - Shown below 1004px */}
        {isMobileMenuOpen && (
          <div
            className="mobile-overlay-1004 fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Navigation Menu - Shown below 1004px */}
        <div className={`mobile-nav-1004 fixed inset-0 z-50 flex flex-col h-screen transition-all duration-300 ease-in-out transform ${isMobileMenuOpen
          ? 'opacity-100 translate-y-0 visible'
          : 'opacity-0 -translate-y-full invisible'
          }`}>

          {/* Mobile Header - White Background */}
          <div className="bg-white flex justify-between items-center px-6 py-4 flex-shrink-0">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src="/logo.jpg"
                alt={companyData.name}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <button
              className="relative w-8 h-8 group focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              {/* X Close Icon */}
              <div className="relative w-full h-full flex items-center justify-center">
                <span className="absolute w-6 h-0.5 bg-gray-600 transform rotate-45"></span>
                <span className="absolute w-6 h-0.5 bg-gray-600 transform -rotate-45"></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation Links - Dark Blue Background */}
          <div className="flex-1 h-full" style={{ backgroundColor: '#0a1b2f' }}>

            <nav className="px-6 py-8">
              {navigationData.main.map((item, index) => {
                const active = isActive(item.href);
                return (

                  <div
                    key={item.name}
                    className={`transition-all duration-700 ease-out transform ${isMobileMenuOpen
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-full'
                      }`}
                    style={{
                      transitionDelay: isMobileMenuOpen ? `${(index + 1) * 150}ms` : '0ms'
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`block text-white text-xl py-6 font-light transition-all duration-200 ${active ? 'text-white' : 'text-white hover:text-gray-300'
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {index < navigationData.main.length - 1 && (
                      <div className={`border-b-1 border-white transition-all duration-700 ease-out transform ${isMobileMenuOpen
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-full'
                        }`}
                        style={{
                          transitionDelay: isMobileMenuOpen ? `${(index + 1) * 150 + 100}ms` : '0ms'
                        }}></div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}