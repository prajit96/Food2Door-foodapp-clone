import axios from "axios"
import { DELETE_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes"
import * as actionTypes from './actionTypes';

export const addProduct = (newProduct) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST});
    axios
    .post("http://localhost:8080/foods", newProduct)
    .then((res)=>{
        console.log(res.data)
        dispatch({type: POST_PRODUCT_SUCCESS})
    })
    .catch((err)=>{
        console.log(err.message)
        dispatch({type: PRODUCT_FAILURE})
    })
}

export const getProduct = (paramObj) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST})
    axios.get("http://localhost:8080/foods", paramObj)
    .then((res)=>{
        dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data})
    })
    .catch((err)=>{
        dispatch({type: PRODUCT_FAILURE})
    })
}

export const deleteProduct = (id) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST})

    let payload = [];

    axios.get("http://localhost:8080/foods")
    .then((res)=>{
        payload = res.data.filter((el)=> el.id !== id);
    })


    return axios
    .delete(`http://localhost:8080/foods/${id}`)
    .then((res)=>{
        dispatch({type: DELETE_PRODUCT_SUCCESS, payload})
    })
    .catch((err)=>{
        dispatch({type: PRODUCT_FAILURE})
    })
}

export const editProduct = (id, data) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST})
    axios.patch(`http://localhost:8080/foods/${id}`, data)
    .then((res)=>{
        console.log(res.data);
        dispatch({type: PATCH_PRODUCT_SUCCESS})
    })
    .catch((err)=>{
        dispatch({type: PRODUCT_FAILURE})
    })
}

export const addToCart = (product) => {
    return { type: actionTypes.ADD_TO_CART, payload: product };
  };
  
  export const getCartTotal = () => {
    return { type: actionTypes.GET_CART_TOTAL };
  };
  
  export const removeItem = (id) => {
    return { type: actionTypes.REMOVE_ITEM, payload: id };
  };
  
  export const increaseItemQuantity = (id) => {
    return { type: actionTypes.INCREASE_ITEM_QUANTITY, payload: id };
  };
  
  export const decreaseItemQuantity = (id) => {
    return { type: actionTypes.DECREASE_ITEM_QUANTITY, payload: id };
  };

  
// import axios from 'axios';
// import * as actionTypes from './actionTypes';

// // Product actions

// export const addProduct = (newProduct) => (dispatch) => {
//   dispatch({ type: actionTypes.PRODUCT_REQUEST });
//   axios
//     .post("http://localhost:8080/foods", newProduct)
//     .then((res) => {
//       console.log(res.data);
//       dispatch({ type: actionTypes.POST_PRODUCT_SUCCESS });
//     })
//     .catch((err) => {
//       console.log(err.message);
//       dispatch({ type: actionTypes.PRODUCT_FAILURE });
//     });
// };

// export const getProduct = (paramObj) => (dispatch) => {
//   dispatch({ type: actionTypes.PRODUCT_REQUEST });
//   axios
//     .get("http://localhost:8080/foods", paramObj)
//     .then((res) => {
//       dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: res.data });
//     })
//     .catch((err) => {
//       dispatch({ type: actionTypes.PRODUCT_FAILURE });
//     });
// };

// export const deleteProduct = (id) => (dispatch) => {
//   dispatch({ type: actionTypes.PRODUCT_REQUEST });

//   let payload = [];

//   axios.get("http://localhost:8080/foods")
//     .then((res) => {
//       payload = res.data.filter((el) => el.id !== id);
//     })
//     .then(() => {
//       return axios.delete(`http://localhost:8080/foods/${id}`);
//     })
//     .then(() => {
//       dispatch({ type: actionTypes.DELETE_PRODUCT_SUCCESS, payload });
//     })
//     .catch((err) => {
//       dispatch({ type: actionTypes.PRODUCT_FAILURE });
//     });
// };

// export const editProduct = (id, data) => (dispatch) => {
//   dispatch({ type: actionTypes.PRODUCT_REQUEST });
//   axios.patch(`http://localhost:8080/foods/${id}`, data)
//     .then((res) => {
//       console.log(res.data);
//       dispatch({ type: actionTypes.PATCH_PRODUCT_SUCCESS });
//     })
//     .catch((err) => {
//       dispatch({ type: actionTypes.PRODUCT_FAILURE });
//     });
// };

// Cart actions

// export const addToCart = (product) => {
//   return { type: actionTypes.ADD_TO_CART, payload: product };
// };

// export const getCartTotal = () => {
//   return { type: actionTypes.GET_CART_TOTAL };
// };

// export const removeItem = (id) => {
//   return { type: actionTypes.REMOVE_ITEM, payload: id };
// };

// export const increaseItemQuantity = (id) => {
//   return { type: actionTypes.INCREASE_ITEM_QUANTITY, payload: id };
// };

// export const decreaseItemQuantity = (id) => {
//   return { type: actionTypes.DECREASE_ITEM_QUANTITY, payload: id };
// };

// Other actions if needed...

