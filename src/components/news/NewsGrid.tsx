import Link from 'next/link';
import Container from '@/components/ui/Container';
import { NewsPost } from '@/data/news';

interface NewsGridProps {
    posts: NewsPost[];
}

export default function NewsGrid({ posts }: NewsGridProps) {
    const featuredPost = posts[0];
    const otherPosts = posts.slice(1);

    return (
        <section className="py-16 bg-white">
            <Container>
                

                {/* Other News Articles */}
                {otherPosts.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherPosts.map((post, index) => {
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
                    </div>
                )}
            </Container>
        </section>
    );
}