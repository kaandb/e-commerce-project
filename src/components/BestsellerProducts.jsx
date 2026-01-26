import React from 'react';
import { bestsellerProducts } from '../data';
import ProductCard from './ProductCard'; 

const BestsellerProducts = () => {
  return (
    <section className="bg-[#FAFAFA] font-montserrat py-20">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12 md:mb-20">
          <h4 className="text-[#737373] text-xl font-normal mb-2 tracking-wider">
            Featured Products
          </h4>
          <h3 className="text-[#252B42] text-2xl md:text-3xl font-bold mb-2 tracking-wide uppercase">
            BESTSELLER PRODUCTS
          </h3>
          <p className="text-[#737373] text-sm tracking-wide font-normal">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-y-[30px] md:gap-y-[80px] gap-x-[30px] max-w-[1050px] mx-auto">
          
          {bestsellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>
      </div>
    </section>
  );
};

export default BestsellerProducts;