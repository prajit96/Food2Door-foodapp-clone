import * as actionTypes from './actionTypes';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
    case actionTypes.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.LOGIN_SUCCESS:
      console.log('Login success:', action.payload);
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.SIGNUP_SUCCESS:
      console.log('Signup success:', action.payload);
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
