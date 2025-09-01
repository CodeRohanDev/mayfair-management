import Link from 'next/link';
import Container from '@/components/ui/Container';
import { newsPosts } from '@/data/news';

export default function NewsSection() {
  // Get first 11 news posts (3x4 grid - 1 for "View More" card)
  const displayedNews = newsPosts.slice(0, 11);

  return (
    <section className="py-20 bg-white">
      <Container>
        <h2 className="text-3xl font-light text-center mb-16 tracking-wider">
          LATEST NEWS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {displayedNews.map((post, index) => {
            const isImageTop = index % 2 === 0; // Alternating design
            return (
              <Link key={post.id} href={`/news/${post.id}`}>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-[400px] flex flex-col relative group">
                  {/* Green hover overlay with button */}
                  <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-80 transition-all duration-300 z-10 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>

                  {isImageTop ? (
                    // Design 1: Image on top, title at bottom
                    <>
                      <div className="h-48 overflow-hidden">
                        <img
                          src={post.image || "/hero banner image.jpg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="text-xs font-medium mb-2 text-blue-600 uppercase tracking-wide">
                            {post.category}
                          </div>
                          <h3 className="text-sm font-semibold leading-tight text-gray-900 line-clamp-3">
                            {post.title}
                          </h3>
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                          {new Date(post.date).toLocaleDateString('en-GB', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                      </div>
                    </>
                  ) : (
                    // Design 2: Title on top, image at bottom
                    <>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="text-xs font-medium mb-2 text-blue-600 uppercase tracking-wide">
                            {post.category}
                          </div>
                          <h3 className="text-sm font-semibold leading-tight text-gray-900 line-clamp-4 mb-2">
                            {post.title}
                          </h3>
                          <p className="text-xs text-gray-600 line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                          {new Date(post.date).toLocaleDateString('en-GB', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                      </div>
                      <div className="h-32 overflow-hidden">
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
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 h-[400px] flex flex-col justify-center items-center hover:shadow-lg transition-all duration-300 cursor-pointer rounded-lg relative group overflow-hidden">
              {/* Green hover overlay for "View More" card */}
              <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-80 transition-all duration-300 z-10 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              <div className="text-center relative z-0">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  View More News
                </h3>
                <p className="text-sm text-blue-100 mb-4">
                  Discover all our latest updates and announcements
                </p>
                <div className="text-xs font-medium uppercase tracking-wide">
                  SEE ALL NEWS →
                </div>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}