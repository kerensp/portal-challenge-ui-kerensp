'use client';
import { useMemo } from 'react';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { LayoutGridIcon } from 'lucide-react';
import { Search } from 'lucide-react';
import { ICategory } from '@/definitions/category.interface';
import { useSearchBar } from '@/hooks/useSearchBar';

interface Props {
  categories: ICategory[];
  initialParams?: { category?: string; search?: string };
}

export default function SearchBar({ categories, initialParams }: Props) {
  const { category, setCategory, search, setSearch, selectedCategory, onSearch } =
    useSearchBar({ categories, initialParams });

  return (
    <div className="flex w-full max-w-2xl">
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="rounded-l-md w-[140px] !bg-[var(--color-primary)] text-white">
          <LayoutGridIcon className='w-5 h-5' />
          {selectedCategory?.name || 'Categoría'}
        </SelectTrigger>
        <SelectContent>
          {categories.map((cat) => (
            <SelectItem key={cat?._id} value={cat?.slug}>
              {cat?.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="relative flex-1">
        <Input
          type="search"
          placeholder="Busca productos, categorías o marcas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSearch()}
          className="w-full pl-12 rounded-r-md"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-6 w-6 text-[var(--color-primary)]" />
      </div>
    </div>
  );
}
