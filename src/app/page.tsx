import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';

export default function Home() {
  return (
    <div className="min-h-screen font-light" style={{ fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" }}>
      <Header />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <NewsSection />
      <Footer />
    </div>
  );
}