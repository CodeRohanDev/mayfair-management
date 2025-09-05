'use client';

import { useState, useMemo } from 'react';
import { newsPosts } from '@/data/news';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsHeroSection from '@/components/news/NewsHeroSection';
import NewsFilterSection from '@/components/news/NewsFilterSection';
import NewsGrid from '@/components/news/NewsGrid';

export default function NewsPage() {
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

  return (
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
  );
}