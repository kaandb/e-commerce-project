import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Plus, Edit2, Trash2, CheckCircle } from 'lucide-react';
import { fetchAddress, addAddress, updateAddress, deleteAddress } from '../store/actions/clientActions';
import { setAddress } from '../store/actions/shoppingCartActions';

const OrderAddress = ({ onNext }) => {
  const dispatch = useDispatch();
  const addressList = useSelector((state) => state.client.addressList);
  const selectedAddress = useSelector((state) => state.shoppingCart.address) || {};
  
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "", name: "", surname: "", phone: "", city: "", district: "", neighborhood: "", address: ""
  });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    dispatch(fetchAddress());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
        dispatch(updateAddress(formData));
    } else {
        dispatch(addAddress(formData));
    }
    setShowForm(false);
    setFormData({ title: "", name: "", surname: "", phone: "", city: "", district: "", neighborhood: "", address: "" });
    setIsEdit(false);
  };

  const handleEdit = (addr) => {
      setFormData(addr);
      setIsEdit(true);
      setShowForm(true);
  };
  
  const handleAddNew = () => {
      setFormData({ title: "", name: "", surname: "", phone: "", city: "", district: "", neighborhood: "", address: "" });
      setIsEdit(false);
      setShowForm(true);
  }

  const cities = ["Istanbul", "Ankara", "Izmir", "Bursa", "Antalya", "Adana", "Gaziantep", "Konya"];

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-bold text-[#252B42]">Shipping Address</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <button 
          onClick={handleAddNew}
          className="min-h-[150px] border-2 border-dashed border-[#23A6F0] rounded-lg flex flex-col items-center justify-center text-[#23A6F0] hover:bg-blue-50 transition-colors bg-white"
        >
           <Plus size={32} />
           <span className="font-bold mt-2">Add New Address</span>
        </button>

        {addressList?.map((addr) => (
           <div 
             key={addr.id} 
             onClick={() => dispatch(setAddress(addr))}
             className={`relative p-4 border rounded-lg cursor-pointer transition-all bg-white ${selectedAddress.id === addr.id ? 'border-[#23A6F0] bg-blue-50 shadow-md ring-1 ring-[#23A6F0]' : 'border-gray-200 hover:border-gray-300'}`}
           >
              <div className="flex justify-between items-start mb-2">
                 <div className="flex items-center gap-2">
                     <span className="font-bold text-[#252B42]">{addr.title}</span>
                     {selectedAddress.id === addr.id && <CheckCircle size={18} className="text-[#23A6F0]" />}
                 </div>
                 <div className="flex gap-2 text-gray-400">
                     <button onClick={(e) => { e.stopPropagation(); handleEdit(addr); }} className="hover:text-[#23A6F0] p-1"><Edit2 size={16}/></button>
                     <button onClick={(e) => { e.stopPropagation(); dispatch(deleteAddress(addr.id)); }} className="hover:text-red-500 p-1"><Trash2 size={16}/></button>
                 </div>
              </div>
              <div className="text-sm text-[#737373] flex flex-col gap-1">
                 <span className="font-bold">{addr.name} {addr.surname}</span>
                 <span>{addr.phone}</span>
                 <span className="line-clamp-2">{addr.neighborhood} {addr.address}</span>
                 <span>{addr.district} / {addr.city}</span>
              </div>
           </div>
        ))}
      </div>

      {showForm && (
         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999] p-4">
             <div className="bg-white rounded-lg p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
                 <h4 className="font-bold text-lg mb-4 text-[#252B42]">{isEdit ? "Edit Address" : "Add New Address"}</h4>
                 <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                       <div className="flex flex-col gap-1">
                          <label className="text-xs font-bold text-[#737373]">Address Title</label>
                          <input name="title" placeholder="Home, Work..." value={formData.title} onChange={handleChange} className="border border-gray-300 p-2 rounded focus:outline-none focus:border-[#23A6F0]" required />
                       </div>
                       <div className="flex flex-col gap-1">
                          <label className="text-xs font-bold text-[#737373]">Phone</label>
                          <input name="phone" placeholder="05..." value={formData.phone} onChange={handleChange} className="border border-gray-300 p-2 rounded focus:outline-none focus:border-[#23A6F0]" required />
                       </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="flex flex-col gap-1">
                          <label className="text-xs font-bold text-[#737373]">Name</label>
                          <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="border border-gray-300 p-2 rounded focus:outline-none focus:border-[#23A6F0]" required />
                       </div>
                       <div className="flex flex-col gap-1">
                          <label className="text-xs font-bold text-[#737373]">Surname</label>
                          <input name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} className="border border-gray-300 p-2 rounded focus:outline-none focus:border-[#23A6F0]" required />
                       </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="flex flex-col gap-1">
                           <label className="text-xs font-bold text-[#737373]">City</label>
                           <select name="city" value={formData.city} onChange={handleChange} className="border border-gray-300 p-2 rounded focus:outline-none focus:border-[#23A6F0]" required>
                               <option value="">Select City</option>
                               {cities.map(c => <option key={c} value={c}>{c}</option>)}
                           </select>
                       </div>
                       <div className="flex flex-col gap-1">
                           <label className="text-xs font-bold text-[#737373]">District</label>
                           <input name="district" placeholder="District" value={formData.district} onChange={handleChange} className="border border-gray-300 p-2 rounded focus:outline-none focus:border-[#23A6F0]" required />
                       </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold text-[#737373]">Neighborhood</label>
                        <input name="neighborhood" placeholder="Neighborhood" value={formData.neighborhood} onChange={handleChange} className="border border-gray-300 p-2 rounded focus:outline-none focus:border-[#23A6F0]" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold text-[#737373]">Address Details</label>
                        <textarea name="address" placeholder="Street, Building No, Door No..." value={formData.address} onChange={handleChange} className="border border-gray-300 p-2 rounded h-24 resize-none focus:outline-none focus:border-[#23A6F0]" required />
                    </div>
                    
                    <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-gray-100">
                        <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded font-bold transition-colors">Cancel</button>
                        <button type="submit" className="px-6 py-2 bg-[#23A6F0] text-white rounded font-bold hover:bg-blue-600 transition-colors">Save Address</button>
                    </div>
                 </form>
             </div>
         </div>
      )}
    </div>
  );
};

export default OrderAddress;