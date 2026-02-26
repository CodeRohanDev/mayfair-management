import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { newsPosts } from '@/data/news';
import { generateMetadata as createMetadata, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/ui/Container';

interface NewsPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsPosts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }: NewsPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.id === slug);

  if (!post) {
    return {
      title: 'News Not Found',
    };
  }

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, 'MayFair Management news', 'private equity news'],
    image: post.image,
    url: `/news/${slug}`,
    type: 'article',
    publishedTime: post.date,
    author: post.author,
  });
}

export default async function NewsPostPage({ params }: NewsPostPageProps) {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.id === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = generateArticleSchema({
    headline: post.title,
    description: post.excerpt,
    image: post.image || '/NEWS.jpg',
    datePublished: post.date,
    dateModified: post.date,
    author: post.author,
    url: `/news/${slug}`
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'News', url: '/news' },
    { name: post.title, url: `/news/${slug}` }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen">
        <Header />

        {/* Hero Section with Background Image */}
        <section
          className="relative min-h-[300px] flex items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(30, 41, 59, 0.85) 50%, rgba(20, 184, 166, 0.3) 100%), url('/PORTFOLIO hero.jpg')`
          }}
        >
          <Container className="relative py-20">
            <div className="max-w-4xl text-left">
              <div className="max-w-3xl">
                <div className="w-35 h-0.5 bg-green-700 mb-6"></div>
                <h1 className="text-xl md:text-3xl lg:text-3xl font-light text-white leading-relaxed">
                  Latest news and insights from <span className="font-bold">MayFair Management</span>
                </h1>
              </div>
            </div>
          </Container>
        </section>

        <main className="bg-white">
          <Container className="py-16">
            <div className="max-w-8xl mx-auto">
              {/* Article Header */}
              <header className="mb-12">
                <div className="w-16 h-0.5 bg-teal-600 mb-6"></div>

                <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">
                  {post.title.toUpperCase()}
                </h1>

                <div className="text-lg text-gray-600 mb-8">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
              </header>

              {/* Article Content */}
              <article className="max-w-none">
                <div className="text-gray-700 leading-relaxed">
                  {/* Excerpt */}

                  {/* Main Content with proper HTML styling */}
                  <div
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    className="prose prose-lg max-w-none
                    [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-gray-800 [&>h2]:mt-8 [&>h2]:mb-4
                    [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-gray-800 [&>h3]:mt-6 [&>h3]:mb-3
                    [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-lg
                    [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6
                    [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6
                    [&>li]:mb-2
                    [&>blockquote]:border-l-4 [&>blockquote]:border-teal-600 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-600
                    [&>strong]:font-semibold [&>strong]:text-gray-800
                    [&>em]:italic
                    [&>a]:text-teal-600 [&>a]:hover:text-teal-800 [&>a]:underline"
                  />
                </div>
              </article>
            </div>
          </Container>
        </main>

        <Footer />
      </div>
    </>
  );
}