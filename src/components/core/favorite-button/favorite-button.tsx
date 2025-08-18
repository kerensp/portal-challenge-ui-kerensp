"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HeartIcon } from "lucide-react";
import React, { useCallback, useState } from "react";

type FavoriteButtonProps = {
  className?: string;
  initialFavorite?: boolean;
  variant?: "icon" | "button";
};

const FavoriteButton = ({
  className,
  initialFavorite = false,
  variant = "icon",
}: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  const toggleFavorite = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsFavorite((prev) => !prev);
    },
    []
  );

  const heartClasses = cn(
    "h-5 w-5 transition-colors duration-200",
    isFavorite ? "fill-current text-primary" : "stroke-current text-primary"
  );

  if (variant === "button") {
    return (
      <Button
        onClick={toggleFavorite}
        aria-pressed={isFavorite}
        title={isFavorite ? "Quitar de lista de deseos" : "Añadir a lista de deseos"}
        variant="outline"
        className={cn(
          "flex items-center gap-2 rounded-lg border-primary !text-primary",
          className
        )}
      >
        <HeartIcon className={heartClasses} />
        {isFavorite ? "Quitar de lista de deseos" : "Añadir a lista de deseos"}
      </Button>
    );
  }

  return (
    <Button
      onClick={toggleFavorite}
      aria-pressed={isFavorite}
      title={isFavorite ? "Quitar de lista de deseos" : "Añadir a lista de deseos"}
      variant="ghost"
      size="icon"
      className={cn(
        "absolute top-2 right-2 md:top-3 md:right-3 w-8 h-8 md:w-10 md:h-10 p-1 rounded-full border bg-white z-10 transition-colors",
        isFavorite
          ? "text-orange-dark border-orange-dark"
          : "text-gray-400 border-gray-300 hover:text-orange-light",
        className
      )}
    >
      <HeartIcon
        className={cn(
          "h-6 w-6 transition-colors duration-200",
          isFavorite && "fill-current text-warning"
        )}
      />
    </Button>
  );
};

export default FavoriteButton;
