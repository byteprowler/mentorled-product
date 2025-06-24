interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

import Image from "next/image";

export default function ProductCard({ product }: { product: ProductProps }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <Image 
      src={product.image} 
      alt={product.name} 
      loading="lazy"
      width={500} 
      height={500} 
      className="w-full h-48 object-cover" 
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{product.name}</h2>
        <p className="text-blue-600 font-bold">${product.price}</p>
      </div>
    </div>
  );
}