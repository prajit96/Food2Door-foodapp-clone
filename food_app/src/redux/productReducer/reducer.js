import { ADD_TO_CART, DECREASE_ITEM_QUANTITY, DELETE_PRODUCT_SUCCESS, GET_CART_TOTAL, GET_PRODUCT_SUCCESS, INCREASE_ITEM_QUANTITY, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST, REMOVE_ITEM } from "./actionTypes";
import productData from "../../productData"

const initialState = {
    isLoading: false,
    isError: false,
    items:productData,
    foods: [],
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
        case REMOVE_ITEM:
            return {...state, isLoading: false}
        case INCREASE_ITEM_QUANTITY:
            return {...state, isLoading: false, foods: payload }
        case DECREASE_ITEM_QUANTITY:
            return {...state, isLoading: false, foods: payload }                          
        default:
            return state;
    }
}