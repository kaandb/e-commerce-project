import React from 'react';
import { Play } from 'lucide-react'; 
import { aboutUsData, teamData } from '../data'; 
import BrandLogos from '../components/BrandLogos'; 

const AboutPage = () => {
  return (
    <div className="bg-white font-montserrat">
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <h5 className="text-[#252B42] font-bold text-base hidden md:block">
              {aboutUsData.hero.title}
            </h5>
            <h1 className="text-[#252B42] text-4xl md:text-[58px] font-bold tracking-tight">
              {aboutUsData.hero.headline}
            </h1>
            <p className="text-[#737373] text-sm md:text-xl max-w-[370px] md:max-w-none">
              {aboutUsData.hero.description}
            </p>
            <button className="bg-[#23A6F0] hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-[5px] transition-colors">
              {aboutUsData.hero.buttonText}
            </button>
          </div>

          <div className="w-full md:w-1/2 relative flex justify-center md:justify-end isolate">
             
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#FFE9EA] rounded-full"></div>
             <div className="absolute top-0 right-10 md:-right-10 md:-top-10 w-20 h-20 md:w-32 md:h-32 bg-[#FFE9EA] rounded-full"></div>
             <div className="absolute bottom-10 left-10 md:bottom-20 md:left-0 w-12 h-12 bg-[#FFE9EA] rounded-full"></div>
             <div className="absolute top-10 right-20 w-4 h-4 bg-[#977DF4] rounded-full hidden md:block"></div>
             <div className="absolute bottom-32 left-10 w-4 h-4 bg-[#977DF4] rounded-full hidden md:block"></div>
             
             <img 
               src={aboutUsData.hero.image} 
               alt="About Us" 
               className="relative z-10 w-full max-w-[400px] md:max-w-none h-auto object-contain"
             />
          </div>

        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
            
            <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
                <p className="text-[#E74040] text-sm font-bold">Problems trying</p>
                <h2 className="text-[#252B42] text-2xl md:text-2xl font-bold max-w-[380px] mx-auto md:mx-0">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                </h2>
            </div>
            
            <div className="w-full md:w-1/2 text-center md:text-left">
               <p className="text-[#737373] text-sm leading-relaxed">
                 Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
               </p>
            </div>

        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {aboutUsData.stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h1 className="text-[#252B42] text-[58px] font-bold tracking-tight">
                {stat.number}
              </h1>
              <h5 className="text-[#737373] text-base font-bold">
                {stat.text}
              </h5>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="relative w-full max-w-[1050px] mx-auto rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
          <img 
            src={aboutUsData.video.image} 
            alt="Video Cover" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black/10 group-hover:bg-black/20 transition-colors">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-[#23A6F0] rounded-full flex justify-center items-center shadow-xl group-hover:scale-110 transition-transform duration-300">
              <Play fill="white" stroke="white" size={24} className="md:w-8 md:h-8" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[#252B42] text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-[#737373] text-sm max-w-[500px] mx-auto">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1050px] mx-auto">
            {teamData.map((member) => (
              <div key={member.id} className="flex flex-col items-center pb-8">
                <div className="w-full h-[300px] md:h-[350px] overflow-hidden mb-6">
                  <img src={member.image} alt={member.username} className="w-full h-full object-cover object-top" />
                </div>
                <h5 className="text-[#252B42] text-base font-bold mb-2">{member.username}</h5>
                <p className="text-[#737373] text-sm font-bold mb-4">{member.profession}</p>
                <div className="flex items-center gap-5 text-[#23A6F0]">
                  {member.socials.map((social, idx) => {
                    const Icon = social.icon;
                    return <Icon key={idx} size={24} />;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] py-12">
          <div className="container mx-auto px-4 text-center mb-8">
             <h2 className="text-[#252B42] text-4xl font-bold mb-4">Big Companies Are Here</h2>
             <p className="text-[#737373] text-sm max-w-[500px] mx-auto">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
             </p>
          </div>
          <BrandLogos />
      </div>

      <div className="bg-[#2A7CC7] w-full"> 
         <div className="flex md:h-[640px]">
            <div className="w-full md:w-2/3 flex flex-col justify-center items-center md:items-start text-center md:text-left text-white px-8 py-16 md:pl-[15%]">
               <h5 className="font-bold text-base mb-6">{aboutUsData.workWithUs.title}</h5>
               <h2 className="font-bold text-[40px] mb-6">{aboutUsData.workWithUs.headline}</h2>
               <p className="text-sm max-w-[440px] mb-8 leading-relaxed">
                 {aboutUsData.workWithUs.description}
               </p>
               <button className="border border-white hover:bg-white hover:text-[#2A7CC7] text-white font-bold py-3 px-10 rounded-[5px] transition-colors">
                 {aboutUsData.workWithUs.buttonText}
               </button>
            </div>

            <div className="hidden md:block w-1/3 h-full">
               <img 
                 src={aboutUsData.workWithUs.image} 
                 alt="Work With Us" 
                 className="w-full h-full object-cover object-center"
               />
            </div>
         </div>
      </div>

    </div>
  );
};

export default AboutPage;