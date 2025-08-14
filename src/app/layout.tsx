import NavbarMenuWrapper from '@/components/core/navbar-menu/navbar-menu-wrapper'
import "./globals.css"
import Footer from '@/components/core/footer/footer'
import Navbar from '@/components/core/navbar/navbar'
import NavbarWrapper from '@/components/core/navbar/navbar-wrapper'
import { fetchCategories } from '@/modules/products/services/fetch-products'
import { ReactNode } from 'react'
import { Inter } from "next/font/google";
import NavbarMenu from '@/components/core/navbar-menu/navbar-menu'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "Challenge UI",
  description: "Portal UI Challenge",
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const { data } = await fetchCategories({});

  return (
    <html lang="es" className={inter.variable}>
      <body>
        <NavbarWrapper>
          <Navbar categories={data || []} />
          <NavbarMenuWrapper>
            <NavbarMenu />
          </NavbarMenuWrapper>
        </NavbarWrapper>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
