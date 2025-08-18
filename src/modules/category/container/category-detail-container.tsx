import { Star } from "lucide-react";
import { IProduct } from '@/definitions/product.interface';
import { ICategory } from '@/definitions/category.interface';
import ProductCarousel from '@/modules/product/components/product-carousel/product-carousel';

interface Props {
  category: ICategory;
  products?: IProduct[];
}

export default function CategoryDetailContainer({ category, products }: Props) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <>
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground">
        <span>Inicio</span> / <span>Categorías</span> / <span className="text-foreground">{category?.name}</span>
      </nav>

      <section className="container mx-auto px-4 py-8">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">{category?.name}</h1>
          <p className="text-muted-foreground">{category?.description}</p>
        </header>

        {products?.length ? (
          <ProductCarousel products={products} />
        ) : (
          <p className="text-gray-500">No hay productos disponibles en esta categoría.</p>
        )}
      </section>
    </>
  )
}
