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
  noindex?: boolean
  nofollow?: boolean
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
      creator: "@mayfairmanage",
      site: "@mayfairmanage",
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

// Generate breadcrumb structured data
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${siteConfig.url}${item.url}`
    }))
  }
}

// Generate Person schema for leadership pages
export function generatePersonSchema({
  name,
  jobTitle,
  description,
  image,
  url,
  email,
  sameAs = []
}: {
  name: string
  jobTitle: string
  description: string
  image: string
  url: string
  email?: string
  sameAs?: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "description": description,
    "image": `${siteConfig.url}${image}`,
    "url": `${siteConfig.url}${url}`,
    "worksFor": {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      "name": siteConfig.name
    },
    ...(email && { "email": email }),
    ...(sameAs.length > 0 && { "sameAs": sameAs })
  }
}

// Generate Article schema for news pages
export function generateArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  url
}: {
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  author: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": headline,
    "description": description,
    "image": `${siteConfig.url}${image}`,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": siteConfig.url
    },
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
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${url}`
    }
  }
}

// Generate FAQ schema
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

// Generate Investment/Service schema
export function generateInvestmentServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Private Equity Investment Management",
    "provider": {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      "name": siteConfig.name
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Private Equity Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Middle Market Investments",
            "description": "Strategic investments in middle market companies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Growth Capital",
            "description": "Capital for business expansion and growth"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Management Buyouts",
            "description": "Support for management-led acquisitions"
          }
        }
      ]
    }
  }
}
