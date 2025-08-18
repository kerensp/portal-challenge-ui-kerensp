import Container from '@/components/ui/container'
import { getProducts } from '@/modules/common/services/product.service'
import ProductList from '@/modules/product/components/product-list/product-list'

export const revalidate = 60
export const dynamicParams = true

export const metadata = {
  title: "Catálogo de productos",
  description: `Explora todos los productos disponibles | ${process.env.NEXT_PUBLIC_STORE_NAME}`,
  openGraph: {
    title: "Catálogo de productos",
    description: `Explora todos los productos en ${process.env.NEXT_PUBLIC_STORE_NAME}`,
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/images/og-graph.png`],
  },
}

export default async function Page() {
  const products = await getProducts()

  return (
    <Container title='Catálogo de productos'>
      <ProductList products={products} />
    </Container>
  )
}
