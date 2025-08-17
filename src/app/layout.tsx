import "./globals.css";
import Navbar from '@/components/core/navbar/navbar';
import NavbarWrapper from '@/components/core/navbar/navbar-wrapper';
import { ReactNode } from 'react';
import { Inter, Montserrat } from "next/font/google";
import { Metadata } from 'next';
import NavbarMenu from '@/components/core/navbar-menu/navbar-menu';
import { getCategories } from '@/modules/category/services/category.service';
import Footer from '@/components/core/footer/footer';

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["sans-serif"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const PUBLIC_APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(PUBLIC_APP_URL),
  title: {
    default: "Botifarma",
    template: "%s | Botifarma",
  },
  description:
    "Botifarma es tu tienda online de confianza en medicamentos, cuidado personal y productos de bienestar. Encuentra tratamientos, suplementos y artículos de salud con la mejor calidad y seguridad garantizada.",
  alternates: {
    canonical: new URL(PUBLIC_APP_URL),
    languages: {
      "es-ES": "/es-ES",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: PUBLIC_APP_URL,
    title: "Botifarma",
    description:
      "Compra medicamentos, suplementos y productos de cuidado personal en Botifarma, tu tienda online de salud y bienestar.",
    siteName: "Botifarma",
  },
  twitter: {
    card: "summary_large_image",
    site: "@botifarma",
    title: "Botifarma",
    description:
      "Tu farmacia online con medicamentos, suplementos y productos de salud de confianza.",
  },
};

export const dynamic = 'force-static';

export default async function RootLayout({ children }: { children: ReactNode }) {
  const { data } = await getCategories();

  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <NavbarWrapper>
          <Navbar categories={data || []} />
        </NavbarWrapper>
        <NavbarMenu className="hidden md:flex" />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
