import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as productReducer} from "./productReducer/reducer"
// import authReducer  from "./authReducer/reducer";
import {reducer as signUpReducer} from "./SignUpReducer/reducer"
import {reducer as loginReducer} from "./LoginReducer/reducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    // auth: authReducer,
    productReducer,
    signUpReducer: signUpReducer,
    loginReducer: loginReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))