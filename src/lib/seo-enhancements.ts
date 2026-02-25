import { siteConfig } from '@/config/site'

// Performance and optimization meta tags
export const performanceMetaTags = {
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'MayFair',
    'application-name': 'MayFair Management',
    'msapplication-TileColor': '#1e40af',
    'msapplication-tap-highlight': 'no',
    'theme-color': '#1e40af',
}

// Generate local business schema with enhanced details
export function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        "@id": `${siteConfig.url}/#localbusiness`,
        "name": siteConfig.name,
        "image": `${siteConfig.url}/logo.jpg`,
        "description": siteConfig.description,
        "url": siteConfig.url,
        "telephone": "+1 (786) 451-9957",
        "email": "info@may-fairmanagement.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "404 Washington Avenue",
            "addressLocality": "Miami Beach",
            "addressRegion": "FL",
            "postalCode": "33139",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "25.7814",
            "longitude": "-80.1300"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
        },
        "priceRange": "$$$$",
        "currenciesAccepted": "USD",
        "paymentAccepted": "Wire Transfer, Check",
        "areaServed": {
            "@type": "Country",
            "name": "United States"
        },
        "sameAs": [
            siteConfig.social.twitter,
            siteConfig.social.linkedin,
            siteConfig.social.instagram
        ]
    }
}

// SEO best practices checklist
export const seoChecklist = {
    technical: [
        'Sitemap.xml generated and submitted',
        'Robots.txt configured',
        'Canonical URLs set',
        'Mobile-friendly design',
        'Fast page load times',
        'HTTPS enabled',
        'Structured data implemented',
        'XML sitemap for images',
        'Proper heading hierarchy (H1-H6)',
        'Alt text for all images'
    ],
    onPage: [
        'Unique title tags (50-60 characters)',
        'Meta descriptions (150-160 characters)',
        'Header tags properly structured',
        'Internal linking strategy',
        'Keyword optimization',
        'Content quality and relevance',
        'URL structure optimization',
        'Image optimization',
        'Schema markup',
        'Social media meta tags'
    ],
    offPage: [
        'Backlink building',
        'Social media presence',
        'Local citations',
        'Guest posting',
        'Brand mentions',
        'Directory listings',
        'Industry partnerships',
        'Press releases'
    ]
}

// Generate enhanced Open Graph tags
export function generateEnhancedOGTags(page: {
    title: string
    description: string
    image: string
    url: string
    type?: string
}) {
    return {
        'og:title': page.title,
        'og:description': page.description,
        'og:image': `${siteConfig.url}${page.image}`,
        'og:image:width': '1200',
        'og:image:height': '630',
        'og:image:alt': page.title,
        'og:url': `${siteConfig.url}${page.url}`,
        'og:type': page.type || 'website',
        'og:site_name': siteConfig.name,
        'og:locale': 'en_US',
    }
}

// Generate Twitter Card tags
export function generateTwitterCardTags(page: {
    title: string
    description: string
    image: string
}) {
    return {
        'twitter:card': 'summary_large_image',
        'twitter:site': '@mayfairmanage',
        'twitter:creator': '@mayfairmanage',
        'twitter:title': page.title,
        'twitter:description': page.description,
        'twitter:image': `${siteConfig.url}${page.image}`,
        'twitter:image:alt': page.title,
    }
}

// SEO-friendly URL generator
export function generateSEOFriendlySlug(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-')
        .trim()
}

// Meta description generator with optimal length
export function generateMetaDescription(text: string, maxLength: number = 160): string {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength - 3).trim() + '...'
}

// Title tag generator with optimal length
export function generatePageTitle(title: string, maxLength: number = 60): string {
    const fullTitle = `${title} | ${siteConfig.name}`
    if (fullTitle.length <= maxLength) return fullTitle

    // If too long, try without site name
    if (title.length <= maxLength) return title

    // If still too long, truncate
    return title.substring(0, maxLength - 3).trim() + '...'
}
