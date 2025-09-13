import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = []
}: SEOProps): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title
  const pageDescription = description || siteConfig.description
  const pageUrl = url ? `${siteConfig.url}${url}` : siteConfig.url
  const pageImage = image ? `${siteConfig.url}${image}` : `${siteConfig.url}/hero banner image.jpg`
  
  const allKeywords = [...siteConfig.meta.keywords, ...keywords, ...tags]

  const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    keywords: allKeywords,
    authors: author ? [{ name: author }] : [{ name: siteConfig.meta.author }],
    creator: siteConfig.meta.author,
    publisher: siteConfig.meta.author,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type,
      locale: "en_US",
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: `${pageTitle} - ${pageDescription}`,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      creator: "@MayFairmgmt",
      site: "@MayFairmgmt",
      images: [pageImage],
    },
  }

  return metadata
}

export function generateStructuredData({
  title,
  description,
  url,
  type = 'WebPage',
  publishedTime,
  modifiedTime,
  author,
  image
}: {
  title?: string
  description?: string
  url?: string
  type?: string
  publishedTime?: string
  modifiedTime?: string
  author?: string
  image?: string
}) {
  const pageUrl = url ? `${siteConfig.url}${url}` : siteConfig.url
  const pageImage = image ? `${siteConfig.url}${image}` : `${siteConfig.url}/hero banner image.jpg`

  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    "name": title || siteConfig.title,
    "description": description || siteConfig.description,
    "url": pageUrl,
    "image": pageImage,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.url,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/logo.jpg`,
        "width": 300,
        "height": 100
      }
    },
    ...(publishedTime && { "datePublished": publishedTime }),
    ...(modifiedTime && { "dateModified": modifiedTime }),
    ...(author && { "author": { "@type": "Person", "name": author } })
  }

  return structuredData
}
