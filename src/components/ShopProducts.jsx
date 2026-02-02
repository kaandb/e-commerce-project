import React, { useState } from 'react';
import { LayoutGrid, List, ChevronDown } from 'lucide-react';
import { shopProducts } from '../data';
import ProductCard from './ProductCard';

const ShopProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handleFirst = () => {
    handlePageChange(1);
  };

  const FilterBar = () => (
    <div className="flex flex-col md:flex-row justify-between items-center py-6 mb-12 gap-6 md:gap-0">
      <p className="text-[#737373] text-sm font-bold tracking-wide">
        Showing all {shopProducts.length} results
      </p>

      <div className="flex items-center gap-4">
        <p className="text-[#737373] text-sm font-bold tracking-wide">Views:</p>
        <button className="p-2 border border-[#E8E8E8] rounded text-[#252B42] hover:bg-gray-100 transition-colors">
          <LayoutGrid size={16} />
        </button>
        <button className="p-2 border border-[#E8E8E8] rounded text-[#737373] hover:bg-gray-100 transition-colors">
          <List size={16} />
        </button>
      </div>

      <div className="flex gap-4">
        <button className="px-6 py-3 border border-[#DDDDDD] rounded bg-[#F9F9F9] text-[#737373] text-sm font-bold tracking-wide flex items-center gap-2 hover:bg-gray-200 transition-colors">
          Popularity <ChevronDown size={14} />
        </button>
        <button className="px-6 py-3 bg-[#23A6F0] hover:bg-blue-600 text-white rounded text-sm font-bold tracking-wide transition-colors">
          Filter
        </button>
      </div>
    </div>
  );

  const Pagination = () => (
    <div className="flex justify-center items-center border border-[#E8E8E8] rounded w-fit mx-auto mt-12 bg-white shadow-sm select-none">
      <button 
        onClick={handleFirst}
        disabled={currentPage === 1}
        className={`px-6 py-4 font-bold text-sm tracking-wide border-r border-[#E8E8E8] transition-colors
          ${currentPage === 1 
            ? 'bg-[#F3F3F3] text-[#BDBDBD] cursor-not-allowed' 
            : 'text-[#23A6F0] hover:bg-gray-50'}`}
      >
        First
      </button>

      {[1, 2, 3].map(page => (
        <button 
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-5 py-4 font-bold text-sm tracking-wide border-r border-[#E8E8E8] transition-colors
            ${currentPage === page 
              ? 'bg-[#23A6F0] text-white' 
              : 'text-[#23A6F0] hover:bg-gray-50'}`}
        >
          {page}
        </button>
      ))}

      <button 
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-6 py-4 font-bold text-sm tracking-wide transition-colors
          ${currentPage === totalPages 
            ? 'bg-[#F3F3F3] text-[#BDBDBD] cursor-not-allowed' 
            : 'text-[#23A6F0] hover:bg-gray-50'}`}
      >
        Next
      </button>
    </div>
  );

  return (
    <section className="bg-white py-12 font-montserrat">
      <div className="container mx-auto px-4">
        <FilterBar />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {shopProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default ShopProducts;