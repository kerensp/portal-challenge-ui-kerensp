import Container from '@/components/ui/container';
import { IProduct } from '@/definitions/product.interface';
import ProductCarousel from '@/modules/product/components/product-carousel/product-carousel';
import ProductList from '@/modules/product/components/product-list/product-list';

type Props = {
  products: IProduct[];
};

const BestSellersProducts = ({
  products,
}: Props) => {
  return (
    <Container title='Lo más vendido' className='px-0'>
      <ProductCarousel products={products} />
    </Container>
  );
};

export default BestSellersProducts;
