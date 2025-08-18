import Container from '@/components/ui/container';
import Image from "next/image";
import Link from "next/link";

export default function FindAllSection() {
  return (
    <Container
      className="!pb-0 mx-auto md:px-0 flex flex-col-reverse flex-wrap items-center justify-center gap-4 md:gap-20 lg:flex-row"
      aria-labelledby="find-all-heading"
    >
      <div className="relative h-[250px] w-[355px] md:h-[355px] md:w-[612px] xl:h-[455px] xl:w-[782px]">
        <Image
          src="/images/products-car.webp"
          alt="Encuentra medicamentos, suplementos y más en un solo lugar"
          title="Find all in-one-place"
          fill
          priority={false}
          loading="lazy"
          sizes="(max-width: 325px) 50vw, (max-width: 780px) 66vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex-1 px-4">
        <h2
          id="find-all-heading"
          className="text-4xl md:text-[42px] font-bold text-primary max-w-[475px] leading-10 md:leading-12"
        >
          Encuentra todo en un solo lugar.
        </h2>

        <p className="text-[16px] font-normal max-w-[421px] my-2 text-[#676767]">
          Medicamentos, suplementos, vitaminas, analgésicos y antiinflamatorios,
          cuidado personal y mucho más.
        </p>

        <Link
          href="/catalog"
          aria-label="Explorar todos los productos disponibles"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 transition-all"
        >
          Explorar productos
        </Link>
      </div>
    </Container>
  );
}
