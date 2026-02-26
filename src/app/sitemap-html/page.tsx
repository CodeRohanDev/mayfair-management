import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function SitemapPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const pages = [
    { url: '/', title: 'Home', description: 'MayFair Management - Private Equity Investment Management' },
    { url: '/about', title: 'About Us', description: 'Learn about our company, mission, and values' },
    { url: '/leadership', title: 'Leadership', description: 'Meet our leadership team and management' },
    { url: '/portfolio', title: 'Portfolio', description: 'Explore our portfolio companies and investments' },
    { url: '/news', title: 'News & Updates', description: 'Latest news and company updates' },
    { url: '/contact', title: 'Contact', description: 'Get in touch with our team' },
  ]

  const leadershipPages = [
    'Anna-milica',
    'bryce',
    'clay',
    'diana-grace-dupont',
    'george-henry',
    'jack',
    'jane',
    'jeena',
    'johans',
    'justin',
    'malone',
    'mike-lyons',
    'morgan',
    'nedeau',
    'nick',
    'operano',
    'phil-kim',
    'salen',
    'serena-grace-monroe',
    'Jessica-vyshnevetska',
    'tony'
  ]

  const newsPages = [
    'barrier',
    'compass',
    'cxo',
    'detch',
    'expansion',
    'handshake',
    'manda',
    'mgmt',
    'middle',
    'press',
    'rewards',
    'top50',
    'update'
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sitemap</h1>
          <p className="text-gray-600 mb-8">
            Last updated: {currentDate}
          </p>

          {/* Main Pages */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Main Pages</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {pages.map((page) => (
                <div key={page.url} className="border-l-4 border-blue-500 pl-4">
                  <Link
                    href={page.url}
                    className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {page.title}
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">{page.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Leadership Pages */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Leadership Team</h2>
            <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-4">
              {leadershipPages.map((slug) => (
                <Link
                  key={slug}
                  href={`/leadership/${slug}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors capitalize"
                >
                  {slug.replace(/-/g, ' ')}
                </Link>
              ))}
            </div>
          </section>

          {/* News Pages */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">News & Articles</h2>
            <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-4">
              {newsPages.map((slug) => (
                <Link
                  key={slug}
                  href={`/news/${slug}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors capitalize"
                >
                  {slug.replace(/-/g, ' ')}
                </Link>
              ))}
            </div>
          </section>

          {/* XML Sitemap Link */}
          <section className="border-t pt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">XML Sitemaps</h2>
            <div className="space-y-2">
              <Link
                href="/sitemap.xml"
                className="block text-blue-600 hover:text-blue-800 transition-colors"
              >
                Main Sitemap (XML)
              </Link>
              <Link
                href="/sitemap-news.xml"
                className="block text-blue-600 hover:text-blue-800 transition-colors"
              >
                News Sitemap (XML)
              </Link>
              <Link
                href="/sitemap-leadership.xml"
                className="block text-blue-600 hover:text-blue-800 transition-colors"
              >
                Leadership Sitemap (XML)
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
