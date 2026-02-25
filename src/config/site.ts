import { companyData } from '@/data/company';

export const siteConfig = {
  name: companyData.name,
  title: `${companyData.fullName} - ${companyData.tagline}`,
  description: companyData.description,
  url: companyData.social.website,

  // SEO Meta
  meta: {
    keywords: [
      'private equity',
      'investment management',
      'middle market',
      'portfolio companies',
      'financial services',
      'venture capital',
      'growth capital'
    ],
    author: companyData.fullName,
    robots: 'index, follow',
    language: 'en'
  },

  // Social Media
  social: companyData.social,

  // Contact Information
  contact: companyData.contact,

  // Analytics & Tracking (add your IDs here)
  analytics: {
    googleAnalytics: process.env.NEXT_PUBLIC_GA_ID || '', // GA4 Measurement ID (format: G-XXXXXXXXXX)
    googleTagManager: process.env.NEXT_PUBLIC_GTM_ID || '', // GTM Container ID (format: GTM-XXXXXXX)
    facebookPixel: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '', // Facebook Pixel ID
    linkedInInsight: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || '', // LinkedIn Insight Tag
    bingUET: process.env.NEXT_PUBLIC_BING_UET_ID || '', // Bing UET Tag ID
  },

  // Features Toggle
  features: {
    darkMode: false,
    newsletter: false,
    blog: false,
    search: false,
    multiLanguage: false
  }
};