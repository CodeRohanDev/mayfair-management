import Link from 'next/link';
import Container from '@/components/ui/Container';
import { newsPosts } from '@/data/news';

export default function NewsSection() {
  // Get first 11 news posts (3x4 grid - 1 for "View More" card)
  const displayedNews = newsPosts.slice(0, 11);

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className={`flex items-center justify-center mb-16 `}>
          <div className="flex-1 h-px bg-purple-900"></div>
          <h2 className="text-5xl font-light text-purple-900 text-center mx-8 tracking-wider">
            IN THE NEWS
          </h2>
          <div className="flex-1 h-px bg-purple-900"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {displayedNews.map((post, index) => {
            const isImageTop = index % 2 === 0; // Alternating design
            return (
              <Link key={post.id} href={`/news/${post.id}`}>
                <div className="border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-[556px] flex flex-col relative group" style={{ backgroundColor: '#f0f0f0' }}>
                  {/* Teal hover overlay with button */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-65 transition-all duration-300 z-10 flex items-center justify-center" style={{ backgroundColor: '#00a887' }}>
                    <div className="w-16 h-16 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <img src="/icon-arrows.svg" alt="Arrow" className="w-16 h-16" />
                    </div>
                  </div>

                  {isImageTop ? (
                    // Design 1: Image on top, title at bottom
                    <>
                      <div className="h-[278px] overflow-hidden">
                        <img
                          src={post.image || "/hero banner image.jpg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 h-[278px] flex flex-col justify-between" style={{ backgroundColor: '#f0f0f0' }}>
                        <div>
                          <div className="w-25 h-0.5 bg-teal-700 mb-2"></div>
                          <div className="text-xl font-medium text-purple-900 mb-2">
                            {new Date(post.date).toLocaleDateString('en-GB', {
                              year: 'numeric',
                              month: 'short'
                            })}
                          </div>
                          <h3 className="text-3xl font-light leading-tight text-gray-700 overflow-hidden mb-4" style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical'
                          }}>
                            {post.title}
                          </h3>
                          <div className="text-xl font-medium text-teal-700 hover:text-teal-800 transition-colors duration-200">
                            READ MORE &gt;&gt;
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    // Design 2: Title on top, image at bottom
                    <>
                      <div className="p-4 h-[278px] flex flex-col justify-between" style={{ backgroundColor: '#f0f0f0' }}>
                        <div>
                          <div className="w-25 h-0.5 bg-teal-700 mb-2"></div>
                          <div className="text-xl font-medium text-purple-900 mb-2">
                            {new Date(post.date).toLocaleDateString('en-GB', {
                              year: 'numeric',
                              month: 'short'
                            })}
                          </div>
                          <h3 className="text-3xl font-light leading-tight text-gray-700 overflow-hidden mb-4" style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical'
                          }}>
                            {post.title}
                          </h3>
                          <div className="text-xl font-medium text-teal-700 hover:text-teal-800 transition-colors duration-200">
                            READ MORE &gt;&gt;
                          </div>
                        </div>
                      </div>
                      <div className="h-[278px] overflow-hidden">
                        <img
                          src={post.image || "/hero banner image.jpg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </>
                  )}
                </div>
              </Link>
            );
          })}

          {/* View More News Card */}
          <Link href="/news">
            <div className="border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-[556px] flex flex-col justify-center items-center relative group" style={{ backgroundColor: '#f0f0f0' }}>
              {/* Teal hover overlay for "View More" card */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-65 transition-all duration-300 z-10" style={{ backgroundColor: '#00a887' }}>
              </div>

              <div className="text-center relative z-20">
                <h3 className="text-xl font-medium text-purple-900 group-hover:text-white transition-colors duration-300 mb-2">
                  VIEW ALL NEWS
                </h3>
                <div className="w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <svg viewBox="0 0 59.1 59.1" className="w-16 h-16">
                    <circle fill="none" stroke="#6B46C1" strokeMiterlimit="10" className="group-hover:stroke-white transition-colors duration-300" cx="29.5" cy="29.5" r="29" />
                    <g>
                      <path fill="#6B46C1" className="group-hover:fill-white transition-colors duration-300" d="M17.3,38.2l7.6-8.4l-7.6-8.4l1.9-4.1L30.4,27v5.8l-11.2,9.6L17.3,38.2z M30.5,38.2l7.6-8.4l-7.6-8.4l1.9-4.1
                        L43.5,27v5.8l-11.2,9.6L30.5,38.2z"/>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}