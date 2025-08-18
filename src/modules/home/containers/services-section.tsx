import { CreditCardIcon } from '@/components/core/icons/services/credit-card-icon';
import { MapPinHouseIcon } from '@/components/core/icons/services/map-pin-house-icon';
import { TruckIcon } from '@/components/core/icons/services/truck-icon';
import { cn } from '@/lib/utils';
import Image from "next/image";
import { ReactNode } from 'react';

type Service = {
  icon: ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <CreditCardIcon className="w-9 h-9" />,
    title: "Paga desde donde estés",
    description: "Paga con tarjeta de débito o crédito desde cualquier parte del mundo donde te encuentres.",
  },
  {
    icon: <TruckIcon className="w-9 h-9" />,
    title: "Envío gratis desde $50 USD",
    description: "Con solo estar registrado, tienes envíos gratis para un grupo de productos.",
  },
  {
    icon: <MapPinHouseIcon className="w-9 h-9" />,
    title: "Entregas en todo el país",
    description: "LLevamos tu pedido seguro y con garantía hasta la puerta de tu casa.",
  },
];

const ServicesSection = ({ className }: { className?: string }) => {
  return (
    <section className={cn("relative bg-primary my-6 py-12 px-4 md:px-8 text-white", className)}>
      <Image
        src="/images/pill-vector.webp"
        alt=""
        width={50}
        height={60}
        className="absolute -top-6 left-0 md:-left-4 lg:left-30 rotate-z-90"
      />
      <Image
        src="/images/pill-vector.webp"
        alt=""
        width={50}
        height={60}
        className="absolute -top-5 right--0 md:right-40"
      />
      <Image
        src="/images/pill-vector.webp"
        alt=""
        width={80}
        height={80}
        className="absolute -left-4 md:-bottom-7 md:left-60"
      />

      <div className="mx-auto max-w-[1447px] flex flex-col md:flex-row items-start justify-between gap-6 z-10">
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug max-w-[400px]">
          Lo que Necesitas, <br /> Cuando lo Necesitas.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 z-10">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="w-[276px] rounded-xl p-6 shadow-md bg-white"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-white bg-warning">
                {item?.icon}
              </div>
              <h3 className="mt-4 text-xl font-bold text-primary">
                {item?.title}
              </h3>
              <p className="mt-2 text-sm font-normal text-[#122348] opacity-[0.8]">{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
