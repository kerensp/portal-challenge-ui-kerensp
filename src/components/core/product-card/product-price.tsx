import { cn } from "@/lib/utils";

type PriceSize = "xs" | "sm" | "md" | "lg" | "xl";

type Props = {
  price: number;
  className?: string;
  size?: PriceSize;
};

export default function ProductPrice({
  price,
  className,
  size = "md",
}: Props) {
  const [dollars, cents] = price.toFixed(2).split(".");

  const sizeClasses: Record<PriceSize, { price: string; cents: string }> = {
    xs: { price: "text-base", cents: "text-[10px]" },
    sm: { price: "text-lg", cents: "text-xs" },
    md: { price: "text-2xl", cents: "text-sm" },
    lg: { price: "text-3xl", cents: "text-lg" },
    xl: { price: "text-4xl", cents: "text-xl" },
  };

  return (
    <p
      className={cn(
        "font-semibold leading-none flex items-start",
        sizeClasses[size].price,
        className
      )}
      aria-label={`Price: $${dollars}.${cents}`}
    >
      ${dollars}
      <span
        className={cn(
          "ml-0.5 font-light leading-none relative -top-0.5",
          sizeClasses[size].cents
        )}
      >
        {cents}
      </span>
    </p>
  );
}
