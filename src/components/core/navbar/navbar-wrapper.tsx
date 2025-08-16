"use client";
import { memo, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useScrollBar } from "@/hooks/use-scroll-bar";

type Props = {
  children?: ReactNode;
};

function NavbarWrapper({ children }: Props) {
  const { isVisible, lastScrollY } = useScrollBar();

  return (
    <header
      className={cn(
        "left-0 top-0 z-20 w-full transition-transform duration-300 ease-in-out will-change-transform bg-white",
        !isVisible ? "-translate-y-full" : "translate-y-0",
        isVisible && lastScrollY > 100 ? "fixed shadow-lg" : "relative"
      )}
    >
      {children}
    </header>
  );
}

export default memo(NavbarWrapper);
