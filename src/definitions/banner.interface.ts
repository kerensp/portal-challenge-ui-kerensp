import { MediaItem } from '@/definitions/common/media.interface';

export interface Banner {
  _id?: string;
  imagenDesktop: MediaItem;
  imagenMobile: MediaItem;
  texto: string;
}
