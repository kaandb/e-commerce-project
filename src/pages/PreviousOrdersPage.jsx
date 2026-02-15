import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { getOrders } from '../store/actions/clientActions';
import { ChevronDown, ChevronUp, Package, Clock, CheckCircle, Loader2 } from 'lucide-react'; 
import { Link } from 'react-router-dom';

const PreviousOrdersPage = () => {
    const dispatch = useDispatch();
    const { orderList, user } = useSelector((state) => state.client); 
    const [expandedOrderId, setExpandedOrderId] = useState(null);
    const localToken = localStorage.getItem("token");

    useEffect(() => {
        if (user.token) {
            dispatch(getOrders());
        }
    }, [dispatch, user.token]); 

    const toggleDetails = (id) => {
        setExpandedOrderId(expandedOrderId === id ? null : id);
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

    return (
        <div className="bg-[#FAFAFA] min-h-screen font-montserrat pb-12">
            <div className="bg-white py-6 mb-8 shadow-sm">
                <div className="container mx-auto px-4">
                     <h2 className="text-2xl font-bold text-[#252B42]">My Orders</h2>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {orderList.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-lg shadow-sm">
                        <Package size={64} className="mx-auto text-gray-300 mb-4" />
                        <h3 className="text-xl font-bold text-[#252B42] mb-4">No orders found</h3>
                        <Link to="/shop" className="text-[#23A6F0] font-bold hover:underline">Start Shopping</Link>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        <div className="hidden md:grid grid-cols-12 bg-white p-4 rounded-t-lg border-b border-gray-200 font-bold text-[#737373] text-sm">
                            <div className="col-span-2">Order Date</div>
                            <div className="col-span-4">Summary</div>
                            <div className="col-span-2">Total</div>
                            <div className="col-span-3">Status</div>
                            <div className="col-span-1 text-right">Action</div>
                        </div>

                        {orderList.map((order) => (
                            <div key={order.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                                <div 
                                    onClick={() => toggleDetails(order.id)}
                                    className="grid grid-cols-1 md:grid-cols-12 p-4 items-center cursor-pointer hover:bg-gray-50 transition-colors gap-4 md:gap-0"
                                >
                                    <div className="col-span-2 text-sm text-[#252B42] flex items-center gap-2">
                                        <Clock size={16} className="text-gray-400" />
                                        {new Date(order.order_date).toLocaleDateString()}
                                    </div>
                                    <div className="col-span-4 text-sm text-[#737373]">
                                        {order.products?.length} Items
                                    </div>
                                    <div className="col-span-2 text-sm font-bold text-[#23A6F0]">
                                        ${order.price}
                                    </div>
                                    <div className="col-span-3 text-sm text-green-600 font-bold flex items-center gap-1">
                                         <CheckCircle size={16} /> Successful
                                    </div>
                                    <div className="col-span-1 flex justify-end text-gray-400">
                                        {expandedOrderId === order.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </div>
                                </div>

                                {expandedOrderId === order.id && (
                                    <div className="bg-gray-50 p-6 border-t border-gray-200 animate-fade-in">
                                        <h4 className="font-bold text-[#252B42] mb-4 text-sm uppercase tracking-wider">Order Details</h4>
                                        <div className="grid grid-cols-1 gap-4">
                                            {order.products.map((item, idx) => (
                                                <div key={idx} className="flex justify-between items-center bg-white p-3 rounded border border-gray-200">
                                                    <div className="flex flex-col">
                                                        <span className="font-bold text-[#252B42] text-sm">Product ID: {item.product_id}</span>
                                                        <span className="text-xs text-gray-500">{item.detail}</span>
                                                    </div>
                                                    <div className="text-sm font-bold text-[#737373]">
                                                        Qty: {item.count}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PreviousOrdersPage;