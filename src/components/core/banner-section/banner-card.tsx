import Image from "next/image";
import Link from "next/link";
import { Banner } from '@/definitions/banner';
import { cn } from '@/lib/utils';

type BannerCardProps = {
  banner: Banner;
  priority?: boolean;
  className?: string;
  withTransition?: boolean;
};

const BannerCard = ({
  banner,
  priority = false,
  className,
  withTransition = true,
}: BannerCardProps) => {
  return (
    <Link
      href={banner?.href || "/"}
      className={cn(
        "group relative block overflow-hidden rounded-lg shadow-md",
        withTransition && "hover:shadow-lg transition-all duration-300",
        className
      )}
      aria-label={`Ver ${banner?.title}`}
    >
      <div className="relative w-full h-full">
        {/* Desktop Image */}
        <Image
          src={banner?.desktop?.url}
          alt={banner?.title}
          width={banner?.desktop?.width}
          height={banner?.desktop?.height}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 959px"
          className={cn(
            "hidden md:block w-full h-full object-cover",
            withTransition && "group-hover:scale-105 transition-transform duration-300"
          )}
        />

        {/* Mobile Image */}
        <Image
          src={banner?.mobile?.url}
          alt={banner?.title}
          width={banner?.mobile?.width}
          height={banner?.mobile?.height}
          priority={priority}
          sizes="100vw"
          className={cn(
            "md:hidden w-full h-full object-cover",
            withTransition && "group-hover:scale-105 transition-transform duration-300"
          )}
        />
      </div>
    </Link>
  );
};

export default BannerCard;
