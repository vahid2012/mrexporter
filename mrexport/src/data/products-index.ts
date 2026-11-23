import type { Product } from './types';
import { petrochemicalProducts } from './products-petrochemicals';
import { foodProducts } from './products-foods';
import { industrialProducts } from './products-industrial';
import { metalsProducts } from './products-metals';
import { handicraftProducts } from './products-handicrafts';
import { constructionProducts } from './products-construction';

export const allProducts: Product[] = [
  ...petrochemicalProducts,
  ...metalsProducts,
  ...industrialProducts,
  ...constructionProducts,
  ...foodProducts,
  ...handicraftProducts,
];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return allProducts.filter((p) => p.categorySlug === categorySlug);
}
