import { cn } from "@/lib/utils";

type ProductBadgeProps = {
  children: React.ReactNode;
  color: "warning" | "success" | "danger" | "info";
  className?: string;
};

const colorMap: Record<ProductBadgeProps["color"], string> = {
  warning: "bg-warning text-white",
  success: "bg-green-500 text-white",
  danger: "bg-red-500 text-white",
  info: "bg-blue-500 text-white",
};

export function ProductCardBadge({
  children,
  color = "warning",
  className,
}: ProductBadgeProps) {
  return (
    <div
      className={cn(
        "absolute rounded-[15px_0_20px_0] px-5 py-1.5 text-sm font-semibold",
        colorMap[color],
        className
      )}
    >
      {children}
    </div>
  );
}
