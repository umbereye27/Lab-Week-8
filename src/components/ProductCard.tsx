import Image from 'next/image';
import Link from 'next/link';
import  Button  from '@/components/Button';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  reverse?: boolean;
}

const ProductCard = ({ product, reverse = false }: ProductCardProps) => {
  return (
    <div className={`flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''} items-center gap-8 lg:gap-16`}>
      <div className="w-full lg:w-1/2">
        <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={'/image-earphones.png'}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
  <div className="w-full lg:w-1/2 text-center lg:text-left">
        {product.new && (
          <p className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-4">
            New Product
          </p>
        )}
        
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
          {product.name}
        </h2>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          {product.description}
        </p>
        
        <Link href={`/product/${product.category}/${product.slug}`}>
          <Button text='See Product' className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"/>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;