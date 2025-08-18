import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IProduct } from '@/definitions/product.interface';
import ProductCardPrice from '@/components/core/product-card/product-card-price';
import QuantitySelector from '@/components/core/quantity-selector/quantity-selector';
import FavoriteButton from '@/components/core/favorite-button/favorite-button';
import { Badge } from '@/components/ui/badge';
import { Rating } from '@/components/core/rating/rating';

interface ProductDetailViewProps {
  product: IProduct
}

export default function ProductDetailContainer({ product }: ProductDetailViewProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-6">
        <span>Inicio</span> / <span>Productos</span> / <span className="text-foreground">{product?.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {/* Image Section */}
          <Card className="overflow-hidden border-gray-300 w-full max-w-md">
            <CardContent className="p-4">
              <div className="relative aspect-square bg-gray-50 rounded-lg">
                <Image
                  src={product?.media?.url || "/placeholder.svg"}
                  alt={product?.name}
                  fill
                  className="object-contain p-4"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </CardContent>
          </Card>

        {/* Product Info Section */}
        <div className="space-y-6">
          <div>
            <Badge variant='secondary' className='text-xs md:text-sm text-white bg-warning mb-3 rounded-2xl px-2'>
              {product?.category.replace("-", " ").toUpperCase()}
            </Badge>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{product.name}</h1>

            <Rating value={product?.rating} className='mb-6' />

            <ProductCardPrice price={product?.price} className='text-3xl md:text-4xl' />
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <QuantitySelector size='lg' className="w-32" />
              <Button className="flex-1 text-white rounded-lg" size="lg">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Agregar al Carrito
              </Button>
            </div>
            <FavoriteButton variant='button' className='w-full' />
          </div>

          {/* Description */}
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Descripción</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product?.description || "Este producto no tiene descripción disponible."}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}