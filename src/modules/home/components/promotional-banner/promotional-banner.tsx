"use client";

import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from "@/components/ui/carousel";
import { Banner } from "@/definitions/banner";
import BannerCard from "@/components/core/banner-section/banner-card";
import Container from "@/components/ui/container";

export default function PromotionalBanner({ banner }: { banner: Banner }) {
  if (!banner) return null;

  return (
    <Container>
      <section
        className="relative container mx-auto py-6"
        aria-label={`Promoción: ${banner?.title}`}
      >
        <BannerCard banner={banner} priority />

        {banner?.products && (
          <div
            className="w-full mt-4 lg:mt-0  lg:absolute lg:top-1/2 lg:right-4  lg:-translate-y-1/2 lg:w-1/2"
            aria-label="Productos en promoción"
          >
            <Carousel className="w-full">
              <CarouselContent className="flex gap-1">
                {banner.products.map((p) => (
                  <CarouselItem
                    key={p?._id}
                    className="
                      basis-1/4 
                      md:basis-1/4
                      lg:basis-1/6
                      flex justify-center
                    "
                  >
                    <Link
                      href={`/catalog/${p?.slug}`}
                      aria-label={`Ver producto ${p?.name}`}
                    >
                      <Image
                        src={p?.media?.url || "/images/no-image.webp"}
                        alt={p?.name}
                        width={p?.media?.width || 100}
                        height={p?.media?.height || 100}
                        loading="lazy"
                        className="rounded-lg object-contain"
                      />
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselDots className="mt-2 md:hidden" />
            </Carousel>
          </div>
        )}
      </section>
    </Container>
  );
}
