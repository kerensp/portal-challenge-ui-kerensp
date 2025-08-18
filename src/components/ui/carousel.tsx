"use client";
import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselProps = React.HTMLAttributes<HTMLDivElement> & {
  opts?: Parameters<typeof useEmblaCarousel>[0];
};

type CarouselContextType = {
  embla: UseEmblaCarouselType[1] | null;
  selectedIndex: number;
  scrollTo: (index: number) => void;
  scrollPrev: () => void;
  scrollNext: () => void;
};

const CarouselContext = React.createContext<CarouselContextType | undefined>(
  undefined
);

export function Carousel({ opts, className, children, ...props }: CarouselProps) {
  const [emblaRef, embla] = useEmblaCarousel(opts);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollTo = (index: number) => embla?.scrollTo(index);
  const scrollPrev = () => embla?.scrollPrev();
  const scrollNext = () => embla?.scrollNext();

  React.useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelectedIndex(embla.selectedScrollSnap());

    embla.on("select", onSelect);
    onSelect();

    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
    <CarouselContext.Provider
      value={{ embla, selectedIndex, scrollTo, scrollPrev, scrollNext }}
    >
      <div className={cn("relative w-full", className)} {...props}>
        <div ref={emblaRef} className="overflow-hidden">
          {children}
        </div>
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex", className)} {...props} />;
}

export function CarouselItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("min-w-0 shrink-0 grow-0 basis-full", className)} {...props} />
  );
}

export function CarouselDots({ className }: { className?: string }) {
  const context = React.useContext(CarouselContext);
  if (!context) return null;

  const { embla, selectedIndex, scrollTo } = context;
  if (!embla) return null;

  const dots = embla.scrollSnapList();

  return (
    <div className={cn("flex justify-center gap-2 mt-4", className)}>
      {dots?.map((_, index) => {
        const isActive = selectedIndex === index;
        return (
          <button
            key={index}
            aria-label={`Ir al slide ${index + 1}`}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-4 rounded-full transition-all duration-300",
              isActive ? "w-10 bg-warning" : "w-4 bg-gray-300"
            )}
          />
        );
      })}
    </div>
  );
}

export function CarouselPrevious({ className }: { className?: string }) {
  const context = React.useContext(CarouselContext);
  if (!context) return null;

  const { scrollPrev } = context;

  return (
    <button
      type="button"
      onClick={scrollPrev}
      aria-label="Slide anterior"
      className={cn(
        "absolute -left-4 top-[45%] -translate-y-1/2 rounded-full shadow-md h-[47px] w-[47px] text-white bg-[var(--color-primary)] transition cursor-pointer flex items-center justify-center hover:bg-gray-300 hover:text-black",
        className
      )}
    >
      <ChevronLeft className="h-5 w-5" />
    </button>
  );
}

export function CarouselNext({ className }: { className?: string }) {
  const context = React.useContext(CarouselContext);
  if (!context) return null;

  const { scrollNext } = context;

  return (
    <button
      type="button"
      onClick={scrollNext}
      aria-label="Siguiente slide"
      className={cn(
        "absolute -right-4 top-[45%] h-[47px] w-[47px] -translate-y-1/2 rounded-full shadow-md p-2 text-white bg-[var(--color-primary)] transition cursor-pointer flex items-center justify-center hover:bg-gray-300 hover:text-black",
        className
      )}
    >
      <ChevronRight className="h-5 w-5" />
    </button>
  );
}
