import { getProductBySlug } from '@/lib/products';
import { notFound } from 'next/navigation';
import ProductDetails from './productDetails';


type Params = Promise<{ category: string, slug:string }>

export default  async function ProductPage({ params }:{params:Params}) {
  const { slug, category } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} params={{slug, category}} />;
}