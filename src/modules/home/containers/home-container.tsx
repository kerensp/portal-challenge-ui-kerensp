import BannerGrid from '@/components/core/banner-grid/banner-grid';
import { BannerGridSkeleton } from '@/components/core/banner-grid/banner-grid-skeleton';
import BannerSection from '@/components/core/banner-section/banner-section';
import { getBannersByVariant } from '@/modules/common/services/banner.service';
import { Suspense } from 'react';
import CategorySection from '../components/category-section/category-section';
import { getCategories } from '@/modules/category/services/category.service';
import { getProductsByCategory } from '@/modules/common/services/product.service';
import RecommendedProducts from './recommended-products';
import CategorySectionSkeleton from '../components/category-section/category-skeleton';
import BannerCard from '@/components/core/banner-section/banner-card';

const HomeContainer = async () => {
  const [heroBanners, stripBanners, promoBanner] = await Promise.all([
    getBannersByVariant("hero"),
    getBannersByVariant("grid"),
    getBannersByVariant("promo"),
  ]);

  const categories = await getCategories();
  const products = await getProductsByCategory();

  return (
    <>
      <BannerSection banners={heroBanners} />

      <Suspense fallback={<CategorySectionSkeleton />}>
        <CategorySection categories={categories?.data || []} />
      </Suspense>
      
      <div className="mx-auto flex w-full flex-col gap-4 px-4 xl:px-20 mb-4">
        <BannerCard
          banner={promoBanner[0]}
          withTransition={false}
        />
      </div>

      <RecommendedProducts products={products || []} />

      <Suspense fallback={<BannerGridSkeleton />}>
        <BannerGrid banners={stripBanners} />
      </Suspense>
    </>
  );
};

export default HomeContainer;
