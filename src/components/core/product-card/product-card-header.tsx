import { CardHeader } from '@/components/ui/card'
import { IProduct } from '@/definitions/product.interface';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import FavoriteButton from '../favorite-button/favorite-button';
import { ProductCardBadge } from './product-card-badget';

type Props = {
  product: IProduct;
  className?: string;
  imgClassName?: string;
};

const ProductCardHeader = ({ product, imgClassName, className }: Props) => {
  return (
    <CardHeader className={cn("relative h-[180px] md:h-[240px] p-0 overflow-hidden group", className)}>
      <div className="absolute inset-0">
        <Image
          src={product?.media?.url || "/images/placeholder.webp"}
          alt={product?.name}
          fill
          className={cn(
            "object-cover object-center transition-transform duration-500 ease-out",
            "group-hover:scale-110 group-hover:rotate-1", // zoom + tilt
            imgClassName,
          )}
          sizes="(max-width: 768px) 100vw, 33vw"
          placeholder="blur"
          blurDataURL="/images/placeholder.webp"
          priority={false}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

      <FavoriteButton />

      {product?.isNew && <ProductCardBadge color='warning'>Nuevo</ProductCardBadge>}
      {product?.discount && <ProductCardBadge color='warning'>{product?.discount}%</ProductCardBadge>}
    </CardHeader>
  )
};

export default ProductCardHeader;
