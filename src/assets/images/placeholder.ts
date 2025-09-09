// Placeholder for image assets
// Replace these with actual image paths when you have real images

export const images = {
  logo: {
    main: '/images/logo.svg',
    white: '/images/logo-white.svg',
    dark: '/images/logo-dark.svg'
  },
  
  hero: {
    background: '/images/hero-bg.jpg',
    overlay: '/images/hero-overlay.png'
  },
  
  about: {
    team: '/images/team.jpg',
    office: '/images/office.jpg'
  },
  
  news: {
    placeholder: '/images/news-placeholder.jpg',
    awards: '/images/awards.jpg'
  },
  
  icons: {
    favicon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    android: '/android-chrome-192x192.png'
  }
};

// Image optimization settings
export const imageConfig = {
  domains: ['MayFairmgmt.com', 'cdn.MayFairmgmt.com'],
  formats: ['image/webp', 'image/avif'],
  sizes: {
    thumbnail: 150,
    small: 300,
    medium: 600,
    large: 1200,
    xlarge: 1920
  }
};