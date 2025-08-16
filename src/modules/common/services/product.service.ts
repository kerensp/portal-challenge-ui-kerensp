import { IProduct } from '@/definitions/product.interface';
import productsData from '@/constants/products.json';

export type FetchProductsParams = {
  category?: string;
  search?: string;
}

const FILTER_DELAY = 400;

export async function getProductsByCategory(
  params?: FetchProductsParams
): Promise<IProduct[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = [...productsData];

      if (params?.category) {
        filtered = filtered.filter((p) => p.category === params.category);
      }

      if (params?.search) {
        const searchTerm = params.search.toLowerCase();
        filtered = filtered.filter((p) =>
          p.name.toLowerCase().includes(searchTerm)
        );
      }

      resolve(filtered);
    }, FILTER_DELAY);
  });
}
