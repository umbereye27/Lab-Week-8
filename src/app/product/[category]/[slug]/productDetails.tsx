'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Plus, Minus } from 'lucide-react';
import Button  from '@/components/Button';
import CategoryCard from '@/components/CategoryCard';
import { Product, products } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import AudioGearAbout from '@/components/AudioGearAbout';

interface ProductDetailsClientProps {
  product: Product;
  params: {
    category: string;
    slug: string;
  };
}

export default function ProductDetails({ product, params }: ProductDetailsClientProps) {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: product.id,
          name: product.name,
          shortName: product.shortName,
          price: product.price,
          cartImage: product.cartImage,
        },
      });
    }
    dispatch({ type: 'OPEN_CART' });
  };

  const otherProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-6">
          <Link 
            href={`/${product.category}`}
            className="inline-flex items-center text-gray-600 hover:text-orange-500 transition-colors"
          >
            <ChevronLeft size={20} className="mr-2" />
            Go Back
          </Link>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={'/image-headphones.png'}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              {product.new && (
                <p className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-4">
                  New Product
                </p>
              )}
              
              <h1 className="text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
                {product.name}
              </h1>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                {product.description}
              </p>
              
              <p className="text-2xl font-bold text-black mb-8">
                ${product.price.toLocaleString()}
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3 text-black bg-gray-100 rounded px-4 py-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  
                  <span className="text-sm font-medium w-8 text-center">
                    {quantity}
                  </span>
                  
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <Button  text ={'Add to Cart'}
                  onClick={handleAddToCart}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
                >
                  
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6 uppercase">Features</h2>
              <div className="text-gray-400 leading-relaxed whitespace-pre-line">
                {product.features}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-black mb-6 uppercase">In the Box</h2>
              <ul className="space-y-2">
                {product.includedItems.map((item, index) => (
                  <li key={index} className="flex">
                    <span className="text-orange-500 font-semibold w-8 text-sm">
                      {item.quantity}x
                    </span>
                    <span className="text-gray-600 text-sm">{item.item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-2 gap-4 mb-20">
            <div className="space-y-4">
              <div className="relative h-95 w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={'/image-best-gear.jpeg'}
                  alt={`${product.name} gallery 1`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square h-90 w-full bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={'/image-earphones-yx1.jpeg'}
                  alt={`${product.name} gallery 2`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={'/image-hero.jpeg'}
                alt={`${product.name} gallery 3`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* You May Also Like */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-12 uppercase">You may also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherProducts.map((otherProduct) => (
                <div key={otherProduct.id} className="text-center">
                  <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-6">
                    <Image
                      src={'/image-xx59-headphones.jpg'}
                      alt={otherProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    {otherProduct.shortName}
                  </h3>
                  <Link href={`/product/${otherProduct.category}/${otherProduct.slug}`}  className="bg-amber-600 px-8 py-4">
                   See Product
                    
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CategoryCard 
              category="headphones" 
              image="/image-earphones-yx 1.jpeg"
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