import "./globals.css"
import Footer from '@/components/core/footer/footer'
import { Header } from '@/components/core/header/header'

export const metadata = {
  title: "Challenge UI",
  description: "Portal UI Challenge",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
