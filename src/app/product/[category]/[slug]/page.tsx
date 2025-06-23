import { getProductBySlug } from '@/lib/products';
import { notFound } from 'next/navigation';
import ProductDetails from './productDetails';

interface ProductPageProps {
  params: {
    category: string;
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} params={params} />;
}