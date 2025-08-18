import { IProduct } from '@/definitions/product.interface';
import productsData from '@/constants/products.json';
import { mockFetch } from '@/lib/utils';

export type FetchProductsParams = {
  category?: string;
  slug?: string;
  search?: string;
}

const FILTER_DELAY = 400;

export async function getProducts(): Promise<IProduct[]> {
  const res = await mockFetch(productsData);
  if (!res.ok) throw new Error("Failed to fetch banners");
  return res.json();
}
export async function getProductBySlug(slug: string): Promise<IProduct | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = productsData.find(
        (p) => p.slug === slug
      );
      resolve(product ?? null);
    }, FILTER_DELAY);
  });
}

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
