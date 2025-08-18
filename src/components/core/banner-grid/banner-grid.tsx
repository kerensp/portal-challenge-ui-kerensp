import { Banner } from "@/definitions/banner";
import BannerCard from '../banner-section/banner-card';
import Container from '@/components/ui/container';

type BannerGridProps = {
  banners: Banner[];
}

const BannerGrid = ({ banners }: BannerGridProps) => {
  return (
    <Container className='my-5'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {banners?.map((banner, index) => (
          <BannerCard
            key={banner?.id || index}
            banner={banner}
            className="h-full"
            priority={index === 0}
          />
        ))}
      </div>
    </Container >
  );
};

export default BannerGrid;
