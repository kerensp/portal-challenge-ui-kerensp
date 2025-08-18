"use client";
import ProductCard from "@/components/core/product-card/product-card";
import { IProduct } from "@/definitions/product.interface";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

type ProductCarouselProps = {
  products: IProduct[];
  noButtons?: boolean;
  className?: string;
};

const ProductCarousel = ({ products, noButtons = false, className }: ProductCarouselProps) => {
  return (
    <div className={cn("relative", className)}>
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product) => (
            <CarouselItem
              key={product?._id}
              className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {!noButtons &&
          <div className='hidden md:flex'>
            <CarouselPrevious />
            <CarouselNext />
          </div>
        }
        <CarouselDots className="mt-6" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
