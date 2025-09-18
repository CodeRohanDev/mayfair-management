import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.meta.keywords,
  authors: [{ name: siteConfig.meta.author }],
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
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/hero banner image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.description}`,
      },
      {
        url: `${siteConfig.url}/logo.jpg`,
        width: 300,
        height: 100,
        alt: `${siteConfig.name} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@mayfairmanage",
    site: "@mayfairmanage",
    images: [`${siteConfig.url}/hero banner image.jpg`],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/logo.jpg", sizes: "192x192", type: "image/jpeg" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/logo.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
  manifest: "/manifest.json",
  other: {
    "msvalidate.01": "07457BC6F782C46ABF5CAF548678E9B2",
    "google-site-verification": "", // Add your Google Search Console verification code
    "yandex-verification": "", // Add your Yandex verification code if needed
    "pinterest-site-verification": "", // Add your Pinterest verification code if needed
  },
  verification: {
    google: "", // Add your Google Search Console verification code
    yandex: "", // Add your Yandex verification code if needed
    yahoo: "", // Add your Yahoo verification code if needed
  },
  category: "Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        "name": siteConfig.name,
        "alternateName": "MayFair Management",
        "url": siteConfig.url,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteConfig.url}/logo.jpg`,
          "width": 300,
          "height": 100
        },
        "description": siteConfig.description,
        "foundingDate": "1986",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "404 Washington Avenue",
          "addressLocality": "Miami Beach",
          "addressRegion": "FL",
          "postalCode": "33139",
          "addressCountry": "US"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1 (786) 451-9957",
          "contactType": "customer service",
          "email": "info@mayfairmanage.com"
        },
        "sameAs": [
          siteConfig.social.twitter,
          siteConfig.social.linkedin,
          siteConfig.social.instagram
        ],
        "areaServed": "United States",
        "serviceType": "Private Equity Investment Management",
        "knowsAbout": [
          "Private Equity",
          "Investment Management",
          "Middle Market",
          "Portfolio Management",
          "Financial Services"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": siteConfig.name,
        "description": siteConfig.description,
        "publisher": {
          "@id": `${siteConfig.url}/#organization`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${siteConfig.url}/search?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "FinancialService",
        "@id": `${siteConfig.url}/#financialservice`,
        "name": "MayFair Management Private Equity Services",
        "description": "Private equity investment management services focusing on middle market companies",
        "provider": {
          "@id": `${siteConfig.url}/#organization`
        },
        "serviceType": "Private Equity Investment Management",
        "areaServed": "United States"
      }
    ]
  };

  return (
    <html lang={siteConfig.meta.language}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
