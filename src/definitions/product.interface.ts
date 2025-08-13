import { Category } from './category.interface';

export interface Rating {
  rate: number;
  star1?: number;
  star2?: number;
  star3?: number;
  star4?: number;
  star5?: number;
  votes: number;
}

export interface Product {
  id: string;
  nombre: string;
  imagen: string;
  precio: number;
  rating: number;
  category: string;
}
