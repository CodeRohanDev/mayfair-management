import Container from '@/components/ui/Container';

export default function AboutContentSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className={`flex items-center justify-center mb-16 `}>
            <div className="flex-1 h-0.5 bg-purple-900"></div>
            <h2 className="text-5xl font-light text-purple-900 text-center mx-8 tracking-wider">
              ABOUT
            </h2>
            <div className="flex-1 h-0.5 bg-purple-900"></div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-700 text-2xl leading-relaxed text-justify">
              The firm has established a strong reputation as an investor who can identify and capitalize on unique opportunities, and whose team brings deep sector, market and operational knowledge to each investment.
            </p>
            <p className="text-gray-700 text-2xl leading-relaxed text-justify">
              Key to the firm’s success is the belief that value is created at the intersection of identifying undervalued opportunities, strong business fundamentals, and tailored execution. The firm operates with a creative and flexible mindset to drive tangible changes across the operational, financial, and ESG functions of each of its portfolio companies.
            </p>
            <p className="text-gray-700 text-2xl font-bold leading-relaxed text-justify">
              MayFair Management&apos;s distinctive approach is focused on:
            </p>
          </div>

          {/* Three pillars section */}
          <div className="mt-16 mb-12">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-600">Identify</h3>
                <h4 className="text-lg font-medium text-gray-600">Underlying Value</h4>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-600">Business</h3>
                <h4 className="text-lg font-medium text-gray-600">Fundamentals</h4>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-600">Tailored</h3>
                <h4 className="text-lg font-medium text-gray-600">Execution</h4>
              </div>
            </div>
            <div className="w-full h-0.5 bg-gray-500 mt-8"></div>
          </div>

          {/* Identify Underlying Value section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-medium text-teal-600 leading-tight">
                Identify<br />
                Underlying Value
              </h2>
              <p className="text-gray-600 text-2xl font-normal leading-relaxed">
                With a dedicated originations team, MayFair Management uses a strategic approach to
                recognize a company&apos;s underlying value, while the team&apos;s operational focus and expertise
                realizes it.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/about identity underlying value.png"
                  alt="Identify Underlying Value"
                  className="w-95 lg:w-200 max-w-lg h-auto lg:h-66"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section >
  );
}