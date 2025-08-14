'use client';
import { useState, useMemo } from 'react';
import { ICategory } from '@/definitions/category.interface';
import { IProduct } from '@/definitions/product.interface';
import { fetchProductsByCategory } from '@/modules/products/services/fetch-products';

interface UseSearchProps {
  categories: ICategory[];
  initialParams?: { category?: string; search?: string };
}

export function useSearchBar({ categories, initialParams }: UseSearchProps) {
  const [category, setCategory] = useState(initialParams?.category || '');
  const [search, setSearch] = useState(initialParams?.search || '');
  const [results, setResults] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedCategory = useMemo(() =>
    categories.find((c) => c.name === category), [category, categories]);

  const onSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchProductsByCategory({ category, search });
      setResults(data);
    } catch (err) {
      setError('Error al buscar productos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const onClear = () => {
    setCategory('');
    setSearch('');
    setResults([]);
  };

  return {
    category,
    setCategory,
    search,
    setSearch,
    selectedCategory,
    onSearch,
    onClear,
    results,
    loading,
    error,
  };
}
