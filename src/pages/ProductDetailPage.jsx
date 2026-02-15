import React, { useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronRight, Star, Heart, ShoppingCart, Eye, ArrowLeft, Loader2, ImageOff } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { fetchProductDetail } from '../store/actions/productActions';
import { addToCart } from '../store/actions/shoppingCartActions';
import BrandLogos from '../components/BrandLogos';
import BestsellerProducts from '../components/BestsellerProducts';
import { productDescription } from '../data';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { activeProduct, productFetchState } = useSelector((state) => state.product);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (productId) {
        dispatch(fetchProductDetail(productId));
    }
  }, [dispatch, productId]);

  const handleAddToCart = () => {
      if (activeProduct && activeProduct.id == productId) {
          dispatch(addToCart(activeProduct));
      }
  };

  if (
      productFetchState === 'FETCHING' || 
      !activeProduct || 
      activeProduct.id != productId 
  ) {
      return (
          <div className="h-screen flex items-center justify-center bg-[#FAFAFA]">
             <Loader2 size={48} className="animate-spin text-[#23A6F0]" />
          </div>
      );
  }

  const { name, description, price, rating, stock, images, sell_count } = activeProduct;
  const productImages = images && images.length > 0 ? images.map(img => img.url) : [];
  const colors = ['#23A6F0', '#2DC071', '#E77C40', '#252B42'];

  return (
    <div className="bg-[#FAFAFA] font-montserrat pb-12">
      
      <div className="bg-[#FAFAFA] py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm font-bold">
            <button onClick={() => history.goBack()} className="text-[#252B42] hover:text-[#23A6F0] transition-colors flex items-center">
                <ArrowLeft size={16} className="mr-1"/> Back
            </button>
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            <Link to="/shop" className="text-[#BDBDBD] hover:text-[#23A6F0] transition-colors">Shop</Link>
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            <span className="text-[#BDBDBD] truncate max-w-[200px]">{name}</span>
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
                className="w-full h-[300px] md:h-[450px] rounded-md overflow-hidden shadow-sm bg-white"
              >
                {productImages.length > 0 ? (
                    productImages.map((imgUrl, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full h-full relative flex items-center justify-center bg-white">
                                <img src={imgUrl} alt={`${name} ${index}`} className="w-full h-full object-contain" />
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    <SwiperSlide>
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400">
                            <ImageOff size={64} className="mb-2 opacity-50" />
                            <span className="text-sm font-medium">No Image Available</span>
                        </div>
                    </SwiperSlide>
                )}
              </Swiper>
              
              {productImages.length > 0 && (
                  <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
                     {productImages.map((imgUrl, index) => (
                         <div key={index} className="w-[100px] h-[75px] shrink-0 overflow-hidden rounded opacity-60 hover:opacity-100 cursor-pointer transition-opacity border border-gray-200 bg-white">
                             <img src={imgUrl} alt="thumbnail" className="w-full h-full object-contain" />
                         </div>
                     ))}
                  </div>
              )}
            </div>

            <div className="w-full md:w-1/2 flex flex-col pt-2">
                <h4 className="text-[#252B42] text-xl font-normal mb-4">
                    {name}
                </h4>

                <div className="flex items-center gap-2 mb-5">
                    <div className="flex text-[#F3CD03]">
                        {[1, 2, 3, 4, 5].map((star) => (
                             <Star 
                                key={star} 
                                size={20} 
                                fill={star <= Math.round(rating) ? "#F3CD03" : "none"} 
                                stroke={star <= Math.round(rating) ? "none" : "#F3CD03"}
                                className={star > Math.round(rating) ? "text-yellow-400" : ""}
                             />
                        ))}
                    </div>
                    <span className="text-[#737373] text-sm font-bold">
                        {sell_count} Reviews
                    </span>
                </div>

                <h3 className="text-[#252B42] text-2xl font-bold mb-2">
                    ${price}
                </h3>
                
                <div className="flex items-center gap-2 mb-8">
                    <span className="text-[#737373] text-sm font-bold">Availability :</span>
                    <span className={`text-sm font-bold ${stock > 0 ? "text-[#23A6F0]" : "text-red-500"}`}>
                        {stock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                </div>

                <p className="text-[#858585] text-sm font-normal leading-relaxed mb-8 border-b border-[#BDBDBD] pb-6">
                    {description}
                </p>

                <div className="flex gap-2.5 mb-10">
                    {colors.map((color, idx) => (
                        <div key={idx} className="w-[30px] h-[30px] rounded-full cursor-pointer hover:scale-110 transition-transform shadow-sm" style={{backgroundColor: color}}></div>
                    ))}
                </div>

                <div className="flex items-center gap-2.5">
                    <button 
                        onClick={handleAddToCart}
                        disabled={stock === 0}
                        className="bg-[#23A6F0] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-[5px] text-sm transition-colors disabled:bg-gray-400"
                    >
                        {stock > 0 ? "Add to Cart" : "Out of Stock"}
                    </button>
                    <div className="p-3 border border-[#E8E8E8] rounded-full bg-white hover:bg-gray-50 cursor-pointer transition-colors group">
                        <Heart size={20} className="text-[#252B42] group-hover:text-red-500" />
                    </div>
                    <div 
                        onClick={handleAddToCart}
                        className="p-3 border border-[#E8E8E8] rounded-full bg-white hover:bg-gray-50 cursor-pointer transition-colors group"
                    >
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
                  <button className="text-[#737373] hover:text-[#23A6F0] font-bold text-sm whitespace-nowrap">Reviews ({sell_count})</button>
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
                      <h3 className="text-[#252B42] text-2xl font-bold">{name}</h3>
                      <p className="text-[#737373] text-sm leading-relaxed">
                          {description}
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
                  </div>

              </div>
          </div>
      </div>

      <div className="bg-[#FAFAFA] py-12">
        <div className="container mx-auto px-4">
          <BestsellerProducts />
        </div>
      </div>
      
      <BrandLogos />

    </div>
  );
};

export default ProductDetailPage;