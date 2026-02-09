import React, { useState } from 'react';
import { 
  Menu, Search, ShoppingCart, 
  Phone, Mail, User, Heart, ChevronDown, 
  Facebook, Instagram, Twitter, Youtube 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import md5 from 'md5'; 
import { navLinks, mobileMenuLinks, headerContact } from '../data';

import HeroCarousel from '../components/HeroCarousel';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(1);
  const [wishlistCount, setWishlistCount] = useState(1);
  const location = useLocation();
  const user = useSelector((state) => state.client.user);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="font-montserrat">
      
      <div className="hidden md:block bg-[#252B42] text-white text-sm py-3">
        <div className="w-full px-6 lg:px-9 flex justify-between items-center">
          <div className="flex gap-6">
            <div className="flex items-center gap-1 font-bold hover:text-[#23A6F0] transition-colors cursor-pointer">
              <Phone size={16} />
              <span>{headerContact.phone}</span>
            </div>
            <div className="flex items-center gap-1 font-bold hover:text-[#23A6F0] transition-colors cursor-pointer">
              <Mail size={16} />
              <span>{headerContact.email}</span>
            </div>
          </div>
          <div className="font-bold hidden lg:block">
            {headerContact.promoText}
          </div>
          <div className="flex items-center gap-3 font-bold">
            <span>Follow Us :</span>
            <Instagram size={16} className="cursor-pointer hover:text-[#23A6F0] transition-colors" />
            <Youtube size={16} className="cursor-pointer hover:text-[#23A6F0] transition-colors" />
            <Facebook size={16} className="cursor-pointer hover:text-[#23A6F0] transition-colors" />
            <Twitter size={16} className="cursor-pointer hover:text-[#23A6F0] transition-colors" />
          </div>
        </div>
      </div>

      <div className="bg-white py-4">
        <div className="w-full px-6 lg:px-9">
          <div className="flex justify-between items-center">
            
            <div className="font-bold text-2xl text-[#252B42] tracking-wider mr-0 md:mr-20 cursor-pointer">
              Bandage
            </div>

            <nav className="hidden md:flex grow gap-6 font-bold text-[#737373] text-sm">
              {navLinks.map((link, index) => (
                 <Link 
                    key={index} 
                    to={link.path} 
                    className="hover:text-[#252B42] transition-colors flex items-center gap-1"
                 >
                    {link.label}
                    {link.label === "Shop" && <ChevronDown size={12} />}
                 </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-6 text-[#23A6F0] font-bold text-sm">
              
              {user.name ? (
                <div className="flex items-center gap-2 cursor-pointer">
                  <img 
                    src={`https://www.gravatar.com/avatar/${md5(user.email)}?s=32`} 
                    alt={user.name} 
                    className="rounded-full border border-gray-200"
                  />
                  <span>{user.name}</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 cursor-pointer hover:text-[#252B42] transition-colors">
                  <User size={16} />
                  <Link to="/login" className="hover:underline">Login</Link> 
                  <span> / </span> 
                  <Link to="/signup" className="hover:underline">Register</Link>
                </div>
              )}

              <Search size={16} className="cursor-pointer hover:text-[#252B42] transition-colors" />
              
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#252B42] transition-colors">
                <ShoppingCart size={16} />
                <span className="text-xs font-normal">{cartCount}</span>
              </div>
              
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#252B42] transition-colors">
                <Heart size={16} />
                <span className="text-xs font-normal">{wishlistCount}</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-[#252B42] md:hidden">
                <Search size={24} className="cursor-pointer" /> 
                <ShoppingCart size={24} className="cursor-pointer" />
                <button onClick={toggleMenu} className="focus:outline-none">
                  <Menu size={24} />
                </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="flex flex-col items-center gap-8 py-20 animate-fade-in md:hidden">
              {mobileMenuLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.path} 
                  onClick={toggleMenu} 
                  className="text-3xl text-[#737373] font-bold hover:text-[#252B42] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

        </div>
      </div>

      {location.pathname === '/' && (
        <div className="w-full">
           <HeroCarousel />
        </div>
      )}

    </header>
  );
};

export default Header;