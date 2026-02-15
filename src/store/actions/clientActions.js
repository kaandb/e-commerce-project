import { axiosInstance } from "../../api/axiosInstance";
import { toast } from "react-toastify";
import { 
  SET_USER, 
  SET_ROLES, 
  SET_THEME, 
  SET_LANGUAGE,
  SET_ADDRESS_LIST,
  SET_CREDIT_CARD_LIST,
  SET_ORDER_LIST 
} from "../reducers/clientReducer";

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (language) => ({ type: SET_LANGUAGE, payload: language });
export const setAddressList = (addressList) => ({ type: SET_ADDRESS_LIST, payload: addressList });
export const setCreditCardList = (cardList) => ({ type: SET_CREDIT_CARD_LIST, payload: cardList });
export const setOrderList = (orderList) => ({ type: SET_ORDER_LIST, payload: orderList });

export const fetchRoles = () => (dispatch, getState) => {
  const { client } = getState();
  if (client.roles && client.roles.length > 0) {
    return;
  }

  axiosInstance.get("/roles")
    .then((res) => {
      dispatch(setRoles(res.data));
    })
    .catch((err) => {
      console.error("Roller çekilirken hata oluştu:", err);
    });
};

export const loginUser = (credentials, rememberMe) => (dispatch) => {
  return axiosInstance.post("/login", credentials)
    .then((res) => {
      dispatch(setUser(res.data));
      if (rememberMe) {
        localStorage.setItem("token", res.data.token);
      }

      axiosInstance.defaults.headers.common["Authorization"] = res.data.token;

      return res.data;
    })
    .catch((err) => {
      throw err; 
    });
};

export const verifyToken = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = token;
    axiosInstance.get("/verify")
      .then((res) => {
        dispatch(setUser(res.data));
        localStorage.setItem("token", res.data.token);
        axiosInstance.defaults.headers.common["Authorization"] = res.data.token;
      })
      .catch((err) => {
        localStorage.removeItem("token");
        delete axiosInstance.defaults.headers.common["Authorization"];
      });
  }
};

export const fetchAddress = () => (dispatch) => {
  axiosInstance.get("/user/address")
    .then((res) => {
      dispatch(setAddressList(res.data));
    })
    .catch((err) => console.error("Adresler yüklenemedi:", err));
};

export const addAddress = (address) => (dispatch) => {
  axiosInstance.post("/user/address", address)
    .then((res) => {
      dispatch(fetchAddress());
      toast.success("Adres başarıyla eklendi");
    })
    .catch((err) => {
      console.error("Adres ekleme hatası:", err);
      toast.error("Adres eklenirken bir hata oluştu");
    });
};

export const updateAddress = (address) => (dispatch) => {
  axiosInstance.put("/user/address", address)
    .then((res) => {
      dispatch(fetchAddress());
      toast.success("Adres güncellendi");
    })
    .catch((err) => {
      console.error("Adres güncelleme hatası:", err);
      toast.error("Adres güncellenemedi");
    });
};

export const deleteAddress = (addressId) => (dispatch) => {
  axiosInstance.delete(`/user/address/${addressId}`)
    .then((res) => {
      dispatch(fetchAddress());
      toast.warning("Adres silindi");
    })
    .catch((err) => {
      console.error("Adres silme hatası:", err);
      toast.error("Adres silinemedi");
    });
};

export const fetchCreditCards = () => (dispatch) => {
  axiosInstance.get("/user/card")
    .then((res) => {
      dispatch(setCreditCardList(res.data));
    })
    .catch((err) => console.error("Kartlar yüklenemedi:", err));
};

export const addCreditCard = (card) => (dispatch) => {
  axiosInstance.post("/user/card", card)
    .then((res) => {
      dispatch(fetchCreditCards());
      toast.success("Kart başarıyla eklendi");
    })
    .catch((err) => {
      console.error("Kart ekleme hatası:", err);
      toast.error("Kart eklenirken bir hata oluştu");
    });
};

export const updateCreditCard = (card) => (dispatch) => {
  axiosInstance.put("/user/card", card)
    .then((res) => {
      dispatch(fetchCreditCards());
      toast.success("Kart bilgileri güncellendi");
    })
    .catch((err) => {
      console.error("Kart güncelleme hatası:", err);
      toast.error("Kart güncellenemedi");
    });
};

export const deleteCreditCard = (cardId) => (dispatch) => {
  axiosInstance.delete(`/user/card/${cardId}`)
    .then((res) => {
      dispatch(fetchCreditCards()); 
      toast.warning("Kart silindi");
    })
    .catch((err) => {
      console.error("Kart silme hatası:", err);
      toast.error("Kart silinemedi");
    });
};

export const getOrders = () => (dispatch) => {
  axiosInstance.get("/order")
    .then((res) => {
      dispatch(setOrderList(res.data));
    })
    .catch((err) => {
      console.error("Siparişler çekilemedi:", err);
    });
};