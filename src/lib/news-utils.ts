import { NewsPost } from '@/data/news';

export function createBlogPost(
  id: string,
  title: string,
  excerpt: string,
  content: string,
  author: string = "MayFair Team",
  category: string = "News",
  tags: string[] = [],
  image?: string
): NewsPost {
  return {
    id,
    title,
    excerpt,
    content,
    author,
    date: new Date().toISOString().split('T')[0], // Today's date
    category,
    image: image || "/hero banner image.jpg",
    tags
  };
}

export function generateBlogId(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}