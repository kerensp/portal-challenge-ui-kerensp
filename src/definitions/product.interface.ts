export interface Rating {
  rate: number;
  star1?: number;
  star2?: number;
  star3?: number;
  star4?: number;
  star5?: number;
  votes: number;
}

export interface IProduct {
  _id?: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  category: string;
}
