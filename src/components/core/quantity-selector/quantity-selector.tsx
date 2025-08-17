"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Minus, PlusIcon } from "lucide-react";
import { useState } from "react";

type Props = {
  initial?: number;
  min?: number;
  max?: number;
  className?: string;
};

const QuantitySelector = ({
  className,
  initial = 1,
  min = 1,
  max,
}: Props) => {
  const [value, setValue] = useState(initial);

  const handleDecrement = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (value > min) {
      setValue(value - 1);
    }
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (max === undefined || value < max) {
      setValue(value + 1);
    }
  };

  return (
    <div
      className={cn(
        "flex items-center cursor-pointer bg-white h-9 rounded-md overflow-hidden hover:border-gray-700",
        className
      )}
    >
      <Button
        size="sm"
        variant="ghost"
        className="rounded-none text-muted-foreground hover:bg-muted hover:text-foreground"
        onClick={handleDecrement}
        disabled={value <= min}
      >
        <Minus className="h-3 w-3" />
        <span className="sr-only">Disminuir cantidad</span>
      </Button>

      <span className="flex h-full min-w-10 items-center justify-center text-sm font-medium border-x border-gray-300">
        {value}
      </span>

      <Button
        size="sm"
        variant="ghost"
        className="rounded-none text-muted-foreground hover:bg-muted hover:text-foreground"
        onClick={handleIncrement}
        disabled={max !== undefined && value >= max}
      >
        <PlusIcon className="h-3 w-3" />
        <span className="sr-only">Aumentar cantidad</span>
      </Button>
    </div>
  );
};

export default QuantitySelector;
