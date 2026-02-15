import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import OrderAddress from '../components/OrderAddress';
import OrderPayment from '../components/OrderPayment';
import { createOrder } from '../store/actions/shoppingCartActions'; 

const CreateOrderPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [activeStep, setActiveStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { user } = useSelector((state) => state.client);
    const cart = useSelector((state) => state.shoppingCart.cart);
    const address = useSelector((state) => state.shoppingCart.address); 
    const payment = useSelector((state) => state.shoppingCart.payment);
    const localToken = localStorage.getItem("token");
    const cartTotal = cart
        .filter(item => item.checked)
        .reduce((sum, item) => sum + (item.product.price * item.count), 0);   
    const shippingCost = cartTotal > 150 || cartTotal === 0 ? 0 : 29.99;
    const discount = cartTotal > 200 ? 20 : 0;
    const grandTotal = (cartTotal + shippingCost) - discount;
    const handleNext = () => {
        setActiveStep(2);
    };

    const handleCompleteOrder = () => {
        if (!address.id) {
            alert("Please select an address!");
            setActiveStep(1);
            return;
        }
        if (!payment.id) {
            alert("Please select a credit card!");
            return;
        }

        setIsSubmitting(true);

        const payload = {
            address_id: address.id,
            order_date: new Date().toISOString(),
            card_no: payment.card_no,
            card_name: payment.name_on_card,
            card_expire_month: payment.expire_month,
            card_expire_year: payment.expire_year,
            card_ccv: 321, 
            price: grandTotal,
            products: cart.map(item => ({
                product_id: item.product.id,
                count: item.count,
                detail: item.product.name 
            }))
        };

        dispatch(createOrder(payload))
            .then(() => {
                history.push("/previous-orders");
            })
            .catch(() => {
                setIsSubmitting(false);
            });
    };

    if (localToken && !user.token) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
                <Loader2 size={48} className="animate-spin text-[#23A6F0]" />
            </div>
        );
    }

    if (!user.token && !localToken) {
        return <Redirect to="/login" />;
    }

    if (cart.length === 0) {
         return <Redirect to="/" />;
    }

    return (
        <div className="bg-[#FAFAFA] min-h-screen font-montserrat pb-12">
             <div className="bg-white py-6 mb-8 shadow-sm">
                <div className="container mx-auto px-4">
                     <h2 className="text-2xl font-bold text-[#252B42]">Checkout</h2>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">

                    <div className="w-full lg:w-2/3">
                        <div className="flex gap-4 mb-6 border-b border-[#E8E8E8]">
                             <button 
                                onClick={() => setActiveStep(1)}
                                className={`pb-4 px-4 font-bold text-sm transition-colors ${activeStep === 1 ? 'text-[#23A6F0] border-b-2 border-[#23A6F0]' : 'text-[#737373]'}`}
                             >
                                 Address Info
                             </button>
                             <button 
                                onClick={() => setActiveStep(2)}
                                className={`pb-4 px-4 font-bold text-sm transition-colors ${activeStep === 2 ? 'text-[#23A6F0] border-b-2 border-[#23A6F0]' : 'text-[#737373]'}`}
                             >
                                 Payment Options
                             </button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E8E8E8]">
                            {activeStep === 1 ? (
                                <OrderAddress onNext={handleNext} />
                            ) : (
                                <OrderPayment />
                            )}
                        </div>
                        
                        {activeStep === 1 && (
                            <div className="mt-6 flex justify-end">
                                <button 
                                    onClick={handleNext}
                                    className="bg-[#23A6F0] text-white px-8 py-3 rounded font-bold hover:bg-blue-600 transition-colors shadow-md"
                                >
                                    Save and Continue
                                </button>
                            </div>
                        )}
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

                            <button 
                                onClick={handleCompleteOrder}
                                disabled={isSubmitting}
                                className="w-full bg-[#23A6F0] hover:bg-blue-600 text-white py-3 rounded font-bold transition-colors disabled:opacity-50 shadow-md flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" /> Processing...
                                    </>
                                ) : (
                                    "Complete Order"
                                )}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CreateOrderPage;