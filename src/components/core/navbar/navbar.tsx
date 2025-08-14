import * as React from 'react';
import { Suspense } from 'react';
import { ICategory } from '@/definitions/category.interface';
import Container from '@/components/ui/container';
import SearchBar from '../search-bar/search-bar';
import SkeletonSearchBar from '../search-bar/skeleton-search-bar';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User } from 'lucide-react';
import ProvinceSelect from '../province-select/province-select';
import { Skeleton } from '@/components/ui/skeleton';

type Props = {
  categories: ICategory[];
};

export default async function Navbar({ categories }: Props) {

  return (
    <>
      <Container className='bg-white'>
        <nav className="app-nav-bar ms-auto w-full">
          <div className="flex w-full items-center justify-between gap-0 pt-6 pb-5 sm:gap-4">
            <h1 className="flex w-full max-w-fit text-[26px] font-bold">
              Mi nombre
            </h1>

            <div className="flex w-full items-center justify-center gap-8">
              <Suspense fallback={<Skeleton className="h-[50px] border-none bg-[#F1F2F4] pl-[150px] pr-[60px]" />}>
                <ProvinceSelect />
              </Suspense>

              <Suspense fallback={<SkeletonSearchBar />}>
                <SearchBar categories={categories} />
              </Suspense>
            </div>

            <Avatar
              aria-label="user-avatar"
              role="button"
              className="sm:w-unset w-[39px] min-w-[39px] bg-slate-50 hover:cursor-pointer hover:bg-slate-100 [&>div]:!rounded-[39px]"
            >
              <AvatarFallback>
                <User className="text-primary" />
              </AvatarFallback>
            </Avatar>
          </div>

        </nav>
      </Container>
    </>
  );
}
