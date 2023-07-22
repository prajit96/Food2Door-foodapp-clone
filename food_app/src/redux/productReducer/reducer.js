import { ADD_TO_CART, DECREASE_ITEM_QUANTITY, DELETE_PRODUCT_SUCCESS, GET_CART_TOTAL, GET_PRODUCT_SUCCESS, INCREASE_ITEM_QUANTITY, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST, REMOVE_ITEM, SINGLE_PRODUCT } from "./actionTypes";
import productData from "../../productData"

const initialState = {
    isLoading: false,
    isError: false,
    items:productData,
    foods: [],
    singleProduct:JSON.parse(localStorage.getItem("cart")) || [],
    totalQuantity: 0,
    totalPrice: 0
}

export const reducer = (state = initialState, {type,payload}) => {
    switch(type){
        case PRODUCT_REQUEST:
            return {...state, isLoading: true}
        case PRODUCT_FAILURE:
            return {...state, isLoading: false, isError: true}
        case POST_PRODUCT_SUCCESS:
            return {...state, isLoading: false}
        case GET_PRODUCT_SUCCESS:
            return {...state, isLoading: false, foods: payload} 
        case DELETE_PRODUCT_SUCCESS:
            return {...state, isLoading: false, foods: payload }
        case PATCH_PRODUCT_SUCCESS:
            return {...state, isLoading: false}
        case ADD_TO_CART:
            return {...state, isLoading: true}
        case GET_CART_TOTAL:
            return {...state, isLoading: false, foods: payload}
        case INCREASE_ITEM_QUANTITY:
            return {...state, isLoading: false, foods: payload }
        case DECREASE_ITEM_QUANTITY:
            return {...state, isLoading: false, foods: payload }  
        case SINGLE_PRODUCT:
            return { ...state,isLoading: false, singleProduct:[...state.singleProduct,payload]}  
        case REMOVE_ITEM:
            return {...state, isLoading: false, singleProduct: payload}                         
        default:
            return state;
    }
}
// import { ADD_TO_CART, DECREASE_ITEM_QUANTITY, DELETE_PRODUCT_SUCCESS, GET_CART_TOTAL, GET_PRODUCT_SUCCESS, INCREASE_ITEM_QUANTITY, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST, REMOVE_ITEM, SINGLE_PRODUCT } from "./actionTypes";
// import productData from "../../productData";

// const initialState = {
//   isLoading: false,
//   isError: false,
//   items: productData,
//   foods: [],
//   singleProduct: [],
//   totalQuantity: 0,
//   totalPrice: 0
// };

// export const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case PRODUCT_REQUEST:
//       return { ...state, isLoading: true };
//     case PRODUCT_FAILURE:
//       return { ...state, isLoading: false, isError: true };
//     case POST_PRODUCT_SUCCESS:
//       return { ...state, isLoading: false };
//     case GET_PRODUCT_SUCCESS:
//       return { ...state, isLoading: false, foods: payload };
//     case DELETE_PRODUCT_SUCCESS:
//       return { ...state, isLoading: false, foods: payload };
//     case PATCH_PRODUCT_SUCCESS:
//       return { ...state, isLoading: false };
//     case ADD_TO_CART:
//       return { ...state, isLoading: true };
//     case GET_CART_TOTAL:
//       const { totalQuantity, totalPrice } = state.foods.reduce(
//         (cartTotal, cartItem) => {
//           const { price, quantity } = cartItem;
//           const itemTotal = price * quantity;
//           cartTotal.totalPrice += itemTotal;
//           cartTotal.totalQuantity += quantity;
//           return cartTotal;
//         },
//         {
//           totalPrice: 0,
//           totalQuantity: 0
//         }
//       );
//       return { ...state, isLoading: false, foods: payload, totalQuantity, totalPrice };
//     case REMOVE_ITEM:
//       return { ...state, isLoading: false };
//     case INCREASE_ITEM_QUANTITY:
//       return { ...state, isLoading: false, foods: payload };
//     case DECREASE_ITEM_QUANTITY:
//       return { ...state, isLoading: false, foods: payload };
//     case SINGLE_PRODUCT:
//       return { ...state, isLoading: false, singleProduct: [...state.singleProduct, payload] };
//     default:
//       return state;
//   }
// };
