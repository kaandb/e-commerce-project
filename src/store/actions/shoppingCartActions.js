import { 
    SET_CART, SET_PAYMENT, SET_ADDRESS,
    ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM_COUNT, TOGGLE_CART_ITEM, CLEAR_CART 
} from "../reducers/shoppingCartReducer";
import { toast } from 'react-toastify';
import { axiosInstance } from "../../api/axiosInstance";

export const setCart = (cart) => ({ type: SET_CART, payload: cart });
export const setPayment = (payment) => ({ type: SET_PAYMENT, payload: payment });
export const setAddress = (address) => ({ type: SET_ADDRESS, payload: address });

export const addToCart = (product) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: product });
  toast.success("Product added to cart!");
};

export const removeFromCart = (productId) => (dispatch) => {
    dispatch({ type: REMOVE_FROM_CART, payload: productId });
    toast.warning("Removed from cart");
};

export const updateCartItemCount = (productId, count) => ({
    type: UPDATE_CART_ITEM_COUNT,
    payload: { productId, count }
});

export const toggleCartItem = (productId) => ({
    type: TOGGLE_CART_ITEM,
    payload: productId
});

export const clearCart = () => ({
  type: CLEAR_CART
});

export const createOrder = (orderData) => (dispatch) => {
  return axiosInstance.post("/order", orderData)
    .then((res) => {
      dispatch(clearCart());
      localStorage.removeItem("shoppingCart"); 
      toast.success("Order created successfully! 🎉");
      return res.data;
    })
    .catch((err) => {
      console.error("Sipariş oluşturma hatası:", err);
      toast.error(err.response?.data?.message || "Failed to create order.");
      throw err;
    });
};