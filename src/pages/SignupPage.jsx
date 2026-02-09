import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { axiosInstance } from '../api/axiosInstance';
import { toast } from 'react-toastify'; 
import { Loader2 } from 'lucide-react'; 

const SignupPage = () => {
  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors, isValid, isSubmitting } 
  } = useForm({ mode: 'onChange' }); 

  const [roles, setRoles] = useState([]);
  const history = useHistory();
  
  const selectedRoleId = watch('role_id');
  
  const [storeRoleId, setStoreRoleId] = useState(null);

  useEffect(() => {
    axiosInstance.get('/roles')
      .then(res => {
        setRoles(res.data);
        const storeRole = res.data.find(r => r.code === 'store');
        const customerRole = res.data.find(r => r.code === 'customer');
        if (storeRole) setStoreRoleId(storeRole.id);
        
      })
      .catch(err => {
        console.error("Roller yüklenemedi:", err);
        toast.error("Roles could not be loaded. Please try again.");
      });
  }, []);

  const onSubmit = (data) => {
    let formattedData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id
    };

    if (data.role_id === String(storeRoleId)) {
      formattedData = {
        ...formattedData,
        store: {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account
        }
      };
    };

    axiosInstance.post('/signup', formattedData)
      .then(res => {
        toast.success("You need to click link in email to activate your account!", {
          autoClose: 2000, 
        });
        setTimeout(() => {
          history.goBack(); 
        }, 2000);
      })
      .catch(err => {
        console.error("Signup Error:", err);
        toast.error(err.response?.data?.message || "Registration failed!");
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-montserrat">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-[#252B42]">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <div className="mt-1">
                <input 
                  type="text"
                  {...register("name", { required: "Name is required", minLength: { value: 3, message: "Minimum 3 characters" } })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <div className="mt-1">
                <input 
                  type="email"
                  {...register("email", { 
                    required: "Email is required", 
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } 
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1">
                <input 
                  type="password"
                  {...register("password", { 
                    required: "Password is required", 
                    minLength: { value: 8, message: "Min 8 chars" },
                    pattern: {
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
                        message: "Must include numbers, lowercase, uppercase and special chars"
                    }
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <div className="mt-1">
                <input 
                  type="password"
                  {...register("confirmPassword", { 
                    validate: (val) => {
                        if (watch('password') !== val) {
                            return "Your passwords do not match";
                        }
                    }
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                />
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <div className="mt-1">
                <select
                  {...register("role_id", { required: true })}
                  className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                  defaultValue={roles.find(r => r.code === 'customer')?.id || ""}
                >
                    {roles.map(role => (
                        <option key={role.id} value={role.id}>{role.name}</option>
                    ))}
                </select>
              </div>
            </div>

            {selectedRoleId === String(storeRoleId) && (
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200 space-y-4 animate-fade-in">
                    <h4 className="text-sm font-bold text-[#23A6F0] uppercase tracking-wide border-b pb-2">Store Information</h4>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Store Name</label>
                        <input 
                            type="text"
                            {...register("store_name", { required: "Store Name is required", minLength: { value: 3, message: "Min 3 chars" } })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                        />
                        {errors.store_name && <p className="text-red-500 text-xs mt-1">{errors.store_name.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Store Phone (TR)</label>
                        <input 
                            type="tel"
                            placeholder="05..."
                            {...register("store_phone", { 
                                required: "Phone is required",
                                pattern: { value: /^(\+90|0)?5\d{9}$/, message: "Invalid TR phone number" }
                            })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                        />
                        {errors.store_phone && <p className="text-red-500 text-xs mt-1">{errors.store_phone.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Store Tax ID</label>
                        <input 
                            type="text"
                            placeholder="T1234V123456"
                            {...register("store_tax_no", { 
                                required: "Tax ID is required",
                                pattern: { value: /^T\d{4}V\d{6}$/, message: "Format: TXXXXVXXXXXX" }
                            })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                        />
                        {errors.store_tax_no && <p className="text-red-500 text-xs mt-1">{errors.store_tax_no.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Store IBAN</label>
                        <input 
                            type="text"
                            placeholder="TR..."
                            {...register("store_bank_account", { 
                                required: "IBAN is required",
                                pattern: { value: /^TR\d{24}$/, message: "Invalid IBAN format (TR + 24 digits)" }
                            })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                        />
                        {errors.store_bank_account && <p className="text-red-500 text-xs mt-1">{errors.store_bank_account.message}</p>}
                    </div>
                </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isSubmitting} 
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#23A6F0] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23A6F0] disabled:bg-blue-300 transition-colors"
              >
                {isSubmitting ? (
                    <><Loader2 className="animate-spin mr-2" size={20} /> Submitting...</>
                ) : (
                    "Sign Up"
                )}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;