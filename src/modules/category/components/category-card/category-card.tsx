import { ICategory } from '@/definitions/category.interface';
import React from "react";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { iconsMap } from '../../utils/category-utils';

type Props = {
  category: ICategory;
  className?: string;
};

export const CategoryCard = ({ category, className }: Props) => {
  const Icon = iconsMap[category?.icon];

  return (
    <Link href={`/category/${category?.slug}`} aria-label={category?.name}>
      <div
        className={cn(
          "relative flex flex-col gap-2 items-center min-h-[156px] min-w-[139px] rounded-xl overflow-hidden cursor-pointer group transition-colors duration-300 px-6 py-5",
          "bg-[#DADFF2] hover:bg-white",
          className
        )}
      >
        <div className="absolute top-0 right-0 w-[100px] h-[100px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-warning)] border-[6px] border-[#F2C57D] hidden group-hover:flex z-[1]" />

        <Icon
          className={cn(
            "h-14 transition-colors duration-300",
            "text-primary group-hover:text-warning"
          )}
        />

        <div
          className={cn(
            "text-sm font-medium text-center transition-colors duration-300 z-[2]",
            "group-hover:text-warning"
          )}
        >
          {category?.name}
        </div>
      </div>
    </Link>
  );
};
