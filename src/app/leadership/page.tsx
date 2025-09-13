import { Metadata } from 'next';
import { generateMetadata, generateStructuredData } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadershipHero from '@/components/leadership/LeadershipHero';
import LeadershipDescription from '@/components/leadership/LeadershipDescription';
import TeamSection from '@/components/leadership/TeamSection';
import { leadershipData } from '@/data/leadership';

export const metadata: Metadata = generateMetadata({
  title: 'Leadership Team - MayFair Management',
  description: 'Meet the experienced leadership team at MayFair Management. Our investment professionals and senior operating partners bring decades of expertise in private equity and middle market investing.',
  keywords: [
    'MayFair Management leadership',
    'private equity team',
    'investment professionals',
    'senior operating partners',
    'investment committee',
    'private equity executives',
    'management team',
    'investment experience',
    'private equity leadership',
    'MayFair team members'
  ],
  image: '/LEADERSHIP_background.jpg',
  url: '/leadership',
  type: 'website'
});

export default function LeadershipPage() {
  const structuredData = generateStructuredData({
    title: 'Leadership Team - MayFair Management',
    description: 'Meet the experienced leadership team at MayFair Management. Our investment professionals and senior operating partners bring decades of expertise in private equity and middle market investing.',
    url: '/leadership',
    type: 'WebPage',
    image: '/LEADERSHIP_background.jpg'
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen font-light" style={{ fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" }}>
        <Header />
        <LeadershipHero />
        <LeadershipDescription />

        <div className="bg-white">
          <TeamSection
            title={leadershipData.sections.investmentCommittee.title}
            members={leadershipData.sections.investmentCommittee.members}
            columns={5}
          />
        </div>

        <div className="bg-gray-50">
          <TeamSection
            title={leadershipData.sections.investmentProfessionals.title}
            members={leadershipData.sections.investmentProfessionals.members}
            columns={5}
          />
        </div>

        <div className="bg-white">
          <TeamSection
            title={leadershipData.sections.seniorOperatingPartners.title}
            members={leadershipData.sections.seniorOperatingPartners.members}
            columns={5}
          />
        </div>

        <Footer />
      </div>
    </>
  );
}