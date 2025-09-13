'use client';

import { useState, useMemo } from 'react';
import { generateStructuredData } from '@/lib/seo';
import { newsPosts } from '@/data/news';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsHeroSection from '@/components/news/NewsHeroSection';
import NewsFilterSection from '@/components/news/NewsFilterSection';
import NewsGrid from '@/components/news/NewsGrid';

export default function NewsPageClient() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredPosts = useMemo(() => {
    if (activeFilter === 'all') return newsPosts;
    
    const filterMap: { [key: string]: string[] } = {
      press: ['Heritage', 'Business'],
      firm: ['Business', 'Education'],
      portfolio: ['Tourism', 'Culture']
    };

    const categories = filterMap[activeFilter] || [];
    return newsPosts.filter(post => categories.includes(post.category));
  }, [activeFilter]);

  const structuredData = generateStructuredData({
    title: 'News & Updates - MayFair Management',
    description: 'Stay updated with the latest news, press releases, and company updates from MayFair Management. Read about our portfolio companies, investment activities, and industry insights.',
    url: '/news',
    type: 'WebPage',
    image: '/NEWS.jpg'
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
        <Header />
        
        <main>
          <NewsHeroSection />
          <NewsFilterSection 
            onFilterChange={setActiveFilter} 
            activeFilter={activeFilter} 
          />
          <NewsGrid posts={filteredPosts} />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
