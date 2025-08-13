"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  starIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function IconButton({ children, starIcon, endIcon, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded bg-[var(--color-primary)] text-white hover:bg-[#1f3375] ${className || ""}`}
    >
      {starIcon && <span className="flex">{starIcon}</span>}
      <span>{children}</span>
      {endIcon && <span className="flex">{endIcon}</span>}
    </button>
  );
}
