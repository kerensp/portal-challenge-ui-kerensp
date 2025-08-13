export interface MediaItem {
  height: number;
  sizes: string[];
  thumb: string;
  url: string;
  width: number;
}

export interface ImageData {
  thumb: string;
  image: string;
}

export interface ImageAdsSizes {
  mobile?: {
    height?: number;
    width?: number;
  };
  desktop?: {
    height?: number;
    width?: number;
  };
}
