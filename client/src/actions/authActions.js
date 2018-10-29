import axios from 'axios';
import jwt_decode from 'jwt-decode';

import setAuthToken from './../utils/setAuthToken';

import {
  CLEAR_LOGIN_ERRORS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGOUT
} from './../constants/actionTypes';

// ----- action auth state -----
const userLoginRequest = () => ({
  type: USER_LOGIN_REQUEST
});

const userLoginError = errors => ({
  type: USER_LOGIN_ERROR,
  errors
});

const userLoginSuccess = decodedToken => ({
  type: USER_LOGIN_SUCCESS,
  decodedToken
});

const userLoggedOutState = () => ({
  type: USER_LOGOUT
});

const clearLoginErrors = () => ({
  type: CLEAR_LOGIN_ERRORS
});

// LOGIN Async
const userLogin = user => {
  return dispatch => {

    dispatch(clearLoginErrors());
    dispatch(userLoginRequest());

    return axios.post('api/users/login', user)
      .then(res => {
        // get token from response
        const { token } = res.data;
        // save to local storage
        localStorage.setItem('token', token);
        // set token to auth header
        setAuthToken(token);
        // decode token to get user data
        const decodedToken = jwt_decode(token);
        // set current user
        dispatch(userLoginSuccess(decodedToken));
        // redirect to profile is done by PublicRoute
      })
      .catch(err => {
        // dispatch(getAuthErrors(err.response.data));
        dispatch(userLoginError(err.response.data));
      });
  }
}


const userLogout = () => {
  return dispatch => {
    // remove token from local storage
    localStorage.removeItem('token');
    // remove token from headers
    setAuthToken(null);
    // reset application auth state
    dispatch(userLoggedOutState());
  }
}

export { userLogin, userLogout, clearLoginErrors };