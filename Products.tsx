import React from 'react';
import Image from 'next/image';

interface HeadphonesProductProps {
  className?: string;
}

const HeadphonesProduct: React.FC<HeadphonesProductProps> = ({ className = '' }) => {
  return (
    <section className={`bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Headphones illustration - using CSS to create a simple representation */}
                <div className="relative">
                  {/* Headband */}
                  <div className="w-48 h-48 border-8 border-gray-800 rounded-full border-b-transparent"></div>
                  
                  {/* Left ear cup */}
                  <div className="absolute -left-6 top-16 w-16 h-20 bg-gray-800 rounded-xl transform -rotate-12"></div>
                  
                  {/* Right ear cup */}
                  <div className="absolute -right-6 top-16 w-16 h-20 bg-gray-800 rounded-xl transform rotate-12"></div>
                  
                  {/* Inner padding for ear cups */}
                  <div className="absolute -left-5 top-[4.5rem] w-12 h-16 bg-gray-600 rounded-lg transform -rotate-12"></div>
                  <div className="absolute -right-5 top-[4.5rem] w-12 h-16 bg-gray-600 rounded-lg transform rotate-12"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Content */}
          <div className="space-y-6">
            {/* New Product Label */}
            <div className="uppercase tracking-[0.5em] text-orange-400 text-sm font-light">
              New Product
            </div>

            {/* Product Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              XX99 MARK II<br />
              HEADPHONES
            </h1>

            {/* Product Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
            </p>

            {/* CTA Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 uppercase tracking-wider transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              See Product
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadphonesProduct;