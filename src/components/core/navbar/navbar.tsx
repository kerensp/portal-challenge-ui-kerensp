import { ICategory } from '@/definitions/category.interface';
import Container from '@/components/ui/container';
import SearchBar from '../search-bar/search-bar';
import { MapPin } from 'lucide-react';
import ProvinceSelect from '../province-select/province-select';
import ProfileMenu from '../profile-menu/profile-menu';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';
import SkeletonSearchBar from '../search-bar/skeleton-search-bar';
import { Suspense } from 'react';
import MobileMenu from '@/components/mobile-menu/mobile-menu';

type Props = {
  categories: ICategory[];
};

const Navbar = ({ categories }: Props) => {
  return (
    <Container className="bg-white">
      <nav className="w-full mx-auto">
        <div className="flex items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-2">
            <MobileMenu />
            <Link href="/">
              <h2 className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
                Mi Nombre
              </h2>
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center gap-8">
            <Suspense fallback={<Skeleton className="h-[50px] border-none bg-[#F1F2F4] pl-[150px] pr-[60px]" />}>
              <ProvinceSelect />
            </Suspense>

            <Suspense fallback={<SkeletonSearchBar />}>
              <SearchBar categories={categories} />
            </Suspense>
          </div>

          <div className="flex-shrink-0 flex items-center gap-2">
            <MapPin className="md:hidden w-6 h-6 text-[var(--color-primary)]" />
            <ProfileMenu />
          </div>
        </div>

        <div className="md:hidden mt-3">
          <SearchBar mobile />
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
