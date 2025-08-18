import { cn } from "@/lib/utils";
import { StartIcon } from "../icons/start-icon";

interface RatingProps {
  label?: string;
  value?: number; // puede ser decimal: ej. 3.7
  className?: string;
  size?: "sm" | "md" | "lg";
  max?: number;
}

const ratingSize = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-7 h-7",
} as const;

export function Rating({
  label,
  value = 0,
  className,
  size = "md",
  max = 5,
}: RatingProps) {
  const fullStars = Math.floor(value);       
  const hasHalf = value % 1 >= 0.5;      
  const emptyStars = max - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && <span className="text-sm font-medium">{label}</span>}

      <div
        className="flex gap-1"
        role="img"
        aria-label={`Rating: ${value} of ${max}`}
      >
        {/* Estrellas llenas */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <StartIcon
            key={`full-${i}`}
            className={cn(ratingSize[size], "fill-[#FCC106]")}
          />
        ))}

        {/* Media estrella */}
        {hasHalf && (
          <div className="relative">
            <StartIcon
              className={cn(ratingSize[size], "fill-slate-300")}
            />
            <StartIcon
              className={cn(
                ratingSize[size],
                "fill-[#FCC106] absolute left-0 top-0 overflow-hidden"
              )}
              style={{ clipPath: "inset(0 50% 0 0)" }} 
            />
          </div>
        )}

        {/* Estrellas vacías */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <StartIcon
            key={`empty-${i}`}
            className={cn(ratingSize[size], "fill-slate-300")}
          />
        ))}
      </div>
    </div>
  );
}
