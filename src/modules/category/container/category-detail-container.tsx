import { IProduct } from '@/definitions/product.interface';
import { ICategory } from '@/definitions/category.interface';
import ProductCarousel from '@/modules/product/components/product-carousel/product-carousel';
import { iconsMap } from '../utils/category-utils';

interface Props {
  category: ICategory;
  products?: IProduct[];
}

export default function CategoryDetailContainer({ category, products }: Props) {
  const Icon = iconsMap[category?.icon];

  return (
    <>
      <div className='flex items-center gap-2'>
        <Icon className='w-7 h-7' />
        <h1 className="text-2xl font-bold mb-1.5">{category?.name}</h1>
      </div>
      {category?.description && <p className="text-muted-foreground bg-blue-100 px-4 py-2 rounded-lg">{category?.description}</p>}

      <h1 className='text-sm md:text-xl font-semibold my-2'>Productos relacionados</h1>
      {products?.length ? (
        <ProductCarousel products={products} noButtons />
      ) : (
        <p className="text-gray-500">No hay productos disponibles en esta categoría.</p>
      )}
    </>
  )
}
