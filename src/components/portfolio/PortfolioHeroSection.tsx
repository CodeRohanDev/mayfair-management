import Container from '@/components/ui/Container';
import { portfolioData } from '@/data/portfolio';

export default function PortfolioHeroSection() {
    return (
        <section
            className="relative min-h-[400px] flex items-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(30, 41, 59, 0.85) 50%, rgba(20, 184, 166, 0.3) 100%), url('/PORTFOLIO hero.jpg')`
            }}
        >
            <Container className="relative py-51">
                <div className="max-w-4xl text-left">
                    <div className="max-w-3xl">
                        <div className="w-35 h-0.5 bg-green-700 mb-6"></div>
                        <h1 className="text-xl md:text-3xl lg:text-3xl font-light text-white leading-relaxed">
                            <span className="font-bold">MayFair Management</span> {portfolioData.hero.description}
                        </h1>

                    </div>
                </div>
            </Container>
        </section>
    );
}