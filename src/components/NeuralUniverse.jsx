import React from 'react';
import { neuralUniverseData } from '../data';

const NeuralUniverse = () => {
  return (
    <section className="bg-white font-montserrat w-full">
      <div className="container mx-auto">
        
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-24 w-full h-auto md:h-[682px]">
          
          <div className="w-full md:w-1/2 flex justify-center h-full">
             <img 
               src={neuralUniverseData.image} 
               alt={neuralUniverseData.title} 
               className="w-full h-auto md:w-full md:h-full object-cover object-top" 
             />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-8 md:px-0 pt-12 md:pt-0">
            
            <h5 className="text-[#BDBDBD] font-bold text-base tracking-wide mb-6 md:mb-8 uppercase">
              {neuralUniverseData.subtitle}
            </h5>
            
            <h2 className="text-[#252B42] font-bold text-4xl md:text-[40px] tracking-wide leading-tight mb-6 md:mb-8 max-w-[350px] md:max-w-full">
              {neuralUniverseData.title}
            </h2>
            
            <p className="text-[#737373] text-xl font-normal tracking-wide leading-7 mb-8 md:mb-8 max-w-[350px] md:max-w-[380px]">
              {neuralUniverseData.description}
            </p>

            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto items-center mb-10 md:mb-0">
              
              <button className="bg-[#23A6F0] md:bg-[#2DC071] hover:bg-blue-500 md:hover:bg-green-600 text-white font-bold py-[15px] px-[40px] rounded-[5px] transition-colors tracking-wide text-sm whitespace-nowrap">
                {neuralUniverseData.buttonText1}
              </button>
              
              <button className="bg-white border border-[#23A6F0] text-[#23A6F0] md:border-[#2DC071] md:text-[#2DC071] hover:bg-gray-50 font-bold py-[15px] px-[40px] rounded-[5px] transition-colors tracking-wide text-sm whitespace-nowrap">
                {neuralUniverseData.buttonText2}
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default NeuralUniverse;