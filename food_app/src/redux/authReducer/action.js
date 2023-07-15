import * as actionTypes from './actionTypes';

export const loginRequest = (username, password) => ({
  type: actionTypes.LOGIN_REQUEST,
  payload: { username, password },
});

export const loginSuccess = (user) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: actionTypes.LOGIN_FAILURE,
  payload: error,
});

export const signupRequest = (username, password) => ({
  type: actionTypes.SIGNUP_REQUEST,
  payload: { username, password },
});

export const signupSuccess = (user) => ({
  type: actionTypes.SIGNUP_SUCCESS,
  payload: user,
});

export const signupFailure = (error) => ({
  type: actionTypes.SIGNUP_FAILURE,
  payload: error,
});
