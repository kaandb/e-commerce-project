import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const BestsellerProducts = () => {
  const { productList } = useSelector((state) => state.product);
  const bestsellers = (productList || []).slice(0, 8);

  if (bestsellers.length === 0) return null;

  return (
    <section className="bg-[#FAFAFA] font-montserrat py-12">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h3 className="text-[#252B42] text-2xl font-bold mb-2 uppercase tracking-wide">
            BESTSELLER PRODUCTS
          </h3>
          <div className="w-full h-[1px] bg-[#ECECEC] max-w-[200px] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default BestsellerProducts;