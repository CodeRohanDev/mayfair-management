import { Metadata } from 'next';
import { generateMetadata, generateStructuredData, generateBreadcrumbSchema } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import AboutContentSection from '@/components/about/AboutContentSection';
import OurFundsSection from '@/components/about/OurFundsSection';
import ResponsibleInvestingSection from '@/components/about/ResponsibleInvestingSection';
import PortfolioShowcaseSection from '@/components/about/PortfolioShowcaseSection';

export const metadata: Metadata = generateMetadata({
  title: 'About MayFair Management - Our Mission & Values',
  description: 'Learn about MayFair Management\'s mission, values, and approach to private equity investing. Discover our commitment to building exceptional companies and creating lasting value.',
  keywords: [
    'about MayFair Management',
    'private equity mission',
    'investment philosophy',
    'company values',
    'responsible investing',
    'fund management',
    'investment approach',
    'MayFair team',
    'private equity firm history',
    'investment strategy'
  ],
  image: '/ABOUT-HERO.jpg',
  url: '/about',
  type: 'website'
});

export default function AboutPage() {
  const structuredData = generateStructuredData({
    title: 'About MayFair Management - Our Mission & Values',
    description: 'Learn about MayFair Management\'s mission, values, and approach to private equity investing. Discover our commitment to building exceptional companies and creating lasting value.',
    url: '/about',
    type: 'AboutPage',
    image: '/ABOUT-HERO.jpg'
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen font-light" style={{ fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" }}>
        <Header />
        <AboutHeroSection />
        <AboutContentSection />
        <OurFundsSection />
        <ResponsibleInvestingSection />
        <PortfolioShowcaseSection />
        <Footer />
      </div>
    </>
  );
}