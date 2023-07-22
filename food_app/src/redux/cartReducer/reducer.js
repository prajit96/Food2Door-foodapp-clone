
import { ADD_TO_CART,CLEAR_CART, DELETE_CART_PRODUCTS_FAILURE, DELETE_CART_PRODUCTS_REQUEST, DELETE_CART_PRODUCTS_SUCCESS, GET_CART_ITEM, GET_CART_PRODUCTS_FAILURE, GET_CART_PRODUCTS_REQUEST, GET_CART_PRODUCTS_SUCCESS, POST_CART_PRODUCTS_FAILURE, POST_CART_PRODUCTS_REQUEST, POST_CART_PRODUCTS_SUCCESS, SINGLE_PRODUCT } from './actionTypes'

const initialState = {
  // cart: [],
  isError: false,
  isLoading: false,
  singleProduct: []
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {...state, isLoading:true};
    case GET_CART_PRODUCTS_REQUEST:
      return { ...state, isLoading: true }
    case GET_CART_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, singleProduct: payload }
    case GET_CART_PRODUCTS_FAILURE:
      return { ...state, isError: true }

    case POST_CART_PRODUCTS_REQUEST:
      return { ...state, isLoading: true }
    case POST_CART_PRODUCTS_SUCCESS:

      return { ...state, isLoading: false, singleProduct: payload ,}
    case POST_CART_PRODUCTS_FAILURE:
      return { ...state, isError: true }
    case DELETE_CART_PRODUCTS_REQUEST:
      return { ...state, isLoading: true }
    case DELETE_CART_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, singleProduct: state.singleProduct.filter((el) => el.id !== payload) }
    case DELETE_CART_PRODUCTS_FAILURE:
      return { ...state, isError: true }
      case SINGLE_PRODUCT:
        return { ...state,isLoading: false, singleProduct:[...state.singleProduct,payload]} 
    case GET_CART_ITEM:
      return {
        ...state,
        singleProduct:payload,
        isLoading:false
      }
    case CLEAR_CART:
      return {
        ...state,
        singleProduct:[]
      }
    default: return state
  }
}