const writeToLocalStorage = (cart) => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
};

const readFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("shoppingCart") || "[]");
};

export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_ITEM_COUNT = "UPDATE_CART_ITEM_COUNT";
export const TOGGLE_CART_ITEM = "TOGGLE_CART_ITEM";
export const CLEAR_CART = "CLEAR_CART";

const initialState = {
  cart: readFromLocalStorage(),
  payment: {},
  address: {},
};

export const shoppingCartReducer = (state = initialState, action) => {
  let newCart;

  switch (action.type) {
    case SET_CART:
      return { ...state, cart: action.payload };
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    
    case ADD_TO_CART:
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        newCart = [...state.cart];
        newCart[existingItemIndex] = {
          ...newCart[existingItemIndex],
          count: newCart[existingItemIndex].count + 1,
        };
      } else {
        newCart = [
          ...state.cart,
          { count: 1, checked: true, product: action.payload },
        ];
      }
      writeToLocalStorage(newCart);
      return { ...state, cart: newCart };

    case REMOVE_FROM_CART:
      newCart = state.cart.filter((item) => item.product.id !== action.payload);
      writeToLocalStorage(newCart);
      return { ...state, cart: newCart };

    case UPDATE_CART_ITEM_COUNT:
      newCart = state.cart.map((item) =>
          item.product.id === action.payload.productId
            ? { ...item, count: action.payload.count }
            : item
        );
      writeToLocalStorage(newCart);
      return { ...state, cart: newCart };

    case TOGGLE_CART_ITEM:
      newCart = state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, checked: !item.checked }
            : item
        );
      writeToLocalStorage(newCart);
      return { ...state, cart: newCart };

    case CLEAR_CART:
      writeToLocalStorage([]);
      return { ...state, cart: [] };

    default:
      return state;
  }
};