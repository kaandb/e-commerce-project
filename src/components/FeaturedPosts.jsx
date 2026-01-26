import React from 'react';
import { featuredPosts } from '../data';
import { Clock, ChartArea, ChevronRight } from 'lucide-react';

const FeaturedPosts = () => {
  return (
    <section className="bg-white font-montserrat py-20 md:py-28">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-10 md:mb-20">
          <h4 className="text-[#23A6F0] text-sm font-bold mb-2 tracking-wide">
            Practice Advice
          </h4>
          <h2 className="text-[#252B42] text-4xl font-bold mb-2 tracking-wide">
            Featured Posts
          </h2>
          <p className="text-[#737373] text-sm font-normal tracking-wide max-w-[470px] mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-[30px] md:gap-[10px] lg:gap-[30px]">
          
          {featuredPosts.map((post) => (
            <div key={post.id} className="flex flex-col w-full md:w-[328px] lg:w-[348px] shadow-md group hover:shadow-xl transition-shadow duration-300 bg-white">
              
              <div className="relative w-full h-[300px] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-5 left-5 bg-[#E74040] text-white font-bold text-sm px-3 py-1 rounded-[3px] shadow-sm tracking-wide">
                  NEW
                </div>
              </div>

              <div className="flex flex-col p-6 pb-8 gap-4 border border-[#e8e8e8] border-t-0">
                
                <div className="flex gap-4 text-xs font-normal">
                  <span className="text-[#8EC2F2]">Google</span>
                  <span className="text-[#737373]">Trending</span>
                  <span className="text-[#737373]">New</span>
                </div>

                <h4 className="text-[#252B42] text-xl font-normal leading-7 tracking-wide max-w-[280px]">
                  {post.title}
                </h4>

                <p className="text-[#737373] text-sm font-normal leading-5 tracking-wide">
                  {post.description}
                </p>

                <div className="flex justify-between items-center py-4">
                  
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#23A6F0]" />
                    <span className="text-[#737373] text-xs font-normal">
                      {post.date}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    <ChartArea className="w-4 h-4 text-[#23856D]" />
                    <span className="text-[#737373] text-xs font-normal">
                      {post.comments}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 cursor-pointer group/link">
                  <span className="text-[#737373] font-bold text-sm group-hover/link:text-[#23A6F0] transition-colors">
                    Learn More
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#23A6F0] transition-transform group-hover/link:translate-x-1" />
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;