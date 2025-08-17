import { MediaItem } from '@/definitions/common/media.interface';
import { IProduct } from './product.interface';

export type Banner = {
  id: string;
  title: string;
  desktop: MediaItem;
  alt?: string;
  products?: IProduct[];
  mobile: MediaItem;
  href?: string;
  position: 'main' | 'side-top' | 'side-bottom';
  align?: 'left' | 'center' | 'right';
  variant?: 'hero' | 'grid' | 'promo' | 'recent-products' | 'with-products';
};
