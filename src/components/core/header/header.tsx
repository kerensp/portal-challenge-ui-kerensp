"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Category } from '@/definitions/category.interface';
import { fetchCategories } from '@/modules/products/services/fetch-products';

export function Header() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  return (
    <header className="header flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
      {/* Primera fila: select provincia + select categoría */}
      <div className="flex gap-2">
        {/* Selector de provincia */}
        <select className="border rounded px-2 py-1">
          <option value="">Provincia</option>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Cordoba">Cordoba</option>
          <option value="Santa Fe">Santa Fe</option>
        </select>

        {/* Selector de categorías */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="">Todas las categorías</option>
          {categories.map((cat) => (
            <option key={cat?._id} value={cat?._id}>
              {cat?.name}
            </option>
          ))}
        </select>
      </div>

      {/* Segunda fila: buscador + links + avatar */}
      <div className="flex items-center gap-4">
        {/* Buscador */}
        <input
          type="search"
          placeholder="Buscar productos..."
          className="border rounded px-2 py-1"
        />

        {/* Links a páginas */}
        <nav className="flex gap-4">
          <Link href="/products" className="text-[var(--color-primary)] font-semibold hover:underline">
            Productos
          </Link>
          <Link href="/categories" className="text-[var(--color-primary)] font-semibold hover:underline">
            Categorías
          </Link>
        </nav>

        {/* Avatar de usuario */}
        <div className="w-8 h-8 rounded-full bg-gray-300" title="Usuario"></div>
      </div>
    </header>
  );
}
