import { Link } from "lucide-react";
import Image from "next/image";

const ProductShowcase = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-16">
      <div className="relative bg-gradient-to-r from-gray-200 to-black rounded-2xl overflow-hidden min-h-[320px]">
        <div className="absolute inset-0">
          <Image
            src="/image-speaker-zx7 (1).jpeg"
            alt="ZX7 Speaker Background"
            fill
            className="object-cover object-center opacity-80"
          />
        </div>
        <div className="relative z-10 flex items-center h-full px-6 py-12 sm:px-12 lg:px-16">
          <div className="space-y-6 text-center sm:text-left w-full">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-wider">
              ZX7 SPEAKER
            </h2>
          <Link href="/speakers">
              <button className="border-2 border-gray-900 text-gray-900 px-6 sm:px-8 py-3 text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-all duration-300">
              SEE PRODUCT
            </button>
          </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative bg-gradient-to-br from-gray-800 to-black rounded-2xl overflow-hidden min-h-[280px] flex items-center justify-center">
          <div className="relative">
            <Image
              src="/image-earphones-yx1 (1).jpeg"
              alt="YX1 Earphones"
              width={260}
              height={260}
              className="object-contain drop-shadow-2xl mx-auto"
            />
            <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl scale-150"></div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center px-6 py-10 sm:px-12 lg:p-16 text-center lg:text-left">
          <div className="space-y-6 w-full">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-wider">
              YX1 EARPHONES
            </h2>
            <Link href="/earphones">
              <button className="border-2 border-gray-900 text-gray-900 px-6 sm:px-8 py-3 text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-all duration-300">
              SEE PRODUCT
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
