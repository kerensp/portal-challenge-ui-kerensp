import { Product } from '@/definitions/product.interface';
import productsData from '@/constants/products.json';
import categoriesData from '@/constants/categories.json';
import { Category } from '@/definitions/category.interface';

export function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsData);
    }, 500);
  });
}

export function fetchCategories(): Promise<Category[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categoriesData);
    }, 500);
  });
}
