'use client';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';
import { ICategory } from '@/definitions/category.interface';

type UseSearchBarProps = {
  categories?: ICategory[];
  initialParams?: { category?: string; search?: string };
}

export function useSearchBar({ categories, initialParams }: UseSearchBarProps) {
  const [category, setCategory] = useState(initialParams?.category || '');
  const [search, setSearch] = useState(initialParams?.search || '');
  const router = useRouter();

  const selectedCategory = useMemo(
    () => categories?.find((c) => c?.slug === category),
    [category, categories]
  );

  const onSearch = useCallback(() => {
    const hasSearch = Boolean(search?.trim());
    const hasCategory = Boolean(category) && category !== 'all';

    if (hasSearch && hasCategory) {
      router.push(`/${category}/${encodeURIComponent(search)}`);
      return;
    }
    if (hasSearch) {
      router.push(`/catalog/${encodeURIComponent(search)}`);
      return;
    }
    if (hasCategory) {
      router.push(`/${category}`);
      return;
    }
    router.push('/catalog');
  }, [search, category, router]);

  const clearSearch = useCallback(() => {
    setCategory('');
    setSearch('');
    router.push('/');
  }, [router]);

  return {
    category,
    setCategory,
    search,
    setSearch,
    clearSearch,
    selectedCategory,
    onSearch,
  };
}
