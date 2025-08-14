'use client';

import { removeEmptyFields } from '@/modules/utils/remove-empty-fields';
import { useSearchParams } from 'next/navigation';

function useParseQueryParamsToProps(): any {
  const searchParams = useSearchParams();

  return removeEmptyFields(Object.fromEntries(searchParams.entries()));
}

export { useParseQueryParamsToProps };
