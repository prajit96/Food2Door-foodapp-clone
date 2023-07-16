import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as productReducer} from "./productReducer/reducer"
// import {reducer as authReducer} from "./authReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    
    productReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))