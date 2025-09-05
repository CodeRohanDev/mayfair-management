import { notFound } from 'next/navigation';
import { leadershipData, TeamMember } from '@/data/leadership';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/ui/Container';
import OtherBiosDropdown from '@/components/leadership/OtherBiosDropdown';

interface LeadershipProfilePageProps {
    params: Promise<{ slug: string }>;
}

// Get all team members from all sections
const getAllTeamMembers = (): TeamMember[] => {
    const allMembers: TeamMember[] = [];
    Object.values(leadershipData.sections).forEach(section => {
        allMembers.push(...section.members);
    });
    return allMembers;
};

export async function generateStaticParams() {
    const allMembers = getAllTeamMembers();
    return allMembers.map((member) => ({
        slug: member.id,
    }));
}

export default async function LeadershipProfilePage({ params }: LeadershipProfilePageProps) {
    const { slug } = await params;
    const allMembers = getAllTeamMembers();
    const member = allMembers.find((m) => m.id === slug);

    if (!member) {
        notFound();
    }



    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="bg-white">
                <section
                    className="relative min-h-[400px] flex items-center bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(30, 41, 59, 0.85) 50%, rgba(20, 184, 166, 0.3) 100%), url('/LEADERSHIP_background.jpg')`
                    }}
                >
                    <Container className="relative py-51">
                        <div className="max-w-4xl text-left">

                        </div>
                    </Container>
                </section>
                <Container className="py-16">
                    <div className="max-w-6xl mx-auto">
                        {/* Header Section with Name and Title */}
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-normal text-purple-900 tracking-wide">
                                {member.name.toUpperCase()}
                            </h2>
                            <div className="flex items-center justify-center mb-6">
                                <div className="flex-1 h-0.5 bg-purple-900 max-w-xs"></div>
                                <h1 className="mx-8 text-4xl font-light text-purple-900 tracking-wider">
                                    {member.title.toUpperCase()}
                                </h1>
                                <div className="flex-1 h-0.5 bg-purple-900 max-w-xs"></div>
                            </div>
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                            {/* Left Column - Photo and Other Bios */}
                            <div className="lg:col-span-1">
                                {/* Profile Image */}
                                <div className="mb-8">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full aspect-[3/4] object-cover"
                                    />
                                    <div className="mt-4">
                                        <h3 className="font-normal text-gray-800 text-xl">{member.name}</h3>
                                        <p className="text-lg text-purple-900 uppercase tracking-wide font-semibold">
                                            {member.title}
                                        </p>
                                    </div>
                                </div>

                                {/* Other Bios Dropdown */}
                                <OtherBiosDropdown
                                    allMembers={allMembers}
                                    currentMemberId={member.id}
                                />
                            </div>

                            {/* Right Column - Content */}
                            <div className="lg:col-span-3">
                                {/* Main Bio Content */}
                                <div className="mb-12">
                                    {member.description && (
                                        <p className="text-gray-700 text-xl leading-relaxed text-base mb-6">
                                            {member.description}
                                        </p>
                                    )}
                                    {member.bio && (
                                        <p className="text-gray-700 text-xl leading-relaxed text-base">
                                            {member.bio}
                                        </p>
                                    )}
                                </div>

                                {/* Two Column Section for Board Positions and Deal Work */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    {/* Board Positions */}
                                    <div>
                                        <div className="mb-4">
                                            <div className="w-16 h-0.5 bg-teal-500 mb-2"></div>
                                            <h3 className="text-xl font-semibold text-gray-800 uppercase tracking-wide">
                                                BOARD POSITIONS
                                            </h3>
                                        </div>
                                        {member.boardPositions && member.boardPositions.length > 0 ? (
                                            <p className="text-gray-700 text-xl leading-relaxed text-sm">
                                                He has served on the board of twelve companies including {member.boardPositions.join(', ')}.
                                            </p>
                                        ) : (
                                            <p className="text-gray-700 text-xl leading-relaxed text-sm">
                                                Board position information not available.
                                            </p>
                                        )}
                                    </div>
                                    {/* Deal Work */}
                                    <div>
                                        <div className="mb-4">
                                            <div className="w-16 h-0.5 bg-teal-500 mb-2"></div>
                                            <h3 className="text-xl font-semibold text-gray-800 uppercase tracking-wide">
                                                DEAL WORK
                                            </h3>
                                        </div>
                                        <p className="text-gray-700 text-xl leading-relaxed text-sm">
                                            {member.dealWork || `${member.name.split(' ')[0]}'s deal experience includes various portfolio companies and strategic investments across multiple sectors.`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </main>

            <Footer />
        </div>
    );
}