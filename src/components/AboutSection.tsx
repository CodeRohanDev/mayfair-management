import Container from '@/components/ui/Container';

export default function AboutSection() {
  return (
    <section className="py-18 bg-white">
      <Container>
        <div className="max-w-6xl mx-auto text-left">
          <p className="text-gray-700 text-2xl leading-relaxed mb-6 text-justify">
            The firm draws on its strong private equity and investment experience to build companies in partnership with management teams and entrepreneurs across the lower middle market.
          </p>
          <p className="text-gray-700 text-2xl leading-relaxed text-justify">
            Lincolnshire Management is a partnership that brings together experienced private equity professionals, successful entrepreneurs, and industry experts to create value in middle market companies. The firm has a proven track record of creating value through operational improvements and strategic initiatives that accelerate growth and enhance performance in the companies in which it invests.
          </p>
        </div>
      </Container>
    </section>
  );
}