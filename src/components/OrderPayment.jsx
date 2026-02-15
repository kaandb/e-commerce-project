import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Plus, Edit2, Trash2, CreditCard, CheckCircle } from 'lucide-react';
import { fetchCreditCards, addCreditCard, updateCreditCard, deleteCreditCard } from '../store/actions/clientActions';
import { setPayment } from '../store/actions/shoppingCartActions';

const OrderPayment = () => {
  const dispatch = useDispatch();
  const creditCardList = useSelector((state) => state.client.creditCardList);
  const selectedPayment = useSelector((state) => state.shoppingCart.payment) || {};
  
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    card_no: "", expire_month: "", expire_year: "", name_on_card: ""
  });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    dispatch(fetchCreditCards());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
        ...formData,
        expire_month: parseInt(formData.expire_month),
        expire_year: parseInt(formData.expire_year)
    };
    
    if (isEdit) {
        dispatch(updateCreditCard(payload));
    } else {
        dispatch(addCreditCard(payload));
    }
    setShowForm(false);
    setFormData({ card_no: "", expire_month: "", expire_year: "", name_on_card: "" });
    setIsEdit(false);
  };

  const handleEdit = (card) => {
      setFormData(card);
      setIsEdit(true);
      setShowForm(true);
  }

  const handleAddNew = () => {
      setFormData({ card_no: "", expire_month: "", expire_year: "", name_on_card: "" });
      setIsEdit(false);
      setShowForm(true);
  }

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-bold text-[#252B42]">Payment Options</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <button 
             onClick={handleAddNew}
             className="min-h-[160px] border-2 border-dashed border-[#23A6F0] rounded-lg flex flex-col items-center justify-center text-[#23A6F0] hover:bg-blue-50 transition-colors bg-white"
           >
              <Plus size={32} />
              <span className="font-bold mt-2">Add New Card</span>
           </button>

           {creditCardList?.map((card) => (
               <div 
                 key={card.id} 
                 onClick={() => dispatch(setPayment(card))}
                 className={`relative p-5 border rounded-lg cursor-pointer transition-all flex flex-col justify-between h-[160px] bg-white ${selectedPayment.id === card.id ? 'border-[#23A6F0] bg-blue-50 shadow-md ring-1 ring-[#23A6F0]' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'}`}
               >
                   <div className="flex justify-between items-start">
                       <div className="flex items-center gap-2">
                           <CreditCard size={24} className={selectedPayment.id === card.id ? 'text-[#23A6F0]' : 'text-gray-400'} />
                           {selectedPayment.id === card.id && <CheckCircle size={18} className="text-[#23A6F0]" />}
                       </div>
                       <div className="flex gap-2 text-gray-400">
                           <button onClick={(e) => { e.stopPropagation(); handleEdit(card); }} className="hover:text-[#23A6F0] p-1"><Edit2 size={16}/></button>
                           <button onClick={(e) => { e.stopPropagation(); dispatch(deleteCreditCard(card.id)); }} className="hover:text-red-500 p-1"><Trash2 size={16}/></button>
                       </div>
                   </div>
                   
                   <div className="font-mono text-lg tracking-widest text-[#252B42] my-2">
                       {card.card_no ? `**** **** **** ${card.card_no.slice(-4)}` : '**** **** **** ****'}
                   </div>
                   
                   <div className="flex justify-between text-sm text-[#737373]">
                       <span className="uppercase font-bold">{card.name_on_card}</span>
                       <span>{card.expire_month}/{card.expire_year}</span>
                   </div>
               </div>
           ))}
      </div>

       {showForm && (
         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999] p-4">
             <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-2xl">
                 <h4 className="font-bold text-lg mb-4 text-[#252B42]">{isEdit ? "Edit Card" : "Add New Card"}</h4>
                 <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold text-[#737373]">Card Number</label>
                        <input name="card_no" placeholder="**** **** **** ****" value={formData.card_no} onChange={handleChange} className="border border-gray-300 p-2 rounded focus:outline-none focus:border-[#23A6F0]" maxLength={16} required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold text-[#737373]">Name on Card</label>
                        <input name="name_on_card" placeholder="FULL NAME" value={formData.name_on_card} onChange={handleChange} className="border border-gray-300 p-2 rounded focus:outline-none focus:border-[#23A6F0]" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="flex flex-col gap-1">
                           <label className="text-xs font-bold text-[#737373]">Expiry Month</label>
                           <input name="expire_month" type="number" placeholder="MM" value={formData.expire_month} onChange={handleChange} className="border border-gray-300 p-2 rounded focus:outline-none focus:border-[#23A6F0]" min="1" max="12" required />
                       </div>
                       <div className="flex flex-col gap-1">
                           <label className="text-xs font-bold text-[#737373]">Expiry Year</label>
                           <input name="expire_year" type="number" placeholder="YYYY" value={formData.expire_year} onChange={handleChange} className="border border-gray-300 p-2 rounded focus:outline-none focus:border-[#23A6F0]" min="2024" required />
                       </div>
                    </div>
                    
                    <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-gray-100">
                        <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded font-bold transition-colors">Cancel</button>
                        <button type="submit" className="px-6 py-2 bg-[#23A6F0] text-white rounded font-bold hover:bg-blue-600 transition-colors">Save Card</button>
                    </div>
                 </form>
             </div>
         </div>
      )}
    </div>
  );
};

export default OrderPayment;