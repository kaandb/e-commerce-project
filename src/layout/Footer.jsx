import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full font-montserrat">
      
      <div className="bg-[#FAFAFA] py-10">
        <div className="container mx-auto px-12 md:px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
            
            <h3 className="text-[#252B42] text-2xl font-bold tracking-wide">
              Bandage
            </h3>

            <div className="flex gap-5 text-[#23A6F0]">
              <a href="#" className="hover:text-blue-600 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-12 md:px-4">
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-8">
            
            <div className="flex-1 flex flex-col gap-5">
              <h5 className="text-[#252B42] text-base font-bold tracking-wide">
                Company Info
              </h5>
              <div className="flex flex-col gap-2.5">
                <Link to="#" className="text-[#737373] text-sm font-bold tracking-wide hover:text-[#23A6F0]">About Us</Link>
                <Link to="#" className="text-[#737373] text-sm font-bold tracking-wide hover:text-[#23A6F0]">Carrier</Link>
                <Link to="#" className="text-[#737373] text-sm font-bold tracking-wide hover:text-[#23A6F0]">We are hiring</Link>
                <Link to="#" className="text-[#737373] text-sm font-bold tracking-wide hover:text-[#23A6F0]">Blog</Link>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-5">
              <h5 className="text-[#252B42] text-base font-bold tracking-wide">
                Legal
              </h5>
              <div className="flex flex-col gap-2.5">
                <Link to="#" className="text-[#737373] text-sm font-bold tracking-wide hover:text-[#23A6F0]">About Us</Link>
                <Link to="#" className="text-[#737373] text-sm font-bold tracking-wide hover:text-[#23A6F0]">Carrier</Link>
                <Link to="#" className="text-[#737373] text-sm font-bold tracking-wide hover:text-[#23A6F0]">We are hiring</Link>
                <Link to="#" className="text-[#737373] text-sm font-bold tracking-wide hover:text-[#23A6F0]">Blog</Link>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-5">
              <h5 className="text-[#252B42] text-base font-bold tracking-wide">
                Features
              </h5>
              <div className="flex flex-col gap-2.5">
                <Link to="#" className="text-[#737373] text-sm font-bold tracking-wide hover:text-[#23A6F0]">Business Marketing</Link>
                <Link to="#" className="text-[#737373] text-sm font-bold tracking-wide hover:text-[#23A6F0]">User Analytic</Link>
                <Link to="#" className="text-[#737373] text-sm font-bold tracking-wide hover:text-[#23A6F0]">Live Chat</Link>
                <Link to="#" className="text-[#737373] text-sm font-bold tracking-wide hover:text-[#23A6F0]">Unlimited Support</Link>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-5">
              <h5 className="text-[#252B42] text-base font-bold tracking-wide">
                Resources
              </h5>
              <div className="flex flex-col gap-2.5">
                <Link to="#" className="text-[#737373] text-sm font-bold tracking-wide hover:text-[#23A6F0]">IOS & Android</Link>
                <Link to="#" className="text-[#737373] text-sm font-bold tracking-wide hover:text-[#23A6F0]">Watch a Demo</Link>
                <Link to="#" className="text-[#737373] text-sm font-bold tracking-wide hover:text-[#23A6F0]">Customers</Link>
                <Link to="#" className="text-[#737373] text-sm font-bold tracking-wide hover:text-[#23A6F0]">API</Link>
              </div>
            </div>

            <div className="flex-[1.5] flex flex-col gap-5">
              <h5 className="text-[#252B42] text-base font-bold tracking-wide">
                Get In Touch
              </h5>
              
              <div className="flex flex-col gap-2">
                <div className="flex w-full">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full bg-[#F9F9F9] border border-[#E6E6E6] text-[#737373] px-4 py-4 rounded-l outline-none focus:border-[#23A6F0] text-sm tracking-wide"
                  />
                  <button className="bg-[#23A6F0] hover:bg-blue-600 text-white px-6 py-4 rounded-r font-normal text-sm transition-colors tracking-wide">
                    Subscribe
                  </button>
                </div>
                <p className="text-[#737373] text-xs font-normal tracking-wide">
                  Lore imp sum dolor Amit
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] py-6">
        <div className="container mx-auto px-12 md:px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-[#737373] text-sm font-bold tracking-wide w-full md:w-auto text-left md:text-center">
              Made With Love By Finland All Right Reserved
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;