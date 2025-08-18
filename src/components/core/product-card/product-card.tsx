"use client";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ProductCartAction from "./product-card-action";
import { IProduct } from "@/definitions/product.interface";
import { Rating } from "../rating/rating";
import ProductCardHeader from './product-card-header';
import ProductCardPrice from './product-card-price';

type Props = {
  product: IProduct;
  className?: string;
  imageClassName?: string;
};

const ProductCard = ({ product, imageClassName, className }: Props) => {
  return (
    <Link href={`/catalog/${product.slug}`} prefetch={true} aria-label='Ver producto'>
      <Card
        className={cn(
          "relative overflow-hidden rounded-[15px] bg-[rgba(255, 255, 255, 0.50)] shadow-[0_20px_30px_0px_rgba(43,52,69,0.04)] backdrop-blur-[8.5px] transition hover:shadow-lg border-none",
          className
        )}
      >
        <ProductCardHeader product={product} imgClassName={imageClassName} />

        <CardContent className="bg-[#f4f7fc] py-3 px-3 md:py-4 md:px-4 flex flex-col gap-2">
          <ProductCardPrice price={product?.price} />

          <div className="line-clamp-1 text-xs md:text-sm font-normal text-[#2B3445]">
            {product?.name}
          </div>

          <Rating
            value={product?.rating}
            className="mt-2"
            size="sm"
          />

          <div className="mt-2">
            <ProductCartAction />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
