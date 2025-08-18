"use client";

import Container from "@/components/ui/container";
import { ICategory } from "@/definitions/category.interface";
import { CategoryCard } from "@/modules/category/components/category-card/category-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";

type Props = {
  categories: ICategory[];
};

export default function CategorySection({ categories }: Props) {
  return (
    <Container title='Obtén todo, justo aquí' className='my-2'>
      <Carousel
        className='w-full'
        opts={{
          align: 'center'
        }}
      >
        <CarouselContent className="items-stretch justify-stretch">
          {categories?.map((category, idx) => (
            <CarouselItem
              key={idx}
              className="basis-1/2 sm:basis-1/4 md:basis-1/6 lg:basis-1/7 2xl:!basis-1/9"
            >
              <CategoryCard key={category?._id || idx} category={category} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots className='md:hidden' />
      </Carousel>
    </Container>
  );
}
