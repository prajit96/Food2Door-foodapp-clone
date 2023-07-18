import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as productReducer} from "./productReducer/reducer"
import cartReducer from "./cartReducer/CartSlice"
// import {reducer as authReducer} from "./authReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cart: cartReducer,
    productReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))