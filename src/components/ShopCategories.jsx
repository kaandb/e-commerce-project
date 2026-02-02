import React from 'react';
import { Link } from 'react-router-dom';
import { shopCategories } from '../data';

const ShopCategories = () => {
  return (
    <section className="bg-[#FAFAFA] py-12 font-montserrat">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h3 className="text-[#252B42] text-2xl font-bold tracking-wide uppercase mb-4 md:mb-0">
            Shop
          </h3>
          <div className="flex items-center gap-4 text-sm font-bold">
            <Link to="/" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">Home</Link>
            <span className="text-[#BDBDBD]">{'>'}</span>
            <span className="text-[#737373]">Shop</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-4 md:pb-0">
          {shopCategories.map((category) => (
            <Link 
              to={`/shop/category/${category.id}`} 
              key={category.id}
              className="relative w-full md:w-auto aspect-square overflow-hidden group snap-center flex-shrink-0 min-w-[80%] md:min-w-0"
            >
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#252B42]/30 md:bg-transparent hover:bg-[#252B42]/40 transition-colors flex flex-col justify-center items-center text-white z-10">
                <h5 className="font-bold text-xl tracking-wide uppercase mb-2">
                  {category.title}
                </h5>
                <p className="font-bold text-sm tracking-wide">
                  {category.items} Items
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopCategories;