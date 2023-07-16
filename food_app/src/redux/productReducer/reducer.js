import { DELETE_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
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
        default:
            return state;
    }
}