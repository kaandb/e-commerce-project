import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { singleProduct, productDescription, bestsellerProducts } from '../data';
import BrandLogos from '../components/BrandLogos';
import ProductCard from '../components/ProductCard';

const ProductDetailPage = () => {
  return (
    <div className="bg-[#FAFAFA] font-montserrat pb-12">
      
      <div className="bg-[#FAFAFA] py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 text-sm font-bold">
            <Link to="/" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">Home</Link>
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            <Link to="/shop" className="text-[#BDBDBD] hover:text-[#23A6F0] transition-colors">Shop</Link>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-24">
            <div className="w-full md:w-1/2">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="w-full h-[300px] md:h-[450px] rounded-md overflow-hidden shadow-sm"
              >
                {singleProduct.images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full relative">
                            <img src={img} alt={`Product ${index}`} className="w-full h-full object-cover object-top" />
                        </div>
                    </SwiperSlide>
                ))}
              </Swiper>
              
              <div className="flex gap-4 mt-4">
                 {singleProduct.images.map((img, index) => (
                     <div key={index} className="w-[100px] h-[75px] overflow-hidden rounded opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
                         <img src={img} alt="thumbnail" className="w-full h-full object-cover object-top" />
                     </div>
                 ))}
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col pt-2">
                <h4 className="text-[#252B42] text-xl font-normal mb-4">
                    {singleProduct.title}
                </h4>

                <div className="flex items-center gap-2 mb-5">
                    <div className="flex text-[#F3CD03]">
                        {[...Array(4)].map((_, i) => <Star key={i} size={20} fill="#F3CD03" />)}
                        <Star size={20} fill="#F3CD03" stroke="none" className="opacity-50" />
                    </div>
                    <span className="text-[#737373] text-sm font-bold">
                        {singleProduct.reviews} Reviews
                    </span>
                </div>

                <h3 className="text-[#252B42] text-2xl font-bold mb-2">
                    {singleProduct.price}
                </h3>
                <div className="flex items-center gap-2 mb-8">
                    <span className="text-[#737373] text-sm font-bold">Availability :</span>
                    <span className="text-[#23A6F0] text-sm font-bold">
                        {singleProduct.availability}
                    </span>
                </div>

                <p className="text-[#858585] text-sm font-normal leading-relaxed mb-8 border-b border-[#BDBDBD] pb-6">
                    {singleProduct.description}
                </p>

                <div className="flex gap-2.5 mb-10">
                    {singleProduct.colors.map((color, idx) => (
                        <div key={idx} className="w-[30px] h-[30px] rounded-full cursor-pointer hover:scale-110 transition-transform" style={{backgroundColor: color}}></div>
                    ))}
                </div>

                <div className="flex items-center gap-2.5">
                    <button className="bg-[#23A6F0] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-[5px] text-sm transition-colors">
                        Select Options
                    </button>
                    <div className="p-3 border border-[#E8E8E8] rounded-full bg-white hover:bg-gray-50 cursor-pointer transition-colors group">
                        <Heart size={20} className="text-[#252B42] group-hover:text-red-500" />
                    </div>
                    <div className="p-3 border border-[#E8E8E8] rounded-full bg-white hover:bg-gray-50 cursor-pointer transition-colors group">
                        <ShoppingCart size={20} className="text-[#252B42] group-hover:text-[#23A6F0]" />
                    </div>
                    <div className="p-3 border border-[#E8E8E8] rounded-full bg-white hover:bg-gray-50 cursor-pointer transition-colors group">
                        <Eye size={20} className="text-[#252B42] group-hover:text-[#23A6F0]" />
                    </div>
                </div>

            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 md:py-24">
          <div className="container mx-auto px-4">
              
              <div className="flex justify-center gap-6 md:gap-12 border-b border-[#ECECEC] mb-8 md:mb-12 pb-6 overflow-x-auto">
                  <button className="text-[#737373] hover:text-[#23A6F0] font-bold text-sm whitespace-nowrap">Description</button>
                  <button className="text-[#737373] hover:text-[#23A6F0] font-bold text-sm whitespace-nowrap">Additional Information</button>
                  <button className="text-[#737373] hover:text-[#23A6F0] font-bold text-sm whitespace-nowrap">Reviews (0)</button>
              </div>


              <div className="flex flex-col md:flex-row gap-8">
                  
                  <div className="w-full md:w-1/3">
                      <div className="bg-[#F0F0F0] rounded-md overflow-hidden h-[250px] md:h-[372px] shadow-sm">
                          <img 
                            src={productDescription.image} 
                            alt="Description" 
                            className="w-full h-full object-cover object-center md:object-top" 
                          />
                      </div>
                  </div>

                  <div className="w-full md:w-1/3 flex flex-col gap-6">
                      <h3 className="text-[#252B42] text-2xl font-bold">the quick fox jumps over</h3>
                      <p className="text-[#737373] text-sm leading-relaxed">
                          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                      </p>
                      <p className="text-[#737373] text-sm leading-relaxed">
                          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                      </p>
                      <p className="text-[#737373] text-sm leading-relaxed">
                          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                      </p>
                  </div>

                  <div className="w-full md:w-1/3 flex flex-col gap-6">
                      <h3 className="text-[#252B42] text-2xl font-bold">{productDescription.listTitle}</h3>
                      <div className="flex flex-col gap-4">
                          {productDescription.listItems.map((item, index) => (
                              <div key={index} className="flex items-center gap-4 text-[#737373] text-sm font-bold">
                                  <ChevronRight size={16} />
                                  <span>{item}</span>
                              </div>
                          ))}
                      </div>
                      <h3 className="text-[#252B42] text-2xl font-bold mt-4">{productDescription.listTitle}</h3>
                       <div className="flex flex-col gap-4">
                          {productDescription.listItems.map((item, index) => (
                              <div key={index} className="flex items-center gap-4 text-[#737373] text-sm font-bold">
                                  <ChevronRight size={16} />
                                  <span>{item}</span>
                              </div>
                          ))}
                      </div>
                  </div>

              </div>
          </div>
      </div>

      <div className="bg-[#FAFAFA] py-12">
          <div className="container mx-auto px-4">
              <h3 className="text-[#252B42] text-2xl font-bold uppercase mb-8 border-b border-[#ECECEC] pb-4">
                  BESTSELLER PRODUCTS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {bestsellerProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                  ))}
              </div>
          </div>
      </div>
      <BrandLogos />

    </div>
  );
};

export default ProductDetailPage;