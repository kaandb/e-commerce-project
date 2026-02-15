import React from 'react';
import { Loader2 } from 'lucide-react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const ShopProducts = () => {
  const { productList, fetchState } = useSelector((state) => state.product);

  return (
    <section className="bg-white pb-12 font-montserrat">
      <div className="container mx-auto px-4">
        
        {fetchState === 'FETCHING' && (
           <div className="flex justify-center py-20">
               <Loader2 size={48} className="animate-spin text-[#23A6F0]" />
           </div>
        )}

        {fetchState === 'FETCHED' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productList?.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        )}

        {fetchState === 'FETCHED' && productList?.length === 0 && (
             <div className="text-center py-20 text-gray-500 font-bold">
                 No products found.
             </div>
        )}
      </div>
    </section>
  );
};

export default ShopProducts;