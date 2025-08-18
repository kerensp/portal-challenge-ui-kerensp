import { ICategory } from '@/definitions/category.interface';
import { ApiResponse } from '@/definitions/common/api.interface';
import categoriesData from '@/constants/categories.json';

const FILTER_DELAY = 400;

export async function getCategories(): Promise<ApiResponse<ICategory[]>> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: categoriesData }), 200);
  });
}

export async function getCategoryBySlug(slug: string): Promise<ICategory | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = categoriesData?.find(
        (p) => p.slug === slug
      );
      resolve(product ?? null);
    }, FILTER_DELAY);
  });
}
