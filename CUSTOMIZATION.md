# 🎨 Customization Guide

This guide will help you customize the Lincolnshire Management website for your specific needs.

## 🏢 Quick Start - Change Company Information

### 1. Company Details
Edit `src/data/company.ts`:

```typescript
export const companyData = {
  name: "YourCompany",                    // Short name for header
  fullName: "Your Company Management",    // Full name for hero
  tagline: "Your Business Focus",         // SEO tagline
  description: "Your company description...",
  
  contact: {
    company: "Your Company Inc.",
    city: "Your City, Your State",
    country: "Your Country",
    email: "info@yourcompany.com",
    phone: "+1 (555) 123-4567"
  },
  
  social: {
    twitter: "https://twitter.com/yourcompany",
    linkedin: "https://linkedin.com/company/yourcompany",
    website: "https://www.yourcompany.com"
  },
  
  founded: 2020, // Your founding year
  
  mission: {
    primary: "Your primary mission statement...",
    secondary: "Your detailed company description..."
  }
};
```

### 2. Update Statistics
Edit `src/data/stats.ts`:

```typescript
export const statsData = [
  {
    id: 'founded',
    icon: 'calendar',
    number: '2020',                    // Your founding year
    label: 'Year established',         // Your description
    category: 'history'
  },
  {
    id: 'funds',
    icon: 'dollar',
    number: '$50M+',                   // Your amount
    label: 'Assets under management',  // Your description
    category: 'financial'
  },
  // Add more stats as needed...
];
```

### 3. Update News/Articles
Edit `src/data/news.ts`:

```typescript
export const newsData = [
  {
    id: 'your-news-1',
    type: 'ANNOUNCEMENT',
    title: 'Your News Title',
    subtitle: 'Your Subtitle',
    description: 'Your Description',
    date: 'JANUARY 2024',
    category: 'company',
    featured: true,
    link: '/news/your-news-slug'
  },
  // Add more news items...
];
```

## 🎨 Change Colors and Theme

### Primary Colors (Teal/Blue theme)
Edit `src/config/theme.ts`:

```typescript
export const theme = {
  colors: {
    primary: {
      400: '#2dd4bf', // Main teal - change this
      500: '#14b8a6', // Darker teal
      600: '#0d9488', // Even darker
    },
    secondary: {
      800: '#1e293b', // Main dark color - change this
      900: '#0f172a', // Darker
    }
  },
  gradients: {
    hero: 'from-slate-800 via-slate-700 to-teal-400', // Change gradient
  }
};
```

### Popular Color Schemes

**Blue Corporate:**
```typescript
primary: { 400: '#3b82f6', 500: '#2563eb', 600: '#1d4ed8' }
gradients: { hero: 'from-slate-800 via-blue-800 to-blue-400' }
```

**Green Finance:**
```typescript
primary: { 400: '#10b981', 500: '#059669', 600: '#047857' }
gradients: { hero: 'from-slate-800 via-green-800 to-green-400' }
```

**Purple Tech:**
```typescript
primary: { 400: '#8b5cf6', 500: '#7c3aed', 600: '#6d28d9' }
gradients: { hero: 'from-slate-800 via-purple-800 to-purple-400' }
```

## 📝 Change Content

### Navigation Menu
Edit `src/data/navigation.ts`:

```typescript
export const navigationData = {
  main: [
    { name: 'HOME', href: '/', current: true },
    { name: 'ABOUT', href: '/about', current: false },
    { name: 'SERVICES', href: '/services', current: false }, // Changed
    { name: 'PORTFOLIO', href: '/portfolio', current: false },
    { name: 'CONTACT', href: '/contact', current: false }
  ]
};
```

### Hero Section Text
The hero text comes from `companyData.description` in `src/data/company.ts`.

### About Section Text
The about text comes from `companyData.mission` in `src/data/company.ts`.

## 🖼️ Add Images

### 1. Add Your Logo
- Place your logo in `public/images/logo.svg`
- Update `src/assets/images/placeholder.ts`

### 2. Hero Background
- Add hero image to `public/images/hero-bg.jpg`
- Update `src/components/HeroSection.tsx` to use background image:

```typescript
<section className="relative bg-cover bg-center min-h-[600px]" 
         style={{backgroundImage: 'url(/images/hero-bg.jpg)'}}>
```

### 3. Favicon
- Replace `public/favicon.ico` with your favicon
- Add other icon sizes in `public/` folder

## 🔧 Advanced Customization

### Add New Sections
1. Create component in `src/components/YourSection.tsx`
2. Import in `src/app/page.tsx`
3. Add between existing sections

### Modify Layout
- Edit `src/components/ui/Container.tsx` for max-width
- Edit `src/components/ui/Section.tsx` for spacing
- Update `src/config/theme.ts` for responsive breakpoints

### SEO & Metadata
Edit `src/config/site.ts`:

```typescript
export const siteConfig = {
  title: "Your Company - Your Tagline",
  description: "Your SEO description...",
  meta: {
    keywords: ['your', 'keywords', 'here'],
  }
};
```

## 📱 Mobile Optimization

The site is fully responsive. To adjust mobile behavior:

1. **Typography**: Edit `theme.typography.fontSize` in `src/config/theme.ts`
2. **Spacing**: Adjust padding/margins in components
3. **Grid**: Modify `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` classes

## 🚀 Deployment Checklist

Before deploying:

1. ✅ Update all company information
2. ✅ Replace placeholder images
3. ✅ Test on mobile devices
4. ✅ Update SEO metadata
5. ✅ Add analytics tracking IDs
6. ✅ Test all links
7. ✅ Run `npm run build` successfully

## 🆘 Common Issues

**Build Errors:**
- Check TypeScript errors in terminal
- Ensure all imports are correct
- Verify data structure matches interfaces

**Styling Issues:**
- Check Tailwind class names
- Verify theme configuration
- Test responsive breakpoints

**Content Not Updating:**
- Clear browser cache
- Restart development server
- Check file paths are correct

## 📞 Need Help?

If you need assistance with customization:

1. Check the component files for examples
2. Refer to Tailwind CSS documentation
3. Test changes in development mode first
4. Keep backups of working versions