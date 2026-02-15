import React, { useState } from 'react';
import { 
  Menu, Search, ShoppingCart, 
  Phone, Mail, User, Heart, ChevronDown, 
  Facebook, Instagram, Twitter, Youtube, Trash2 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import md5 from 'md5'; 
import { mobileMenuLinks, headerContact } from '../data';
import HeroCarousel from '../components/HeroCarousel';
import { removeFromCart } from '../store/actions/shoppingCartActions';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); 
  const [wishlistCount, setWishlistCount] = useState(1);
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.client.user);
  const categories = useSelector((state) => state.product.categories); 
  const cart = useSelector((state) => state.shoppingCart.cart);
  const womenCategories = categories.filter(c => c.code.startsWith('k:'));
  const menCategories = categories.filter(c => c.code.startsWith('e:'));
  const totalCartItems = cart.reduce((total, item) => total + item.count, 0);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="font-montserrat relative z-50">
      
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
              <Link to="/">Bandage</Link>
            </div>

            <nav className="hidden md:flex grow gap-6 font-bold text-[#737373] text-sm relative items-center">
              <Link to="/" className="hover:text-[#252B42]">Home</Link>

              <div 
                className="relative group h-full flex items-center"
                onMouseEnter={() => setIsShopMenuOpen(true)}
                onMouseLeave={() => setIsShopMenuOpen(false)}
              >
                <Link to="/shop" className="hover:text-[#252B42] flex items-center gap-1 py-4">
                  Shop <ChevronDown size={12} />
                </Link>

                {isShopMenuOpen && (
                   <div className="absolute top-full left-0 bg-white shadow-xl border border-gray-100 rounded-md py-6 px-8 flex gap-12 min-w-[300px] z-50 animate-fade-in">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-black font-bold text-base mb-2 border-b pb-2 w-full">Kadın</h3>
                        {womenCategories.map(cat => (
                          <Link key={cat.id} to={`/shop/kadin/${cat.title.toLowerCase()}/${cat.id}`} className="text-gray-500 hover:text-[#23A6F0] text-sm font-normal transition-colors">
                            {cat.title}
                          </Link>
                        ))}
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-black font-bold text-base mb-2 border-b pb-2 w-full">Erkek</h3>
                        {menCategories.map(cat => (
                          <Link key={cat.id} to={`/shop/erkek/${cat.title.toLowerCase()}/${cat.id}`} className="text-gray-500 hover:text-[#23A6F0] text-sm font-normal transition-colors">
                            {cat.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                )}
              </div>
              
              <Link to="/about" className="hover:text-[#252B42]">About</Link>
              <Link to="/blog" className="hover:text-[#252B42]">Blog</Link>
              <Link to="/contact" className="hover:text-[#252B42]">Contact</Link>
              <Link to="/team" className="hover:text-[#252B42]">Team</Link>
              <Link to="/team" className="hover:text-[#252B42]">Pages</Link> 
            </nav>

            <div className="hidden md:flex items-center gap-6 text-[#23A6F0] font-bold text-sm">
              {user.name ? (
                <div 
                    className="relative group cursor-pointer z-50"
                    onMouseEnter={() => setIsUserMenuOpen(true)}
                    onMouseLeave={() => setIsUserMenuOpen(false)}
                >
                    <div className="flex items-center gap-2 py-4">
                        <img src={`https://www.gravatar.com/avatar/${md5(user.email)}?s=32`} alt={user.name} className="rounded-full border border-gray-200" />
                        <span>{user.name}</span>
                        <ChevronDown size={12} />
                    </div>

                    {isUserMenuOpen && (
                        <div className="absolute top-full right-0 pt-0 w-48">
                            <div className="bg-white shadow-xl border border-gray-100 rounded-md py-2 flex flex-col">
                                <Link to="/previous-orders" className="px-4 py-2 hover:bg-gray-50 text-[#737373] text-sm hover:text-[#23A6F0] font-bold text-left">
                                    My Orders
                                </Link>
                                <button 
                                    onClick={() => {
                                        localStorage.removeItem("token");
                                        window.location.href = "/login";
                                    }}
                                    className="px-4 py-2 hover:bg-gray-50 text-[#737373] text-sm hover:text-red-500 font-bold text-left"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
              ) : (
                <div className="flex items-center gap-2 cursor-pointer hover:text-[#252B42] transition-colors">
                  <User size={16} />
                  <Link to="/login" className="hover:underline">Login</Link> / <Link to="/signup" className="hover:underline">Register</Link>
                </div>
              )}

              <Search size={16} className="cursor-pointer hover:text-[#252B42] transition-colors" />
              
              <div 
                 className="relative group cursor-pointer z-50"
                 onMouseEnter={() => setIsCartOpen(true)}
                 onMouseLeave={() => setIsCartOpen(false)}
              >
                  <div className="flex items-center gap-1 hover:text-[#252B42] transition-colors py-4"> 
                    <ShoppingCart size={16} />
                    <span className="text-xs font-normal">{totalCartItems}</span>
                  </div>

                  {isCartOpen && (

                    <div className="absolute top-[80%] right-0 pt-4 w-80 animate-fade-in"> 
                        <div className="bg-white shadow-xl border border-gray-100 rounded-lg p-4 relative z-50">
                            <h4 className="font-bold text-[#252B42] mb-3 border-b pb-2">My Cart ({totalCartItems})</h4>
                            
                            {cart.length === 0 ? (
                                <p className="text-sm text-gray-500 text-center py-4">Your cart is empty.</p>
                            ) : (
                                <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto">
                                    {cart.map((item, index) => (
                                        <div key={index} className="flex gap-3 items-center">
                                            <div className="w-16 h-20 bg-gray-100 rounded overflow-hidden shrink-0 border border-gray-100">
                                                {item.product.images && item.product.images.length > 0 ? (
                                                    <img src={item.product.images[0].url} alt={item.product.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-xs text-gray-400">No Img</div>
                                                )}
                                            </div>
                                            <div className="flex flex-col grow">
                                                <span className="text-sm font-bold text-[#252B42] line-clamp-1">{item.product.name}</span>
                                                <div className="flex justify-between items-center mt-1">
                                                    <span className="text-xs text-gray-500">Qty: {item.count}</span>
                                                    <span className="text-sm font-bold text-[#23A6F0]">${(item.product.price * item.count).toFixed(2)}</span>
                                                </div>
                                            </div>
                                            <button 
                                                onClick={() => dispatch(removeFromCart(item.product.id))}
                                                className="text-red-400 hover:text-red-600 p-1"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                            
                            <div className="mt-4 pt-3 border-t">
                                <div className="flex justify-between font-bold text-[#252B42] mb-3">
                                    <span>Total</span>
                                    <span>${cart.reduce((sum, item) => sum + (item.product.price * item.count), 0).toFixed(2)}</span>
                                </div>
                                <div className="flex gap-2">
                                    <Link to="/cart" className="flex-1 bg-[#23A6F0] text-white text-center py-2 rounded text-sm font-bold hover:bg-blue-600 transition-colors">
                                        Go to Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                  )}
              </div>
              
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#252B42] transition-colors">
                <Heart size={16} />
                <span className="text-xs font-normal">{wishlistCount}</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-[#252B42] md:hidden">
                <Search size={24} className="cursor-pointer" /> 
                <Link to="/cart"><ShoppingCart size={24} className="cursor-pointer" /></Link>
                <button onClick={toggleMenu} className="focus:outline-none"><Menu size={24} /></button>
            </div>
          </div>
          
          {isMenuOpen && (
            <div className="flex flex-col items-center gap-8 py-20 animate-fade-in md:hidden">
              {mobileMenuLinks.map((link, index) => (
                <Link key={index} to={link.path} onClick={toggleMenu} className="text-3xl text-[#737373] font-bold hover:text-[#252B42] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      {location.pathname === '/' && (<div className="w-full"><HeroCarousel /></div>)}
    </header>
  );
};

export default Header;