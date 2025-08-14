import React, { memo } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import { cn } from '@/lib/utils';
import { MENU } from '@/constants/menu';

const NavbarMenu = async () => {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-start gap-7 overflow-y-hidden overflow-x-scroll scrollbar-none',
        styles.scrollbarNone
      )}
    >
      {MENU?.map((item, idx) => (
        <Link
          key={item.path + idx}
          href={item.path}
          className="text-[16px] text font-light text-white hover:font-medium"
          target={item.target}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default memo(NavbarMenu);
