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
import BestSellersProducts from './best-sellers-products';
import ServicesSection from './services-section';
import RecentProducts from './recent-products';
import PromotionalBanner from '../components/promotional-banner/promotional-banner';
import FindAllSection from './find-all-section';

const HomeContainer = async () => {
  const [heroBanners, stripBanners, promoBanner, recentBanner, promotionalBanner] = await Promise.all([
    getBannersByVariant("hero"),
    getBannersByVariant("grid"),
    getBannersByVariant("promo"),
    getBannersByVariant("recent-products"),
    getBannersByVariant("with-products"),
  ]);

  const categories = await getCategories();
  const products = await getProductsByCategory();

  return (
    <>
      <BannerSection banners={heroBanners} />

      <Suspense fallback={<CategorySectionSkeleton />}>
        <CategorySection categories={categories?.data || []} />
      </Suspense>

      <div className="mx-auto flex flex-col gap-4 px-4 w-full md:max-w-[1447px] mb-8">
        <BannerCard
          banner={promoBanner[0]}
          withTransition={false}
        />
      </div>

      <RecommendedProducts products={products || []} />

      <Suspense fallback={<BannerGridSkeleton />}>
        <BannerGrid banners={stripBanners} />
      </Suspense>

      <BestSellersProducts products={products?.slice(5, 15)} />

      <ServicesSection className='mb-10 mt-16' />

      <RecentProducts products={products} banner={recentBanner[0]} />

      <PromotionalBanner banner={promotionalBanner[0]} />

      <FindAllSection />
    </>
  );
};

export default HomeContainer;
