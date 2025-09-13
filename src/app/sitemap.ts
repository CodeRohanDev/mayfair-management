import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const currentDate = new Date().toISOString()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/leadership`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Dynamic leadership pages (you can expand this based on your data)
  const leadershipPages = [
    'marguerite-milica',
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
    'tj-maloney',
    'tony'
  ].map(slug => ({
    url: `${baseUrl}/leadership/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Dynamic news pages (you can expand this based on your data)
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
  ].map(slug => ({
    url: `${baseUrl}/news/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  return [...staticPages, ...leadershipPages, ...newsPages]
}
