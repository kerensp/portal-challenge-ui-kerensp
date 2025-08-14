'use client';
import { memo, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useScrollBar } from '@/hooks/use-scroll-bar';

type Props = {
  children?: ReactNode;
};

function NavbarWrapper({ children }: Props) {
  const { isVisible, lastScrollY } = useScrollBar();

  return (
    <div className="min-h-[100px] w-full md:min-h-[156px]">
      <div
        className={cn(
          'left-0 top-0 z-10 w-full bg-navBar transition-transform duration-300 ease-in-out will-change-transform',
          !isVisible ? '-translate-y-full' : 'translate-y-0',
          isVisible && lastScrollY > 100 ? 'fixed shadow-lg' : ''
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default memo(NavbarWrapper);
