import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import AboutContentSection from '@/components/about/AboutContentSection';
import OurFundsSection from '@/components/about/OurFundsSection';
import ResponsibleInvestingSection from '@/components/about/ResponsibleInvestingSection';
import PortfolioShowcaseSection from '@/components/about/PortfolioShowcaseSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen font-light" style={{ fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" }}>
      <Header />
      <AboutHeroSection />
      <AboutContentSection />
      <OurFundsSection />
      <ResponsibleInvestingSection />
      <PortfolioShowcaseSection />
      <Footer />
    </div>
  );
}