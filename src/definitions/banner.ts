import { MediaItem } from '@/definitions/common/media.interface';

export type Banner = {
  id: string;
  title: string;
  desktop: MediaItem;
  alt?: string;
  mobile: MediaItem;
  href?: string;
  position: 'main' | 'side-top' | 'side-bottom';
  align?: 'left' | 'center' | 'right';
  variant?: 'hero' | 'grid' | 'promo';
};
