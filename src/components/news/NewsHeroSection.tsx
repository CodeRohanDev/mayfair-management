import Container from '@/components/ui/Container';

export default function NewsHeroSection() {
    return (
        <section
            className="relative min-h-[300px] flex items-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(30, 41, 59, 0.85) 50%, rgba(20, 184, 166, 0.3) 100%), url('/news.jpg')`
            }}
        >
            <Container className="relative py-31">
                <div className="max-w-4xl text-left">
                    <div className="max-w-3xl">
                    </div>
                </div>
            </Container>
        </section>
    );
}