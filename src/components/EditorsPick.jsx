import React from 'react';
import { Link } from 'react-router-dom';
import { editorsPickItems } from '../data';

const EditorsPick = () => {
  return (
    <section className="bg-[#FAFAFA] font-montserrat py-12 md:py-20">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-10">
          <h2 className="font-bold text-2xl md:text-3xl text-dark mb-2 tracking-wide uppercase">
            EDITOR'S PICK
          </h2>
          <p className="text-[#737373] text-sm tracking-wide font-normal">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-[30px] w-full max-w-[1050px] mx-auto md:h-[500px]">

          <div className="relative w-full md:flex-[2] h-[500px] md:h-full group overflow-hidden">
             <Link to={editorsPickItems[0].link} className="block w-full h-full relative">
                <img
                  src={editorsPickItems[0].image}
                  alt="Men"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 z-0"
                />
                <div className="absolute bottom-6 left-6 bg-white shadow-md px-12 py-3 text-center transition-colors group-hover:bg-dark group-hover:text-white z-20 min-w-[170px]">
                  <h5 className="font-bold text-dark group-hover:text-white tracking-wide text-base uppercase truncate">
                    {editorsPickItems[0].title}
                  </h5>
                </div>
             </Link>
          </div>

          <div className="relative w-full md:flex-[1] h-[500px] md:h-full group overflow-hidden">
             <Link to={editorsPickItems[1].link} className="block w-full h-full relative">
                <img
                  src={editorsPickItems[1].image}
                  alt="Women"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 z-0"
                />
                <div className="absolute bottom-6 left-6 bg-white shadow-md px-8 py-3 text-center transition-colors group-hover:bg-dark group-hover:text-white z-20 min-w-[130px]">
                  <h5 className="font-bold text-dark group-hover:text-white tracking-wide text-base uppercase truncate">
                    {editorsPickItems[1].title}
                  </h5>
                </div>
             </Link>
          </div>

          <div className="w-full md:flex-[1] flex flex-col gap-[16px] h-[500px] md:h-full">
            
            <div className="relative w-full flex-1 group overflow-hidden">
              <Link to={editorsPickItems[2].link} className="block w-full h-full relative">
                <img
                  src={editorsPickItems[2].image}
                  alt="Accessories"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 z-0"
                />
                <div className="absolute bottom-6 left-6 bg-white shadow-md px-6 py-3 text-center transition-colors group-hover:bg-dark group-hover:text-white z-20 min-w-[120px]">
                  <h5 className="font-bold text-dark group-hover:text-white tracking-wide text-sm uppercase truncate">
                    {editorsPickItems[2].title}
                  </h5>
                </div>
              </Link>
            </div>

            <div className="relative w-full flex-1 group overflow-hidden">
              <Link to={editorsPickItems[3].link} className="block w-full h-full relative">
                <img
                  src={editorsPickItems[3].image}
                  alt="Kids"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 z-0"
                />
                <div className="absolute bottom-6 left-6 bg-white shadow-md px-6 py-3 text-center transition-colors group-hover:bg-dark group-hover:text-white z-20 min-w-[120px]">
                  <h5 className="font-bold text-dark group-hover:text-white tracking-wide text-base uppercase truncate">
                    {editorsPickItems[3].title}
                  </h5>
                </div>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default EditorsPick;