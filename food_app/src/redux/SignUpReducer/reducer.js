import { SignUp_FAILURE, SignUp_REQUEST, SignUp_SUCCESS } from "./actionTypes";

const initialState = {
  isLoading: false,
  register: [],
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SignUp_REQUEST:
      return { ...state, isLoading: true };
    case SignUp_SUCCESS:
      return { ...state, isLoading: false, register: payload };
    case SignUp_FAILURE:
      return { ...state, isError: true,isLoading:false };
    default:
      return state;
  }
}