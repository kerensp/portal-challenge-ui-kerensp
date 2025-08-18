import { Suspense } from "react";
import BannerCard from "./banner-card";
import { Banner } from '@/definitions/banner';
import Container from '@/components/ui/container';
import { BannerSkeleton } from './banner-skeleton';

const BannerContent = ({ banners }: { banners: Banner[] }) => {
  const mainBanner = banners.find(b => b.position === "main");
  const sideBanners = banners.filter(b => b.position.startsWith("side-"));

  if (!mainBanner) return null;

  return (
    <section className="w-full mt-2" aria-label="Ofertas y promociones">
      <div className="flex flex-col lg:flex-row gap-2.5 lg:gap-6">
        <div className="flex-1 lg:flex-[2]">
          <BannerCard banner={mainBanner} priority />
        </div>

        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-2.5 flex-1">
          {sideBanners.map((banner, index) => (
            <BannerCard key={banner.id ?? index} banner={banner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function BannerSection({ banners }: { banners: Banner[] }) {
  return (
    <Container>
      <Suspense fallback={<BannerSkeleton />}>
        <BannerContent banners={banners} />
      </Suspense>
    </Container>
  )
}
