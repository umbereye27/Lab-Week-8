// import Image from "next/image";
// import { ArrowRight } from "lucide-react";

// const CategoryCard = () => {
//   const categories = [
//     {
//       name: "Headphones",
//       image: "/image-headphones.png",
//     },
//     {
//       name: "Speakers",
//       image: "/image-speakers.png",
//     },
//     {
//       name: "Earphones",
//       image: "/image-earphones.png",
//     },
//   ];
 

//   return (
//     <div className="bg-gray-50 pt-24 px-4 sm:px-6 lg:px-20">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {categories.map((category) => (
//           <div
//             key={category.name}
//             className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
//           >
//             <div className="relative flex items-center justify-center h-40 bg-gray-100">
//               <Image
//                 src={category.image}
//                 alt={category.name}
//                 width={120}
//                 height={80}
//                 className="object-contain group-hover:scale-110 transition-transform duration-300"
//               />
//             </div>

//             <div className="text-center pb-6">
//               <h3 className="text-xl md:text-2xl font-bold tracking-[0.2em] text-gray-900 mb-4 uppercase">
//                 {category.name}
//               </h3>
//               <button className="group/btn text-gray-600 hover:text-orange-600 inline-flex items-center gap-2 text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:gap-3">
//                 Shop
//                 <ArrowRight
//                   size={16}
//                   className="group-hover/btn:translate-x-1 transition-transform duration-300"
//                 />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryCard;
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface CategoryCardProps {
  category: string;
  image: string;
}

const CategoryCard = ({ category, image }: CategoryCardProps) => {
  return (
    <Link href={`/${category}`}>
      <div className="bg-gray-100 rounded-lg p-6 text-center group hover:bg-gray-200 transition-colors">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <Image
            src={image}
            alt={category}
            fill
            className="object-cover rounded-full"
          />
        </div>
        
        <h3 className="text-lg font-semibold text-black mb-4 uppercase tracking-wider">
          {category}
        </h3>
        
        <div className="flex items-center justify-center text-gray-600 group-hover:text-orange-500 transition-colors">
          <span className="text-sm font-medium uppercase tracking-wider mr-2">Shop</span>
          <ChevronRight size={16} />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;