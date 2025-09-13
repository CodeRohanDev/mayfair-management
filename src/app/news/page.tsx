import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import NewsPageClient from './NewsPageClient';

export const metadata: Metadata = generateMetadata({
  title: 'News & Updates - MayFair Management',
  description: 'Stay updated with the latest news, press releases, and company updates from MayFair Management. Read about our portfolio companies, investment activities, and industry insights.',
  keywords: [
    'MayFair Management news',
    'private equity news',
    'investment updates',
    'portfolio company news',
    'press releases',
    'company announcements',
    'investment activities',
    'private equity updates',
    'MayFair press',
    'investment news'
  ],
  image: '/NEWS.jpg',
  url: '/news',
  type: 'website'
});

export default function NewsPage() {
  return <NewsPageClient />;
}