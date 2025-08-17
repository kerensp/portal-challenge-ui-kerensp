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
          "relative flex flex-col gap-2 items-center min-h-[156px] w-[137px] rounded-xl overflow-hidden cursor-pointer group transition-colors duration-300 px-4 pt-6 pb-3",
          "bg-[#DADFF2] hover:bg-white",
          className
        )}
      >
        <div className="absolute top-0 right-0 w-[90px] h-[90px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-warning)] border-[6px] border-[#F2C57D] hidden group-hover:flex z-[1]" />

        <Icon
          className={cn(
            "h-14 transition-colors duration-300",
            "text-primary group-hover:text-warning"
          )}
        />

        <div
          className={cn(
            "text-xs mt-2 font-normal text-center transition-colors duration-300 z-[2]",
            "group-hover:text-warning"
          )}
        >
          {category?.name}
        </div>
      </div>
    </Link>
  );
};
