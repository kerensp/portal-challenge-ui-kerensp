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

type ProductCarouselProps = {
  products: IProduct[];
};

const ProductCarousel = ({ products }: ProductCarouselProps) => {
  return (
    <div className="relative">
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
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselDots className="mt-6" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
