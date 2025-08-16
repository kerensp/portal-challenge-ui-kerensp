'use client';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { LayoutGridIcon, Search, X } from 'lucide-react';
import { ICategory } from '@/definitions/category.interface';
import { useSearchBar } from '@/hooks/useSearchBar';

type Props = {
  mobile?: boolean;
  categories?: ICategory[];
  initialParams?: { category?: string; search?: string };
}

export default function SearchBar({ categories, initialParams, mobile }: Props) {
  const { category, setCategory, search, setSearch, clearSearch, onSearch } =
    useSearchBar({ categories, initialParams });

  return (
    <div className="flex w-full xl:min-w-2xl">
      {!mobile &&
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger
            aria-label="Seleccionar categoría"
            className="btn rounded-l-md w-[140px] !bg-[var(--color-primary)] text-white"
          >
            <LayoutGridIcon className='w-5 h-5' />
            <SelectValue placeholder={'Categoría'} />
          </SelectTrigger>
          <SelectContent>
            {categories?.map((cat) => (
              <SelectItem key={cat?._id} value={cat?.slug}>
                {cat?.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      }

      <div className="relative flex-1">
        <Input
          type="text"
          placeholder="Busca productos, categorías o marcas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSearch()}
          className="w-full pl-12 pr-10 rounded-r-md"
        />

        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--color-primary)]" />

        {search && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Limpiar búsqueda"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
