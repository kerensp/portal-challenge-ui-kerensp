"use client";
import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { cn } from "@/lib/utils";

type CarouselProps = React.HTMLAttributes<HTMLDivElement> & {
  opts?: Parameters<typeof useEmblaCarousel>[0];
};

const CarouselContext = React.createContext<{
  embla: UseEmblaCarouselType[1] | null;
  selectedIndex: number;
  scrollTo: (index: number) => void;
}>({
  embla: null,
  selectedIndex: 0,
  scrollTo: () => { },
});

export function Carousel({ opts, className, children, ...props }: CarouselProps) {
  const [emblaRef, embla] = useEmblaCarousel(opts);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollTo = (index: number) => embla?.scrollTo(index);

  React.useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelectedIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
  }, [embla]);

  return (
    <CarouselContext.Provider value={{ embla, selectedIndex, scrollTo }}>
      <div ref={emblaRef} className={cn("overflow-hidden", className)} {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex", className)} {...props} />
  );
}

export function CarouselItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("min-w-0 shrink-0 grow-0 basis-full", className)} {...props} />
  );
}

export function CarouselDots() {
  const { embla, selectedIndex, scrollTo } = React.useContext(CarouselContext);

  if (!embla) return null;
  const dots = embla.scrollSnapList();

  return (
    <div className="flex justify-center gap-2 mt-4">
      {dots.map((_, index) => {
        const isActive = selectedIndex === index;
        return (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              isActive ? "w-6 bg-primary" : "w-2 bg-gray-300"
            )}
          />
        );
      })}
    </div>
  );
}

