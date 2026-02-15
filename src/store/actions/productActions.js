import { axiosInstance } from "../../api/axiosInstance";
import { 
    SET_CATEGORIES, 
    SET_PRODUCT_LIST, 
    SET_TOTAL, 
    SET_LIMIT, 
    SET_OFFSET, 
    SET_FETCH_STATE,
    SET_ACTIVE_PRODUCT,
    SET_PRODUCT_FETCH_STATE
} from "../reducers/productReducer";

export const setCategories = (categories) => ({ type: SET_CATEGORIES, payload: categories });
export const setProductList = (productList) => ({ type: SET_PRODUCT_LIST, payload: productList });
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setLimit = (limit) => ({ type: SET_LIMIT, payload: limit });
export const setOffset = (offset) => ({ type: SET_OFFSET, payload: offset });
export const setFetchState = (fetchState) => ({ type: SET_FETCH_STATE, payload: fetchState });
export const setActiveProduct = (product) => ({ type: SET_ACTIVE_PRODUCT, payload: product });
export const setProductFetchState = (state) => ({ type: SET_PRODUCT_FETCH_STATE, payload: state });
export const fetchCategories = () => (dispatch) => {
  axiosInstance.get("/categories")
    .then((res) => dispatch(setCategories(res.data)))
    .catch((err) => console.error("Category Error:", err));
};

export const fetchProducts = (category, filter, sort, limit = 25, offset = 0) => (dispatch) => {
  dispatch(setFetchState("FETCHING"));
  
  const params = new URLSearchParams();
  if (category) params.append("category", category);
  if (filter) params.append("filter", filter);
  if (sort) params.append("sort", sort);
  
  params.append("limit", limit);
  params.append("offset", offset);

  axiosInstance.get("/products", { params: params })
    .then((res) => {
      dispatch(setProductList(res.data.products));
      dispatch(setTotal(res.data.total));
      dispatch(setFetchState("FETCHED"));
      dispatch(setLimit(limit));
      dispatch(setOffset(offset));
    })
    .catch((err) => {
      console.error("Products Error:", err);
      dispatch(setFetchState("FAILED"));
    });
};

export const fetchProductDetail = (productId) => (dispatch) => {
    dispatch(setProductFetchState("FETCHING"));
    axiosInstance.get(`/products/${productId}`)
        .then((res) => {
            dispatch(setActiveProduct(res.data));
            dispatch(setProductFetchState("FETCHED"));
        })
        .catch((err) => {
            console.error("Product Detail Error:", err);
            dispatch(setProductFetchState("FAILED"));
        });
};