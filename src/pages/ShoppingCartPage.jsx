import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ChevronRight } from 'lucide-react';
import { 
    removeFromCart, 
    updateCartItemCount, 
    toggleCartItem 
} from '../store/actions/shoppingCartActions';

const ShoppingCartPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.shoppingCart.cart);
    const cartTotal = cart
        .filter(item => item.checked)
        .reduce((sum, item) => sum + (item.product.price * item.count), 0);
    const shippingCost = cartTotal > 150 || cartTotal === 0 ? 0 : 29.99;
    const discount = cartTotal > 200 ? 20 : 0;
    const grandTotal = (cartTotal + shippingCost) - discount;
    const handleCountChange = (id, count, change) => {
        const newCount = count + change;
        if (newCount > 0) {
            dispatch(updateCartItemCount(id, newCount));
        }
    };

    return (
        <div className="bg-[#FAFAFA] font-montserrat min-h-screen pb-12">
            
            <div className="bg-white py-6 mb-8 shadow-sm">
                <div className="container mx-auto px-4">
                     <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-[#252B42]">Shopping Cart</h2>
                        <div className="flex items-center gap-2 text-sm font-bold">
                            <Link to="/" className="text-[#252B42]">Home</Link>
                            <ChevronRight size={16} className="text-[#BDBDBD]" />
                            <Link to="/shop" className="text-[#252B42]">Shop</Link>
                            <ChevronRight size={16} className="text-[#BDBDBD]" />
                            <span className="text-[#BDBDBD]">Cart</span>
                        </div>
                     </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {cart.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-[#252B42] mb-4">Your cart is empty</h3>
                        <Link to="/shop" className="bg-[#23A6F0] text-white px-6 py-3 rounded font-bold hover:bg-blue-600 transition-colors">
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8">
                        
                        <div className="w-full lg:w-2/3 flex flex-col gap-4">
                            <div className="hidden md:grid grid-cols-12 gap-4 bg-white p-4 rounded-lg shadow-sm text-[#737373] font-bold text-sm">
                                <div className="col-span-1 text-center">Select</div>
                                <div className="col-span-6">Product</div>
                                <div className="col-span-2 text-center">Quantity</div>
                                <div className="col-span-2 text-center">Total</div>
                                <div className="col-span-1 text-center">Remove</div>
                            </div>

                            {cart.map((item) => (
                                <div key={item.product.id} className="bg-white p-4 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                                    
                                    <div className="flex items-center justify-center md:col-span-1">
                                        <input 
                                            type="checkbox" 
                                            checked={item.checked} 
                                            onChange={() => dispatch(toggleCartItem(item.product.id))}
                                            className="w-5 h-5 text-[#23A6F0] rounded border-gray-300 focus:ring-[#23A6F0] cursor-pointer"
                                        />
                                    </div>

                                    <div className="flex gap-4 md:col-span-6 items-center">
                                        <div className="w-20 h-24 shrink-0 overflow-hidden rounded bg-gray-100 border border-gray-200">
                                            {item.product.images && item.product.images.length > 0 ? (
                                                 <img src={item.product.images[0].url} alt={item.product.name} className="w-full h-full object-cover" />
                                            ) : (
                                                 <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">No Img</div>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h4 className="font-bold text-[#252B42] text-sm md:text-base">{item.product.name}</h4>
                                            <p className="text-[#737373] text-xs line-clamp-1">{item.product.description}</p>
                                            <span className="text-[#23A6F0] font-bold text-sm md:hidden">${item.product.price}</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-center md:col-span-2">
                                        <div className="flex items-center border border-[#DDDDDD] rounded overflow-hidden">
                                            <button 
                                                onClick={() => handleCountChange(item.product.id, item.count, -1)}
                                                disabled={item.count <= 1}
                                                className="px-3 py-2 bg-[#F9F9F9] hover:bg-gray-200 disabled:opacity-50 text-[#737373]"
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="px-3 py-2 font-bold text-[#252B42] min-w-[30px] text-center bg-white">
                                                {item.count}
                                            </span>
                                            <button 
                                                onClick={() => handleCountChange(item.product.id, item.count, 1)}
                                                disabled={item.count >= item.product.stock}
                                                className="px-3 py-2 bg-[#F9F9F9] hover:bg-gray-200 disabled:opacity-50 text-[#737373]"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="text-center md:col-span-2 font-bold text-[#23A6F0] text-lg">
                                        ${(item.product.price * item.count).toFixed(2)}
                                    </div>

                                    <div className="text-center md:col-span-1 flex justify-center">
                                        <button 
                                            onClick={() => dispatch(removeFromCart(item.product.id))}
                                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-colors"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="w-full lg:w-1/3 h-fit">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E8E8E8]">
                                <h3 className="text-xl font-bold text-[#252B42] mb-6 border-b pb-4">Order Summary</h3>
                                
                                <div className="flex flex-col gap-4 mb-6">
                                    <div className="flex justify-between text-[#737373] font-bold text-sm">
                                        <span>Products Total</span>
                                        <span>${cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-[#737373] font-bold text-sm">
                                        <span>Shipping</span>
                                        <span>{shippingCost === 0 ? "Free" : `$${shippingCost}`}</span>
                                    </div>
                                    
                                    <div className="flex justify-between text-[#737373] font-bold text-sm">
                                        <span>Discount</span>
                                        <span className="text-[#23A6F0]">-${discount.toFixed(2)}</span>
                                    </div>

                                    {shippingCost === 0 && cartTotal > 0 && (
                                        <div className="text-xs text-[#23A6F0] text-right">
                                            Free shipping on orders over $150!
                                        </div>
                                    )}
                                </div>

                                <div className="border-t border-[#E8E8E8] pt-4 mb-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#252B42] font-bold text-lg">Total</span>
                                        <span className="text-[#23A6F0] font-bold text-2xl">${grandTotal.toFixed(2)}</span>
                                    </div>
                                </div>

                                <Link to="/order" className="block w-full text-center bg-[#23A6F0] hover:bg-blue-600 text-white py-3 rounded font-bold transition-colors">
                                    Create Order
                                </Link>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default ShoppingCartPage;