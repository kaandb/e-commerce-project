import React from 'react';
import { teamData } from '../data';

const TeamPage = () => {
  return (
    <div className="bg-white font-montserrat py-12 md:py-20">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[#252B42] text-3xl md:text-[40px] font-bold tracking-wide mb-4">
            Meet Our Team
          </h2>
          <p className="text-[#737373] text-sm md:text-base font-normal max-w-[500px] mx-auto leading-relaxed">
            Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 max-w-[1050px] mx-auto">
          {teamData.map((member) => (
            <div key={member.id} className="flex flex-col items-center pb-8">
              
              <div className="w-full h-[300px] md:h-[350px] overflow-hidden mb-6">
                <img 
                  src={member.image} 
                  alt={member.username} 
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500 cursor-pointer"
                />
              </div>

              <h5 className="text-[#252B42] text-base font-bold tracking-wide mb-2">
                {member.username}
              </h5>
              <p className="text-[#737373] text-sm font-bold tracking-wide mb-4">
                {member.profession}
              </p>

              <div className="flex items-center gap-5 text-[#23A6F0]">
                {member.socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={index} 
                      href={social.url} 
                      className="hover:text-blue-600 transition-colors hover:scale-110 transform duration-200"
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TeamPage;