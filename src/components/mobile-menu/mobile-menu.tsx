"use client"
import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MENU } from '@/constants/menu';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex items-center gap-2 md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button
            aria-label="Abrir menú"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="p-2"
          >
            <Menu />
          </button>
        </SheetTrigger>

        <SheetContent side="left" className="w-80 p-0 bg-white">
          {isOpen && <>
            <SheetHeader>
              <SheetTitle>Mi Nombre</SheetTitle>
            </SheetHeader>

            <nav className="p-4">
              <ul className="space-y-3">
                {MENU.map((item) => (
                  <li key={item?.title}>
                    <Link
                      aria-label='Navegar'
                      href={item?.path}
                      className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </>}
        </SheetContent>
      </Sheet>
    </div>
  )
}
