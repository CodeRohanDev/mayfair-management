import { Metadata } from 'next';
import { generateMetadata, generateStructuredData } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioHeroSection from '@/components/portfolio/PortfolioHeroSection';
import PortfolioSection from '@/components/portfolio/PortfolioSection';
import RepresentativeInvestmentsSection from '@/components/portfolio/RepresentativeInvestmentsSection';
import TestimonialsSection from '@/components/portfolio/TestimonialsSection';
import AllInvestmentsSection from '@/components/portfolio/AllInvestmentsSection';

export const metadata: Metadata = generateMetadata({
  title: 'Portfolio Companies - MayFair Management',
  description: 'Explore MayFair Management\'s portfolio of successful investments. Discover our representative investments, portfolio companies, and the value we create through strategic partnerships.',
  keywords: [
    'MayFair Management portfolio',
    'portfolio companies',
    'private equity investments',
    'representative investments',
    'investment portfolio',
    'portfolio performance',
    'private equity deals',
    'investment success stories',
    'portfolio management',
    'MayFair investments'
  ],
  image: '/PORTFOLIO hero.jpg',
  url: '/portfolio',
  type: 'website'
});

export default function PortfolioPage() {
  const structuredData = generateStructuredData({
    title: 'Portfolio Companies - MayFair Management',
    description: 'Explore MayFair Management\'s portfolio of successful investments. Discover our representative investments, portfolio companies, and the value we create through strategic partnerships.',
    url: '/portfolio',
    type: 'WebPage',
    image: '/PORTFOLIO hero.jpg'
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen font-light" style={{ fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" }}>
        <Header />
        <PortfolioHeroSection />
        <PortfolioSection />
        <RepresentativeInvestmentsSection />
        <TestimonialsSection />
        <AllInvestmentsSection />
        <Footer />
      </div>
    </>
  );
}