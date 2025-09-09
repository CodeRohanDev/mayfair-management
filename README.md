# MayFair Management Website

A professional, static website replica of the MayFair Management homepage built with Next.js and Tailwind CSS. Features a modular architecture with centralized configuration for easy customization and maintenance.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern Stack**: Built with Next.js 15, React 19, and Tailwind CSS 4
- **Static Export**: Generates static HTML files for easy deployment
- **Professional Design**: Matches the original MayFair Management website design
- **Modular Architecture**: Well-organized components and data structure
- **Theme System**: Centralized color and typography configuration
- **SEO Optimized**: Proper meta tags and structured data
- **Type Safe**: Full TypeScript support

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and fonts
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── Container.tsx # Layout container
│   │   ├── Section.tsx   # Section wrapper
│   │   └── Icon.tsx      # Icon component
│   ├── Header.tsx        # Site header
│   ├── HeroSection.tsx   # Hero banner
│   ├── AboutSection.tsx  # About content
│   ├── StatsSection.tsx  # Statistics display
│   ├── NewsSection.tsx   # News cards
│   └── Footer.tsx        # Site footer
├── config/               # Configuration files
│   ├── theme.ts          # Theme colors and typography
│   └── site.ts           # Site metadata and settings
├── data/                 # Data files
│   ├── company.ts        # Company information
│   ├── navigation.ts     # Navigation menus
│   ├── stats.ts          # Statistics data
│   └── news.ts           # News articles
├── lib/                  # Utility functions
│   └── utils.ts          # Common utilities
└── assets/               # Static assets
    └── images/           # Image placeholders
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

Generate the static website:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## 🎨 Customization Guide

### 1. Company Information
Edit `src/data/company.ts` to update:
- Company name and description
- Contact information
- Social media links
- Mission statements

### 2. Theme & Colors
Modify `src/config/theme.ts` to change:
- Color palette (primary, secondary, neutral)
- Typography settings
- Spacing and layout
- Gradients and effects

### 3. Navigation
Update `src/data/navigation.ts` for:
- Main navigation menu
- Footer links
- Legal pages

### 4. Statistics
Edit `src/data/stats.ts` to modify:
- Company metrics
- Achievement numbers
- Icon associations

### 5. News & Updates
Manage `src/data/news.ts` for:
- Latest news items
- Press releases
- Company announcements

### 6. Site Configuration
Adjust `src/config/site.ts` for:
- SEO metadata
- Analytics tracking
- Feature toggles
- Social media settings

## 🎯 Key Components

### Header
- Responsive navigation
- Company logo/name
- Mobile-friendly menu

### Hero Section
- Gradient background
- Company tagline
- Responsive typography

### About Section
- Mission statement
- Company description
- Centered layout

### Stats Section
- Key metrics display
- Icon integration
- Grid layout

### News Section
- Article cards
- Category filtering
- Link integration

### Footer
- Contact information
- Social media links
- Legal navigation

## 🚀 Deployment

The built static files in the `out` directory can be deployed to:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop `out` folder
- **GitHub Pages**: Upload `out` contents
- **AWS S3**: Sync `out` folder to bucket
- **Any web server**: Upload `out` contents

### Environment Variables

For production deployment, set these environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_GTM_ID=your-google-tag-manager-id
```

## 🔧 Development Tips

### Adding New Sections
1. Create component in `src/components/`
2. Add data file in `src/data/` if needed
3. Import and use in `src/app/page.tsx`
4. Update theme if new colors needed

### Modifying Styles
- Use theme variables from `src/config/theme.ts`
- Follow existing component patterns
- Maintain responsive design principles

### Adding Images
1. Place images in `public/images/`
2. Update `src/assets/images/placeholder.ts`
3. Use Next.js Image component for optimization

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO Features

- Structured metadata
- Open Graph tags
- Twitter Card support
- Semantic HTML
- Proper heading hierarchy

## 📄 License

This project is for demonstration purposes only. Customize as needed for your client's requirements.

## 🤝 Support

For questions or customization requests, please refer to the component documentation or create an issue in the repository.