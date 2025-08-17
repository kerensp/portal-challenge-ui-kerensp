import React, { memo } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import { cn } from '@/lib/utils';
import { MENU } from '@/constants/menu';

const NavbarMenu = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "md:px-4 xl:px-20 md:py-3.5 flex justify-start gap-5 xl:gap-7 overflow-y-hidden overflow-x-scroll scrollbar-none bg-[var(--color-primary)]",
        styles.scrollbarNone,
        className
      )}
    >
      {MENU.map((item, idx) => (
        <Link
          key={`${item.path}-${idx}`}
          href={item.path}
          className="text-[16px] font-light text-white hover:font-medium"
          target={item.target}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default memo(NavbarMenu);
