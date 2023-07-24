import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

function getInitialState() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return {
      isLoading: false,
      isLogin: false,
      isError: false,
      user: user,
    };
  } else {
    return {
      isLoading: false,
      isLogin: false,
      isError: false,
      user: null,
    };
  }
}

export const reducer = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isLogin: true, user: payload };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};