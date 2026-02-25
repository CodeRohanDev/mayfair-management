# Image Optimization Guide - MayFair Management

## Current Images Audit

### Images to Optimize

#### Hero/Banner Images (Large)
- `/public/hero banner image.jpg` - Homepage hero
- `/public/ABOUT-HERO.jpg` - About page hero
- `/public/PORTFOLIO hero.jpg` - Portfolio page hero
- `/public/LEADERSHIP_background.jpg` - Leadership page hero
- `/public/NEWS.jpg` - News page hero
- `/public/contact.jpg` - Contact page hero

#### Content Images (Medium)
- `/public/despach-ABOUT.jpg`
- `/public/DALBO-tankline2.jpg`
- `/public/NSI.jpg`
- `/public/footer.jpg`
- `/public/map.jpg`

#### Icons (Small)
- `/public/at a glance icon 1.png` through `/public/at a glance icon 6.png`
- `/public/about identity underlying value.png`

#### Team Photos
- All files in `/public/team/` directory (22 images)

#### News Images
- All files in `/public/news-images/` directory (14 images)

## Optimization Steps

### 1. Convert to WebP Format

WebP provides 25-35% better compression than JPEG/PNG.

**Tools**:
- Online: https://squoosh.app
- CLI: `cwebp input.jpg -q 80 -o output.webp`
- Batch: https://cloudconvert.com

**Recommended Quality**:
- Hero images: 85%
- Content images: 80%
- Team photos: 75%
- Icons: 90%

### 2. Resize Images to Appropriate Dimensions

**Current Issues**: Many images are larger than needed.

**Recommended Sizes**:
```
Hero/Banner Images:
- Desktop: 1920x1080px (16:9)
- Tablet: 1200x675px
- Mobile: 800x450px

Content Images:
- Max width: 1200px
- Maintain aspect ratio

Team Photos:
- 400x500px (3:4 aspect ratio)
- Thumbnail: 200x250px

News Images:
- Featured: 800x450px (16:9)
- Thumbnail: 400x225px

Icons:
- 64x64px or 128x128px
- Use SVG when possible
```

### 3. Implement Responsive Images

Update image tags to use srcset:

```html
<img 
  src="/hero-banner-800.webp"
  srcset="
    /hero-banner-800.webp 800w,
    /hero-banner-1200.webp 1200w,
    /hero-banner-1920.webp 1920w
  "
  sizes="100vw"
  alt="MayFair Management office"
  loading="lazy"
/>
```

### 4. Add Alt Text to All Images

**Current Status**: Many images missing alt text.

**Alt Text Guidelines**:
- Be descriptive and specific
- Include relevant keywords naturally
- Keep under 125 characters
- Don't start with "image of" or "picture of"

**Examples**:
```html
<!-- Bad -->
<img src="/hero.jpg" alt="hero" />

<!-- Good -->
<img src="/hero.jpg" alt="MayFair Management private equity firm office in Miami Beach" />

<!-- Bad -->
<img src="/team/jane.jpg" alt="Jane" />

<!-- Good -->
<img src="/team/jane.jpg" alt="Jane Decker, Senior Partner at MayFair Management" />
```

### 5. Implement Lazy Loading

Add `loading="lazy"` to all images below the fold:

```html
<img src="/image.jpg" alt="Description" loading="lazy" />
```

**Don't lazy load**:
- Hero images
- Above-the-fold content
- Critical images

### 6. Use Next.js Image Component

For better optimization, use Next.js Image component:

```tsx
import Image from 'next/image'

<Image
  src="/hero-banner.jpg"
  alt="MayFair Management office"
  width={1920}
  height={1080}
  priority // for above-the-fold images
  quality={85}
/>
```

**Note**: Since you're using static export, you need `unoptimized: true` in next.config.ts (already set).

## Optimization Checklist

### Hero/Banner Images
- [ ] Convert to WebP
- [ ] Resize to 1920x1080px max
- [ ] Compress to 85% quality
- [ ] Add descriptive alt text
- [ ] Use priority loading
- [ ] Target size: <200KB each

### Content Images
- [ ] Convert to WebP
- [ ] Resize to 1200px max width
- [ ] Compress to 80% quality
- [ ] Add descriptive alt text
- [ ] Use lazy loading
- [ ] Target size: <150KB each

### Team Photos
- [ ] Convert to WebP
- [ ] Resize to 400x500px
- [ ] Compress to 75% quality
- [ ] Add alt text with name and title
- [ ] Use lazy loading
- [ ] Target size: <50KB each

### News Images
- [ ] Convert to WebP
- [ ] Resize to 800x450px
- [ ] Compress to 80% quality
- [ ] Add descriptive alt text
- [ ] Use lazy loading
- [ ] Target size: <100KB each

### Icons
- [ ] Convert to SVG if possible
- [ ] Or convert to WebP at 90% quality
- [ ] Resize to 64x64px or 128x128px
- [ ] Add descriptive alt text
- [ ] Target size: <10KB each

## Batch Optimization Script

### Using ImageMagick (CLI)

```bash
# Install ImageMagick
# macOS: brew install imagemagick
# Ubuntu: sudo apt-get install imagemagick

# Convert and resize hero images
for file in *.jpg; do
  convert "$file" -resize 1920x1080 -quality 85 "${file%.jpg}.webp"
done

# Convert and resize team photos
cd team/
for file in *.jpg; do
  convert "$file" -resize 400x500 -quality 75 "${file%.jpg}.webp"
done

# Convert and resize news images
cd ../news-images/
for file in *.jpg; do
  convert "$file" -resize 800x450 -quality 80 "${file%.jpg}.webp"
done
```

### Using Node.js Script

Create `scripts/optimize-images.js`:

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const optimizeImage = async (inputPath, outputPath, width, quality) => {
  await sharp(inputPath)
    .resize(width, null, { withoutEnlargement: true })
    .webp({ quality })
    .toFile(outputPath);
  
  const inputSize = fs.statSync(inputPath).size;
  const outputSize = fs.statSync(outputPath).size;
  const savings = ((1 - outputSize / inputSize) * 100).toFixed(2);
  
  console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${savings}% smaller)`);
};

// Optimize hero images
const heroImages = [
  'hero banner image.jpg',
  'ABOUT-HERO.jpg',
  'PORTFOLIO hero.jpg',
  'LEADERSHIP_background.jpg',
  'NEWS.jpg',
  'contact.jpg'
];

heroImages.forEach(async (image) => {
  await optimizeImage(
    `public/${image}`,
    `public/${image.replace(/\.(jpg|png)$/, '.webp')}`,
    1920,
    85
  );
});

// Add more optimization tasks...
```

Run with:
```bash
npm install sharp
node scripts/optimize-images.js
```

## Expected Results

### Before Optimization
- Total image size: ~15-20MB
- Page load time: 3-5 seconds
- Lighthouse performance: 60-70

### After Optimization
- Total image size: ~3-5MB (70-80% reduction)
- Page load time: 1-2 seconds
- Lighthouse performance: 90-100

## Image CDN (Optional)

For even better performance, consider using an image CDN:

### Cloudinary
- Free tier: 25GB storage, 25GB bandwidth
- Automatic optimization
- Responsive images
- URL-based transformations

### Imgix
- Real-time image processing
- Automatic format selection
- Advanced optimization

### Cloudflare Images
- $5/month for 100,000 images
- Global CDN
- Automatic optimization

## Alt Text Reference

### Hero Images
```
/hero banner image.jpg
Alt: "MayFair Management private equity firm headquarters in Miami Beach, Florida"

/ABOUT-HERO.jpg
Alt: "MayFair Management team collaborating on investment strategy"

/PORTFOLIO hero.jpg
Alt: "MayFair Management portfolio companies and investment success stories"

/LEADERSHIP_background.jpg
Alt: "MayFair Management executive leadership team"

/NEWS.jpg
Alt: "Latest news and updates from MayFair Management"

/contact.jpg
Alt: "Contact MayFair Management for investment opportunities"
```

### Team Photos
```
Format: "[Name], [Title] at MayFair Management"

Examples:
- "Jane Decker, Senior Partner at MayFair Management"
- "Jeena Henry, Partner at MayFair Management"
- "Malone Easley, Managing Director at MayFair Management"
```

### News Images
```
Format: "[Topic] - MayFair Management [Category]"

Examples:
- "Strategic expansion announcement - MayFair Management press release"
- "Portfolio company acquisition - MayFair Management investment news"
- "Industry leadership award - MayFair Management recognition"
```

## Testing Tools

### Performance Testing
- Google PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- WebPageTest: https://www.webpagetest.org/

### Image Analysis
- Cloudinary Image Analysis: https://webspeedtest.cloudinary.com/
- ImageOptim (macOS): https://imageoptim.com/

### Accessibility Testing
- WAVE: https://wave.webaim.org/
- axe DevTools: Browser extension

## Maintenance

### Monthly Tasks
- [ ] Audit new images added
- [ ] Optimize any unoptimized images
- [ ] Check for broken image links
- [ ] Update alt text as needed

### Quarterly Tasks
- [ ] Review image performance metrics
- [ ] Re-optimize if new tools available
- [ ] Check for unused images
- [ ] Update image CDN settings

## Quick Wins

1. **Convert 6 hero images to WebP** (Biggest impact)
2. **Add alt text to all team photos** (SEO boost)
3. **Lazy load all below-fold images** (Faster initial load)
4. **Compress news images** (Reduce bandwidth)
5. **Convert icons to SVG** (Scalable and tiny)

---

**Priority**: HIGH
**Estimated Time**: 4-6 hours
**Expected Impact**: 50-70% faster page loads, better SEO rankings
