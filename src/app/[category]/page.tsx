import { getProductsByCategory, getCategories } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import AudioGearAbout from '@/components/AudioGearAbout'
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const products = getProductsByCategory(category);

  if (products.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold uppercase tracking-wider">
            {category}
          </h1>
        </div>
      </section>
      <section className="py-20 lg:px-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="space-y-20">
            {products.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50 lg:px-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CategoryCard 
              category="headphones" 
              image="/image-headphones.png"
            />
            <CategoryCard 
              category="speakers" 
               image="/image-speakers.png"
            />
            <CategoryCard 
              category="earphones" 
             image="/image-earphones.png"
            />
          </div>
        </div>
      </section>
      <AudioGearAbout />
    </div>
  );
}
