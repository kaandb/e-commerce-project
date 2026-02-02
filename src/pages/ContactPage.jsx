import React from 'react';
import { contactPageData } from '../data';

const ContactPage = () => {
  return (
    <div className="bg-white font-montserrat">
      <div className="container mx-auto px-4 py-20 md:py-28">
        
        <div className="flex flex-col items-center text-center max-w-[600px] mx-auto">
          
          <h2 className="text-[#252B42] text-3xl md:text-[40px] font-bold tracking-wide leading-tight mb-4">
            {contactPageData.title}
          </h2>

          <p className="text-[#737373] text-sm md:text-xl font-normal tracking-wide leading-7 mb-10 max-w-[400px] md:max-w-full mx-auto">
            {contactPageData.description}
          </p>

          <button className="bg-[#23A6F0] hover:bg-blue-600 text-white font-bold py-[15px] px-[40px] rounded-[5px] transition-colors tracking-wide text-sm mb-10">
            {contactPageData.buttonText}
          </button>

          <div className="flex items-center gap-8 text-[#BDBDBD]">
            {contactPageData.socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <a 
                  key={index} 
                  href={social.url} 
                  className="hover:text-[#23A6F0] transition-colors hover:scale-110 transform duration-200"
                >
                  <Icon size={30} />
                </a>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;