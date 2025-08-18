import Container from '@/components/ui/container';
import ProductDetailContainer from '@/modules/product/container/product-detail-container';
import { getProductBySlug } from '@/modules/common/services/product.service';

export const revalidate = 60;
export const dynamicParams = true;

export const metadata = {
  title: "Detalle de producto | Farmacia Online",
  description: "Explora nuestra farmacia online con productos disponibles.",
  openGraph: {
    title: "Detalle de producto | Farmacia Online",
    description: "Explora nuestra farmacia online con productos disponibles.",
    images: [
      {
        url: "/images/og-graph.png",
        width: 1200,
        height: 630,
        alt: "Detalle de producto",
      },
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return (
      <div className="container mx-auto py-12">
        <h1 className="text-2xl font-bold">Producto no encontrado</h1>
        <p className="text-gray-600 mt-2">
          Lo sentimos, el producto que buscas no existe o fue eliminado.
        </p>
      </div>
    );
  }

  return (
    <Container>
      <ProductDetailContainer product={product} />
    </Container>
  );
}
