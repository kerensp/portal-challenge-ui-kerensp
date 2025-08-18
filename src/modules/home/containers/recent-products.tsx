import BannerCard from '@/components/core/banner-section/banner-card';
import ProductCard from '@/components/core/product-card/product-card';
import Container from '@/components/ui/container';
import { Banner } from '@/definitions/banner';
import { IProduct } from '@/definitions/product.interface';
import ProductCarousel from '@/modules/product/components/product-carousel/product-carousel';

type Props = {
  products: IProduct[];
  banner: Banner;
};

const RecentProducts = ({
  products,
  banner,
}: Props) => {
  return (
    <Container title='De lo más reciente'>
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        <BannerCard
          banner={banner}
          className="lg:col-span-2 sm:min-h-[320px]"
        />
        {products?.slice(0, 8).map((product) => (
          <ProductCard key={product._id} product={product} className='hidden sm:flex' />
        ))}
        <ProductCarousel products={products?.slice(10, 15)} noButtons className='mt-4 sm:hidden' />
      </div>
    </Container>
  );
};

export default RecentProducts;
