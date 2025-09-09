import Container from '@/components/ui/Container';
import { portfolioData } from '@/data/portfolio';

export default function PortfolioHeroSection() {
    return (
        <section
            className="relative min-h-[600px] sm:min-h-[600px] md:min-h-[600px] lg:min-h-[600px] xl:min-h-[700px] flex items-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(90deg, rgba(10, 27, 47, 0.95) 0%, rgba(10, 27, 47, 0.85) 20%, rgba(64, 128, 191, 0.3) 100%), url('/hero banner image.jpg')`
            }}
        >
            <Container className="relative py-51">
                <div className="max-w-4xl text-left">
                    <div className="max-w-3xl">
                        <div className="w-35 h-0.5 mb-6" style={{ backgroundColor: '#4080bf' }}></div>
                        <h1 className="text-xl md:text-3xl lg:text-3xl font-light text-white leading-relaxed">
                            <span className="font-bold">MayFair Management</span> {portfolioData.hero.description}
                        </h1>
                    </div>
                </div>
            </Container>
        </section>
    );
}