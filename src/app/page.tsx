import { Metadata } from 'next';
import { generateMetadata, generateStructuredData, generateInvestmentServiceSchema } from '@/lib/seo';
import { generateLocalBusinessSchema } from '@/lib/seo-enhancements';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';

export const metadata: Metadata = generateMetadata({
  title: 'MayFair Management - Private Equity Excellence',
  description: 'MayFair Management is a leading private equity firm focused on middle market investments. We partner with management teams to build exceptional companies and create lasting value.',
  keywords: [
    'private equity',
    'middle market investments',
    'investment management',
    'portfolio companies',
    'growth capital',
    'financial services',
    'venture capital',
    'MayFair Management',
    'Miami Beach',
    'investment opportunities'
  ],
  image: '/hero banner image.jpg',
  url: '/',
  type: 'website'
});

export default function Home() {
  const structuredData = generateStructuredData({
    title: 'MayFair Management - Private Equity Excellence',
    description: 'MayFair Management is a leading private equity firm focused on middle market investments. We partner with management teams to build exceptional companies and create lasting value.',
    url: '/',
    type: 'WebPage',
    image: '/hero banner image.jpg'
  });

  const localBusinessSchema = generateLocalBusinessSchema();
  const investmentServiceSchema = generateInvestmentServiceSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(investmentServiceSchema) }}
      />
      <div className="min-h-screen font-light" style={{ fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" }}>
        <Header />
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <NewsSection />
        <Footer />
      </div>
    </>
  );
}