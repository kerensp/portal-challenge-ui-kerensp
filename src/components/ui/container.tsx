import React, { memo, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children?: ReactNode;
  className?: string;
  title?: string;
};

const Container = ({ children, className, title }: Props) => {
  return (
    <div className={cn('w-full max-w-[1447px] mx-auto flex flex-col gap-4 px-4 py-3 xl:py-5', className)}>
      {title && <div className='text-[16px] md:text-xl font-medium mb-1 text-[#2B3445]'>{title}</div>}
      {children}
    </div>
  );
};

export default memo(Container);
