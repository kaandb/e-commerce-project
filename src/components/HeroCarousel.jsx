import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { sliderItems } from '../data';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroCarousel = () => {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-[600px] md:h-[800px] xl:h-[960px] w-full font-montserrat"
      >
        {sliderItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover object-center" 
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full container mx-auto px-6 lg:px-9">
                  <div className="text-white flex flex-col gap-8 max-w-[1000px] items-center md:items-start text-center md:text-left">
                    
                    <h5 className="font-bold text-base tracking-wide">
                      {item.subtitle}
                    </h5>
                    
                    <h1 className="font-bold text-4xl md:text-6xl lg:text-[80px] leading-tight tracking-wider uppercase">
                      {item.title}
                    </h1>
                    
                    <p className="text-xl md:text-2xl max-w-[300px] md:max-w-[500px] font-normal tracking-wide">
                      {item.description}
                    </p>
                    
                    <button className="bg-success hover:bg-green-600 text-white font-bold py-4 px-10 rounded text-xl transition-colors tracking-wide">
                      {item.buttonText}
                    </button>

                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;