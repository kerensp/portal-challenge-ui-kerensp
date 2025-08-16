import { ICategory } from '@/definitions/category.interface';
import { ApiResponse } from '@/definitions/common/api.interface';
import categoriesData from '@/constants/categories.json';

export async function getCategories(): Promise<ApiResponse<ICategory[]>> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: categoriesData }), 200);
  });
}
