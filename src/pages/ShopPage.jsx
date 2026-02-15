import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, LayoutGrid, List } from 'lucide-react';
import ShopProducts from '../components/ShopProducts';
import BrandLogos from '../components/BrandLogos';
import { fetchProducts } from '../store/actions/productActions';

const ShopPage = () => {
  const dispatch = useDispatch();
  const { categories, total } = useSelector((state) => state.product);
  const { categoryId } = useParams();
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [filterText, setFilterText] = useState("");
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 25;

  useEffect(() => {
    const offset = (activePage - 1) * itemsPerPage;
    
    dispatch(fetchProducts(categoryId, filter, sort, itemsPerPage, offset));
    
    window.scrollTo(0, 0);
  }, [dispatch, categoryId, filter, sort, activePage]); 

  useEffect(() => {
    setActivePage(1);
  }, [categoryId]);

  const handleFilterSubmit = (e) => {
      e.preventDefault();
      setFilter(filterText);
      setActivePage(1);
  };

  const totalPages = total ? Math.ceil(total / itemsPerPage) : 0;
  
  const getPageNumbers = () => {
      const pages = [];
      if (totalPages <= 5) {
          for (let i = 1; i <= totalPages; i++) pages.push(i);
      } else {
          if(activePage <= 3) return [1,2,3,4,5];
          if(activePage >= totalPages - 2) return [totalPages-4, totalPages-3, totalPages-2, totalPages-1, totalPages];
          return [activePage-1, activePage, activePage+1];
      }
      return pages;
  };
  const pageNumbers = getPageNumbers();

  const topCategories = [...(categories || [])]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="w-full font-montserrat">
       <div className="bg-[#FAFAFA] py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#252B42]">Shop</h2>
          <div className="flex items-center gap-2 text-sm font-bold">
             <Link to="/" className="text-[#252B42]">Home</Link>
             <ChevronRight size={16} className="text-[#BDBDBD]" />
             <span className="text-[#BDBDBD]">Shop</span>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] pb-12">
         <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {topCategories.map(cat => (
                <Link 
                  key={cat.id} 
                  to={`/shop/${cat.code.startsWith('k:') ? 'kadin' : 'erkek'}/${cat.title.toLowerCase()}/${cat.id}`}
                  className="relative overflow-hidden group aspect-square md:aspect-[4/5] shadow-sm hover:shadow-lg transition-shadow"
                >
                   <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-black/25 flex flex-col justify-center items-center text-white">
                      <h3 className="font-bold text-lg uppercase mb-2">{cat.title}</h3>
                      <span className="text-sm">Rating: {cat.rating}</span>
                   </div>
                </Link>
              ))}
           </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
         <div className="text-[#737373] font-bold text-sm">
             Showing all {total} results
         </div>
         
         <div className="flex flex-col sm:flex-row items-center gap-4">
             <div className="flex gap-2">
                 <select onChange={(e) => setSort(e.target.value)} value={sort} className="border p-2 rounded text-sm text-[#737373]">
                     <option value="">Sort By</option>
                     <option value="price:asc">Price: Low to High</option>
                     <option value="price:desc">Price: High to Low</option>
                     <option value="rating:asc">Rating: Low to High</option>
                     <option value="rating:desc">Rating: High to Low</option>
                 </select>
                 <form onSubmit={handleFilterSubmit} className="flex gap-2">
                    <input type="text" placeholder="Filter..." value={filterText} onChange={(e) => setFilterText(e.target.value)} className="border p-2 rounded text-sm w-32" />
                    <button type="submit" className="bg-[#23A6F0] text-white px-4 py-2 rounded text-sm font-bold">Filter</button>
                 </form>
             </div>
         </div>
      </div>

      <ShopProducts />

      {totalPages > 1 && (
        <div className="flex justify-center items-center py-8">
            <div className="flex border border-[#BDBDBD] rounded shadow-sm bg-white">
                <button 
                    onClick={() => setActivePage(1)}
                    disabled={activePage === 1}
                    className="px-4 py-2 text-[#23A6F0] font-bold border-r hover:bg-gray-100 disabled:text-gray-300"
                >
                    First
                </button>
                <div className="flex">
                    {pageNumbers.map((p, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActivePage(p)}
                            className={`px-4 py-2 font-bold border-r ${activePage === p ? 'bg-[#23A6F0] text-white' : 'text-[#23A6F0] hover:bg-gray-100'}`}
                        >
                            {p}
                        </button>
                    ))}
                </div>
                <button 
                    onClick={() => setActivePage(totalPages)}
                    disabled={activePage === totalPages}
                    className="px-4 py-2 text-[#23A6F0] font-bold hover:bg-gray-100 disabled:text-gray-300"
                >
                    Last
                </button>
            </div>
        </div>
      )}
      
      <BrandLogos />
    </div>
  );
};

export default ShopPage;