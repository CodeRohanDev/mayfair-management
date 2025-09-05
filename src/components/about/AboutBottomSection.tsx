'use client';

import Container from '@/components/ui/Container';

export default function AboutBottomSection() {
  const images = [
    { src: '/hero banner image.jpg', alt: 'Investment 1' },
    { src: '/LEADERSHIP_background.jpg', alt: 'Investment 2' },
    { src: '/hero banner image.jpg', alt: 'Investment 3' },
    { src: '/LEADERSHIP_background.jpg', alt: 'Investment 4' }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-8 tracking-wider">
              MayFair Management
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-white text-lg leading-relaxed">
                Since 1986, we have been committed to building lasting partnerships with management teams and creating value through operational excellence and strategic growth initiatives.
              </p>
              <p className="text-white text-lg leading-relaxed">
                Our experienced team brings deep industry knowledge and a proven track record of success in the lower middle market. We focus on companies with strong fundamentals and work collaboratively with management to achieve sustainable growth.
              </p>
              <p className="text-white text-lg leading-relaxed">
                Through our disciplined investment approach and commitment to responsible investing, we strive to generate superior returns while creating positive impact for all stakeholders.
              </p>
            </div>
            
            <div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {images.map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='14' fill='%23d1d5db'%3E${image.alt}%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                  </div>
                ))}
              </div>
              
              <div className="bg-teal-600 p-6 rounded-lg flex items-center space-x-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.77L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-semibold text-lg">Excellence in Investing</div>
                  <div className="text-sm opacity-90">Committed to creating lasting value</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}