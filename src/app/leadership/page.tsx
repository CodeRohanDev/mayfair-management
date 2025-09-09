import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadershipHero from '@/components/leadership/LeadershipHero';
import LeadershipDescription from '@/components/leadership/LeadershipDescription';
import TeamSection from '@/components/leadership/TeamSection';
import { leadershipData } from '@/data/leadership';

export default function LeadershipPage() {
  return (
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
  );
}