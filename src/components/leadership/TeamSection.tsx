import Container from '@/components/ui/Container';
import TeamMemberCard from './TeamMemberCard';
import { TeamMember } from '@/data/leadership';

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
  columns: number;
}

export default function TeamSection({ title, members, columns }: TeamSectionProps) {
  const getGridCols = (cols: number) => {
    switch (cols) {
      case 2: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2';
      case 4: return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
      case 5: return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5';
      default: return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
    }
  };

  return (
    <section className="py-12">
      <Container>
        <div className="mb-8">
          <h2 className="text-5xl font-normal text-gray-800 tracking-wide uppercase">
            {title}
          </h2>
        </div>

        <div className={`grid ${getGridCols(columns)} gap-6`}>
          {members.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
}