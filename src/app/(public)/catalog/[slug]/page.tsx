import Container from '@/components/ui/container';
import { getProductBySlug } from '@/modules/common/services/product.service';
import ProductDetailContainer from '@/modules/product/container/product-detail-container';

export const revalidate = 60;
export const dynamicParams = true;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Producto no encontrado",
      description: "Este producto no existe",
    };
  }

  return {
    title: product.name,
    description: product.description || "Detalle de producto",
    openGraph: {
      title: product.name,
      description: product.description || "Detalle de producto",
      images: [
        {
          url: product.media?.url || "/images/og-graph.png",
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

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
