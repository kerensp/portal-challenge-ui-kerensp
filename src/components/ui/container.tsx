import React, { memo, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children?: ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn('mx-auto flex w-full flex-col gap-4 px-4 xl:px-52 py-3 xl:py-8', className)}>
      {children}
    </div>
  );
};

export default memo(Container);
