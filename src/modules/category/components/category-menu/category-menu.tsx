"use client";
import { memo } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { LayoutGridIcon } from "lucide-react";
import { ICategory } from "@/definitions/category.interface";
import { cn } from "@/lib/utils";
import { iconsMap } from '../../utils/category-utils';

type CategoryMenuProps = {
  category: string;
  setCategory: (val: string) => void;
  categories: ICategory[];
  className?: string;
};

const CategoryMenu = ({ category, setCategory, categories, className }: CategoryMenuProps) => {
  return (
    <Select value={category} onValueChange={setCategory}>
      <SelectTrigger
        aria-label="Seleccionar categoría"
        className={cn(
          "btn flex items-center !gap-1 px-2 min-w-[162px]",
          "!bg-[var(--color-primary)] text-white hover:opacity-90",
          className
        )}
      >
        {!category && <LayoutGridIcon className="w-4 h-4 mr-2 inline-block text-muted-foreground" />}
        <SelectValue placeholder="Categoría" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">
          <LayoutGridIcon className="w-4 h-4 mr-2 inline-block text-muted-foreground" />
          Categorías
        </SelectItem>
        {categories.map((cat) => {
          const Icon = iconsMap[cat?.icon] || LayoutGridIcon;
          return (
            <SelectItem key={cat._id} value={cat.slug}>
              <Icon className="w-4 h-4 mr-2 inline-block text-muted-foreground" />
              {cat.name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default memo(CategoryMenu);