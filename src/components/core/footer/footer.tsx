import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, ShoppingCart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="flex-1 max-w-md">
            <h2 className="text-2xl font-bold mb-3">Suscríbete aquí para conocer más de nuestras ofertas</h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Recibe ofertas y promociones exclusivas como parte de nuestra comunidad. Al suscribirte, aceptas nuestros
              términos y condiciones.
            </p>
          </div>

          <div className="flex-1 max-w-md">
            <div className="flex gap-2 mb-4">
              <Input
                type="email"
                placeholder="Correo electrónico"
                className="flex-1 bg-white text-gray-900 placeholder:text-gray-500 border-0"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 font-medium">Enviar</Button>
            </div>
            <p className="text-xs text-blue-100">
              Al suscribirte aceptas nuestros{" "}
              <a href="#" className="text-orange-300 hover:text-orange-200 underline">
                términos y condiciones
              </a>{" "}
              y{" "}
              <a href="#" className="text-orange-300 hover:text-orange-200 underline">
                política de privacidad
              </a>
              .
            </p>
          </div>

          <div className="hidden lg:block">
            <ShoppingCart className="w-16 h-16 text-blue-200" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8 pt-6 border-t border-blue-500">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-orange-300" />
            <span className="text-sm font-medium">0 800 300-353</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-orange-300" />
            <span className="text-sm">info@example.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}