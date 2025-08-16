'use client';
import React, { memo, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useScrollBar } from '@/hooks/use-scroll-bar';

type Props = {
  children?: ReactNode;
};

const NavbarMenuWrapper = ({ children }: Props) => {
  const { isVisible, lastScrollY } = useScrollBar();

  return (
    <div
      className={cn(
        'hidden w-full bg-[var(--color-primary)] px-4 xl:px-52',
        isVisible && lastScrollY > 100 ? 'hidden' : 'hidden md:block'
      )}
    >
      <div className="mx-auto py-3.5">{children}</div>
    </div>
  );
};

export default memo(NavbarMenuWrapper);
