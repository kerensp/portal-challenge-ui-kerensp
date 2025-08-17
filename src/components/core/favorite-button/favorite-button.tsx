"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HeartIcon } from "lucide-react";
import React, { useState } from "react";

type FavoriteButtonProps = {
  className?: string;
};

const FavoriteButton = ({ className }: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const newValue = !isFavorite;
    setIsFavorite(newValue);
  };

  return (
    <Button
      onClick={toggleFavorite}
      variant="ghost"
      size="icon"
      className={cn(
        "absolute cursor-pointer border border-[#BFC9D7] w-8 h-8 md:w-10 md:h-10 top-2 right-2 md:top-3 md:right-3 p-1 rounded-full bg-white z-10 transition-colors",
        className,
        isFavorite
          ? "text-orange-dark border-orange-dark"
          : "text-gray-400 hover:text-orange-light"
      )}
    >
      <HeartIcon
        className={cn(
          "transition-colors duration-200 h-6 w-6",
          isFavorite && "fill-current text-warning"
        )}
      />
    </Button>
  );
};

export default FavoriteButton;
