import BannerGrid from '@/components/core/banner-grid/banner-grid';
import { BannerGridSkeleton } from '@/components/core/banner-grid/banner-grid-skeleton';
import BannerSection from '@/components/core/banner-section/banner-section';
import { getBannersByVariant } from '@/modules/common/services/banner.service';
import { Suspense } from 'react';
import CategorySection from '../components/category-section/category-section';
import { getCategories } from '@/modules/category/services/category.service';

const HomeContainer = async () => {
  const [heroBanners, stripBanners] = await Promise.all([
    getBannersByVariant("hero"),
    getBannersByVariant("grid"),
  ]);

  const categories = await getCategories();

  return (
    <>
      <BannerSection banners={heroBanners} />
      <Suspense>
        <CategorySection categories={categories?.data || []} />
      </Suspense>
      <Suspense fallback={<BannerGridSkeleton />}>
        <BannerGrid banners={stripBanners} />
      </Suspense>
    </>
  );
};

export default HomeContainer;
