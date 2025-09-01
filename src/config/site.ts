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
    googleAnalytics: '', // GA4 Measurement ID
    googleTagManager: '', // GTM Container ID
    facebookPixel: '', // Facebook Pixel ID
    linkedInInsight: '' // LinkedIn Insight Tag
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