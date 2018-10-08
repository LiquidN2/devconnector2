import jwt_decode from 'jwt-decode';
import tokenIsValid from '../utils/tokenIsValid';

import { 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_LOGOUT
} from './../constants/actionTypes';

const token = localStorage.getItem('token');

const initialState = {
    isFetching: false,
    isAuthenticated: tokenIsValid(token) ? true : false,
    user: tokenIsValid(token) ? jwt_decode(token) : {}
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
                isAuthenticated: false,
                user: {}
            };
        
        case USER_LOGIN_ERROR:
        case USER_LOGOUT:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
                user: {}
            };
        
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: true,
                user: action.decodedToken
            };

        default:
            return state;
    }
};

export default authReducer;