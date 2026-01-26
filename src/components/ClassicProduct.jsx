import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { classicProductItems } from '../data';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ClassicProduct = () => {
  return (
    <section className="bg-[#23856D] font-montserrat overflow-hidden w-full relative">
      <div className="container mx-auto">
        <Swiper
          key={classicProductItems.length}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full text-white !static"
        >
          {classicProductItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center justify-between w-full h-full pt-20 md:pt-0 md:h-[945px]">
                
                <div className="flex flex-col gap-6 md:gap-8 w-full md:w-1/2 px-6 md:pl-12 lg:pl-24 text-center md:text-left z-20 mb-12 md:mb-0">
                  <h5 className="font-normal text-lg md:text-xl tracking-[0.2px] uppercase">
                    {item.subtitle}
                  </h5>
                  <h1 className="font-bold text-4xl md:text-6xl lg:text-[58px] tracking-[0.2px] leading-[1.2]">
                    {item.title}
                  </h1>
                  <p className="text-sm md:text-xl font-normal tracking-[0.2px] max-w-[340px] md:max-w-[440px] mx-auto md:mx-0">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
                    <span className="font-bold text-2xl tracking-[0.1px]">
                      {item.price}
                    </span>
                    <button className="bg-[#2DC071] hover:bg-green-500 text-white font-bold py-[15px] px-[40px] rounded-[5px] text-sm md:text-base transition-all tracking-[0.2px] uppercase border-none cursor-pointer">
                      {item.buttonText}
                    </button>
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center md:justify-end items-end h-auto md:h-full px-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto md:w-auto md:max-h-[700px] object-contain object-bottom md:pr-12 lg:pr-24 z-0"
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClassicProduct;