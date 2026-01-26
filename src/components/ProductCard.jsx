import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col w-full md:w-[238px] bg-white group shadow-sm hover:shadow-lg transition-shadow duration-300">
      
      <div className="w-full h-auto md:h-[427px] overflow-hidden relative">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-auto md:h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
        </Link>
      </div>

      <div className="flex flex-col items-center p-6 pb-8 gap-3">
        <h5 className="text-[#252B42] font-bold text-base tracking-wide">
          {product.title}
        </h5>
        <p className="text-[#737373] text-sm font-bold tracking-wide">
          {product.department}
        </p>
        
        <div className="flex gap-2 px-1 py-1">
          <span className="text-[#BDBDBD] font-bold text-base line-through">
            {product.originalPrice}
          </span>
          <span className="text-[#23856D] font-bold text-base">
            {product.salePrice}
          </span>
        </div>

        <div className="flex gap-1.5 mt-1">
          {product.colors.map((color, index) => (
            <div 
              key={index} 
              className="w-4 h-4 rounded-full cursor-pointer hover:scale-110 transition-transform" 
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;