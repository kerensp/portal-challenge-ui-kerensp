import banners from '@/constants/banners.json';
import { Banner } from '@/definitions/banner';
import { mockFetch } from '@/lib/utils';

export async function getBanners(): Promise<Banner[]> {
  const res = await mockFetch(banners);
  if (!res.ok) throw new Error("Failed to fetch banners");
  return res.json();
}

export async function getBannersByVariant(variant: Banner["variant"]): Promise<Banner[]> {
  const data = await getBanners();
  return data.filter((b) => b?.variant === variant);
}
