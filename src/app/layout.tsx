import "./globals.css"
import Footer from '@/components/core/footer/footer'
import { Header } from '@/components/core/header/header'
import { ReactNode } from 'react'

export const metadata = {
  title: "Challenge UI",
  description: "Portal UI Challenge",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
