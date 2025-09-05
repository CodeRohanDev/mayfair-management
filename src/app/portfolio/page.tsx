import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioHeroSection from '@/components/portfolio/PortfolioHeroSection';
import PortfolioSection from '@/components/portfolio/PortfolioSection';
import RepresentativeInvestmentsSection from '@/components/portfolio/RepresentativeInvestmentsSection';
import TestimonialsSection from '@/components/portfolio/TestimonialsSection';
import AllInvestmentsSection from '@/components/portfolio/AllInvestmentsSection';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen font-light" style={{ fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" }}>
      <Header />
      <PortfolioHeroSection />
      <PortfolioSection />
      <RepresentativeInvestmentsSection />
      <TestimonialsSection />
      <AllInvestmentsSection />
      <Footer />
    </div>
  );
}