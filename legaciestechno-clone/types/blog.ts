export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  category?: string;
  image: string;
  content: string;
  author: string;
  date: string;
  readingTime: string;
  source?: string;
  sourceUrl?: string;
  featured?: boolean;
}
