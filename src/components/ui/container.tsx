import React, { memo, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children?: ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn('mx-auto flex w-full flex-col gap-4 px-48', className)}>
      {children}
    </div>
  );
};

export default memo(Container);
