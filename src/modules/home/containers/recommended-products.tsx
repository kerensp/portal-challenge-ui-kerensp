import Container from '@/components/ui/container';
import { IProduct } from '@/definitions/product.interface';
import ProductList from '@/modules/product/components/product-list/product-list';

type Props = {
  products: IProduct[];
};

const RecommendedProducts = ({
  products,
}: Props) => {
  return (
    <Container title='Recomendado para ti'>
      <ProductList products={products?.slice(0, 10)} />
    </Container>
  );
};

export default RecommendedProducts;
