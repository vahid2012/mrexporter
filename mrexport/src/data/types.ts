export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContentSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export type HSCodeStatus = 'verified' | 'conditional' | 'unverified';

export interface Product {
  slug: string;
  name: string;
  hsCode: string;
  hsCodeStatus: HSCodeStatus;
  hsCodeNote?: string;
  category: string;
  categorySlug: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  imageAlt: string;
  imageIcon: string;
  introduction: string;
  sections: ContentSection[];
  faqs: FAQItem[];
  relatedSlugs: string[];
}

export interface Category {
  slug: string;
  name: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  imageIcon: string;
}
