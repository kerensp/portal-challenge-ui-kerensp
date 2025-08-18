import ProductCard from "@/components/core/product-card/product-card";
import { IProduct } from '@/definitions/product.interface';

const ProductList = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-2 gap-4">
      {products?.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
