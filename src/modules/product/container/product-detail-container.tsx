"use client"
import Image from "next/image"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { IProduct } from '@/definitions/product.interface'
import ProductCardPrice from '@/components/core/product-card/product-card-price'
import { Separator } from '@radix-ui/react-select'
import QuantitySelector from '@/components/core/quantity-selector/quantity-selector'
import FavoriteButton from '@/components/core/favorite-button/favorite-button'

interface ProductDetailViewProps {
  product: IProduct
}

export default function ProductDetailContainer({ product }: ProductDetailViewProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <>
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground">
        <span>Inicio</span> / <span>Productos</span> / <span className="text-foreground">{product?.name}</span>
      </nav>

      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <Card className="overflow-hidden border-gray-300 p-0">
            <CardContent className="p-0">
              <div className="aspect-square relative bg-card">
                <Image
                  src={product?.media?.url || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div>
              {product.category.replace("-", " ").toUpperCase()}
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex">{renderStars(product.rating)}</div>
                <span className="text-sm text-muted-foreground">({product.rating}/5)</span>
                <span className="text-sm text-muted-foreground">• 127 reseñas</span>
              </div>

              <ProductCardPrice price={product?.price} />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Descripción</h3>
              <p className="text-muted-foreground leading-relaxed">{product?.description}</p>
            </div>

            <Separator />

            <div className="flex gap-4">
              <QuantitySelector />
              <Button className="flex-1 text-white" size="lg">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Agregar al Carrito
              </Button>
            </div>
            <FavoriteButton variant='button' className='w-full text-white' />
          </div>
        </div>
      </div>
    </>
  )
}
