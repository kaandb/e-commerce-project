import React from 'react';
import { Link } from 'react-router-dom';
import { ImageOff } from 'lucide-react';

const ProductCard = ({ product }) => {
  const imageUrl = product.images && product.images.length > 0 
    ? product.images[0].url 
    : null;

  return (
    <div className="flex flex-col w-full bg-white group shadow-sm hover:shadow-lg transition-shadow duration-300">
      
      <div className="w-full aspect-[3/4] overflow-hidden relative bg-gray-100">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                <ImageOff size={32} className="mb-2 opacity-50"/>
                <span className="text-xs">No Image</span>
              </div>
            )}
        </Link>
      </div>

      <div className="flex flex-col items-center p-6 pb-8 gap-3 text-center">
        <h5 className="text-[#252B42] font-bold text-base tracking-wide line-clamp-1">
          {product.name}
        </h5>
        
        <p className="text-[#737373] text-sm font-bold tracking-wide line-clamp-2 h-10 overflow-hidden">
          {product.description}
        </p>
        
        <div className="flex gap-2 px-1 py-1">
          <span className="text-[#23856D] font-bold text-base">
            ${product.price}
          </span>
        </div>

        <div className="flex gap-1.5 mt-1">
          {['#23A6F0', '#23856D', '#E77C40', '#252B42'].map((color, index) => (
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