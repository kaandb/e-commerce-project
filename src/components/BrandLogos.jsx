import React from 'react';
import { brandLogos } from '../data';

const BrandLogos = () => {
  return (
    <section className="bg-[#FAFAFA] py-20 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-12 md:gap-0">
          {brandLogos.map((logo) => (
            <div key={logo.id} className="w-full md:w-auto flex justify-center">
              <img 
                src={logo.image} 
                alt={logo.alt} 
                className="h-16 md:h-auto max-w-[150px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandLogos;