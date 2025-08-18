
import Container from '@/components/ui/container';
import CategoryDetailContainer from '@/modules/category/container/category-detail-container';
import { getCategories, getCategoryBySlug } from '@/modules/category/services/category.service';
import { getProductsByCategory } from '@/modules/common/services/product.service';
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories?.data?.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const category = await getCategoryBySlug(params?.slug);

  if (!category) {
    return { title: "Categoría no encontrada" };
  }

  return {
    title: `${category.name} | Mi Tienda`,
    description: category.description,
    openGraph: {
      title: category.name,
      description: category.description,
      url: `${process.env.NEXT_PUBLIC_APP_URL}/category/${category.slug}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-graph.png`,
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const category = await getCategoryBySlug(params?.slug);

  if (!category) return notFound();

  const products = await getProductsByCategory({ category: category.slug });

  return (
    <Container>
      <CategoryDetailContainer category={category} products={products} />
    </Container>
  );
}
