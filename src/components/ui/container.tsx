import React, { memo, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children?: ReactNode;
  className?: string;
  title?: string;
};

const Container = ({ children, className, title }: Props) => {
  return (
    <div className={cn('mx-auto flex w-full flex-col gap-4 px-4 xl:px-20 py-3 xl:py-8 mb-4', className)}>
      {title && <div className='text-xl font-semibold mb-1 text-[#2B3445]'>{title}</div>}
      {children}
    </div>
  );
};

export default memo(Container);
