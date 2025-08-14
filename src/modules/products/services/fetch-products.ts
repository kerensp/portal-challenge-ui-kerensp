import { IProduct } from '@/definitions/product.interface';
import productsData from '@/constants/products.json';
import categoriesData from '@/constants/categories.json';
import { ICategory } from '@/definitions/category.interface';
import { RequestConfig } from '@/services/api-service.service';
import { ApiResponse } from '@/definitions/common/api.interface';

interface FetchProductsParams {
  category?: string;
  search?: string;
}

export const fetchProductsByCategory = async (
  params?: FetchProductsParams
): Promise<IProduct[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = productsData;

      if (params?.category) {
        filtered = filtered.filter((p) => p.category === params.category);
      }
      if (params?.search) {
        filtered = filtered.filter((p) =>
          p?.name.toLowerCase().includes(params.search!.toLowerCase())
        );
      }

      resolve(filtered);
    }, 500);
  });

  /* ------------------ API REAL ------------------
  const res = await ApiServerSide.post('/products/search', params);
  return res.data ?? [];
  */
};

export const fetchCategories = (
  config?: RequestConfig
): Promise<ApiResponse<ICategory[]>> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: categoriesData }), 300);
  });

  /* 
  return ApiServerSide.post(
    `${API_CATEGORY}/categories/search`,
    {},
    {
      ...config,
      next: { tags: ["category-list"] },
    }
  );
  return res.data ?? [];
  */
};
