import axios from "axios"
import { ADD_TO_CART,DELETE_CART_PRODUCTS_FAILURE, DELETE_CART_PRODUCTS_REQUEST, DELETE_CART_PRODUCTS_SUCCESS, GET_CART_PRODUCTS_FAILURE, GET_CART_PRODUCTS_REQUEST, GET_CART_PRODUCTS_SUCCESS, POST_CART_PRODUCTS_FAILURE, POST_CART_PRODUCTS_REQUEST, POST_CART_PRODUCTS_SUCCESS } from "./actionTypes"


export const getCartProductsRequest = () => {
    return { type: GET_CART_PRODUCTS_REQUEST }
}

export const getCartProductsSuccess = (payload) => {
    return { type: GET_CART_PRODUCTS_SUCCESS, payload }
}

export const getCartProductsFailure = () => {
    return { type: GET_CART_PRODUCTS_FAILURE }
}
export const postCartProductsRequest = () => {
    return { type: POST_CART_PRODUCTS_REQUEST }
}
export const postCartProductsSuccess = (payload) => {
    localStorage.setItem("singleProduct", JSON.stringify(payload))
    return { type: POST_CART_PRODUCTS_SUCCESS, payload }
}

export const postCartProductsFailure = () => {
    return { type: POST_CART_PRODUCTS_FAILURE }
}



export const deleteCartProductsRequest = () => {
    return { type: DELETE_CART_PRODUCTS_REQUEST }
}

export const deleteCartProductsSuccess = (payload) => {
    return { type: DELETE_CART_PRODUCTS_SUCCESS, payload }
}
export const deleteCartProductsFailure = () => {
    return { type: DELETE_CART_PRODUCTS_FAILURE }
}


export const postData = (newData) => (dispatch) => {
    console.log(newData)
    dispatch(postCartProductsRequest())
    return axios.post(`http://localhost:8080/singleProduct`, newData)
    .then((res) => {
            console.log(res)
            dispatch(postCartProductsSuccess(res.data))
        }).catch((err) => dispatch(postCartProductsFailure()))
}


export const getCartItem = () => (dispatch) => {
    dispatch(getCartProductsRequest())
    axios.get(`http://localhost:8080/singleProduct`)
        .then((res) => {
            console.log(res.data)
            dispatch(getCartProductsSuccess(res.data))
        }).catch(() => dispatch(getCartProductsFailure()))
}

export const deleteCartItem = (id) => (dispatch) => {
    dispatch(deleteCartProductsRequest())
    return axios.delete(`http://localhost:8080/${id}`)
        .then((res) => dispatch(deleteCartProductsSuccess(res.data)))
        .catch(() => dispatch(deleteCartProductsFailure()))
}

export const addToCart = (productData) => {
  return {
    type: ADD_TO_CART,
    payload: productData,
  };
};