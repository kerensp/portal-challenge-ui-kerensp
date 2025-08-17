import { cn } from "@/lib/utils";

type PriceSize = "xs" | "sm" | "md" | "lg" | "xl";

type Props = {
  price: number;
  className?: string;
  size?: PriceSize;
};

export default function ProductCardPrice({
  price,
  className,
  size = "md",
}: Props) {
  const [dollars, cents] = price.toFixed(2).split(".");

  const sizeClasses: Record<
    PriceSize,
    { price: string; cents: string; centsOffset: string }
  > = {
    xs: { price: "text-base", cents: "text-xs", centsOffset: "-top-0.5" },
    sm: { price: "text-lg", cents: "text-sm", centsOffset: "-top-0.5" },
    md: { price: "text-2xl", cents: "text-base", centsOffset: "-top-1" },
    lg: { price: "text-3xl", cents: "text-lg", centsOffset: "-top-1" },
    xl: { price: "text-4xl", cents: "text-xl", centsOffset: "-top-1.5" },
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
          "ml-1 font-light relative",
          sizeClasses[size].cents,
        )}
      >
        {cents}
      </span>
    </p>
  );
}
