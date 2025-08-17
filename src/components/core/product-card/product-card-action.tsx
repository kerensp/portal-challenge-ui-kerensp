import { cn } from "@/lib/utils";
import QuantitySelector from '../quantity-selector/quantity-selector';
import { CarIcon } from '../icons/products/car-icon';

type Props = {
  className?: string;
};

const ProductCartAction = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-row gap-1 justify-between items-center mt-1",
        className
      )}
    >
      <QuantitySelector />
      <CarIcon className='text-primary h-7 w-7' />
    </div>
  );
};

export default ProductCartAction;
