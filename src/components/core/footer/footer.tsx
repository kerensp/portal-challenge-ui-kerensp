import React from "react";
import FooterSubscribeInput from "./footer-subscribe-input";
import { MailIcon, PhoneIcon } from "lucide-react";
import Container from '@/components/ui/container';

const Footer = () => {
  return (
    <div className="bg-primary">
      <Container className="flex flex-col gap-8 md:gap-16 px-4 py-7 md:!py-12">
        <section className="flex flex-col md:flex-row justify-between gap-4 md:gap-1">
          <div className="flex flex-col gap-2 max-w-[420px]">
            <p className="text-xl font-bold text-white max-w-[347px]">
              Subscríbete aquí para conocer más de nuestras ofertas
            </p>
            <p className="text-[13px] font-light text-white max-w-[423px]">
              Regístrese ahora para recibir las últimas actualizaciones sobre promociones y cupones. ¡No te preocupes, no enviamos spam!
            </p>
          </div>

          <div className="flex flex-col gap-2 max-w-[420px]">
            <FooterSubscribeInput />
            <p className="pl-2 md:pl-4 text-sm font-normal text-white font-inter">
              Al suscribirte aceptas nuestros <a
                href="/terminos-y-condiciones"
                className="text-warning underline hover:text-white transition-colors"
                aria-label="Leer términos y condiciones"
              >
                Términos y Condiciones
              </a>{" "}
              y{" "}
              <a
                href="/politica-de-privacidad"
                className="text-warning underline hover:text-white transition-colors"
                aria-label="Leer política de privacidad"
              >
                Política de privacidad
              </a>
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="flex flex-row gap-4 items-start">
            <PhoneIcon className="size-5 md:size-7 text-warning" />
            <div>
              <p className="text-xs font-light text-white">Lunes a viernes: 08 a. m. a 9 p. m.</p>
              <p className="text-sm md:text-xl font-bold leading-[30px] text-white">
                0 800 300-353
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start">
            <MailIcon className="size-5 md:size-7 text-warning" />
            <div>
              <p className="text-xs font-light text-white">¿Necesitas ayuda con tu pedido?</p>
              <p className="text-sm font-semibold leading-[30px] text-white">
                info@example.com
              </p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Footer;
