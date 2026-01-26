import React, { useState } from 'react';
import { 
  Menu, Search, ShoppingCart, 
  Phone, Mail, User, Heart, ChevronDown, 
  Facebook, Instagram, Twitter, Youtube 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks, mobileMenuLinks, headerContact } from '../data';

import HeroCarousel from '../components/HeroCarousel';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(1);
  const [wishlistCount, setWishlistCount] = useState(1);
  
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="font-montserrat">
      
      <div className="hidden md:block bg-dark text-white text-sm py-3">
        <div className="w-full px-6 lg:px-9 flex justify-between items-center">
          <div className="flex gap-6">
            <div className="flex items-center gap-1 font-bold hover:text-primary transition-colors cursor-pointer">
              <Phone size={16} />
              <span>{headerContact.phone}</span>
            </div>
            <div className="flex items-center gap-1 font-bold hover:text-primary transition-colors cursor-pointer">
              <Mail size={16} />
              <span>{headerContact.email}</span>
            </div>
          </div>
          <div className="font-bold hidden lg:block">
            {headerContact.promoText}
          </div>
          <div className="flex items-center gap-3 font-bold">
            <span>Follow Us :</span>
            <Instagram size={16} className="cursor-pointer hover:text-primary transition-colors" />
            <Youtube size={16} className="cursor-pointer hover:text-primary transition-colors" />
            <Facebook size={16} className="cursor-pointer hover:text-primary transition-colors" />
            <Twitter size={16} className="cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
      </div>

      <div className="bg-white py-4">
        <div className="w-full px-6 lg:px-9">
          <div className="flex justify-between items-center">
            
            <div className="font-bold text-2xl text-dark tracking-wider mr-0 md:mr-20 cursor-pointer">
              Bandage
            </div>

            <nav className="hidden md:flex grow gap-6 font-bold text-light-gray text-sm">
              {navLinks.map((link, index) => (
                 <Link 
                    key={index} 
                    to={link.path} 
                    className="hover:text-dark transition-colors flex items-center gap-1"
                 >
                   {link.label}
                   {link.label === "Shop" && <ChevronDown size={12} />}
                 </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-6 text-primary font-bold text-sm">
              <div className="flex items-center gap-2 cursor-pointer hover:text-dark transition-colors">
                <User size={16} />
                <span>Login / Register</span>
              </div>
              <Search size={16} className="cursor-pointer hover:text-dark transition-colors" />
              <div className="flex items-center gap-1 cursor-pointer hover:text-dark transition-colors">
                <ShoppingCart size={16} />
                <span className="text-xs font-normal">{cartCount}</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-dark transition-colors">
                <Heart size={16} />
                <span className="text-xs font-normal">{wishlistCount}</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-dark md:hidden">
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
                  className="text-3xl text-light-gray font-bold hover:text-dark transition-colors"
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