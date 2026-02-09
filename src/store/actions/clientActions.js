import { axiosInstance } from "../../api/axiosInstance";
import { 
  SET_USER, 
  SET_ROLES, 
  SET_THEME, 
  SET_LANGUAGE 
} from "../reducers/clientReducer";

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (language) => ({ type: SET_LANGUAGE, payload: language });

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