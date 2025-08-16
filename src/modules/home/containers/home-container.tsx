import BannerGrid from '@/components/core/banner-grid/banner-grid';
import { BannerGridSkeleton } from '@/components/core/banner-grid/banner-grid-skeleton';
import BannerSection from '@/components/core/banner-section/banner-section';
import { getBannersByVariant } from '@/modules/products/services/get-banner-collection';
import { Suspense } from 'react';

const HomeContainer = async () => {
  const [heroBanners, stripBanners] = await Promise.all([
    getBannersByVariant("hero"),
    getBannersByVariant("grid"),
  ]);

  return (
    <>
      <BannerSection banners={heroBanners} />
      <Suspense fallback={<BannerGridSkeleton />}>
        <BannerGrid banners={stripBanners} />
      </Suspense>
    </>
  );
};

export default HomeContainer;
