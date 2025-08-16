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
    <Container>
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent className="gap-x-4">
          {categories?.map((cat) => (
            <CarouselItem
              key={cat._id}
              className="basis-full sm:basis-1/2 md:basis-1/4 lg:basis-1/6 xl:basis-1/8"
            >
              <CategoryCard category={cat} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots />
      </Carousel>
    </Container>
  );
}
