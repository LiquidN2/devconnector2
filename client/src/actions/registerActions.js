import axios from 'axios';

import history from './../routers/history';

import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_ERROR,
    GET_REGISTER_ERRORS,
    CLEAR_REGISTER_ERRORS,
} from './../constants/actionTypes';

const userRegisterRequest = () => {
    return {
        type: USER_REGISTER_REQUEST
    };
};

const userRegisterSuccess = () => {
    return {
        type: USER_REGISTER_SUCCESS
    };
}

const userRegisterError = () => {
    return {
        type: USER_REGISTER_ERROR
    };
}

const getRegisterErrors = errors => {
    return {
        type: GET_REGISTER_ERRORS,
        errors
    };
};

const clearRegisterErrors = () => {
    return {
        type: CLEAR_REGISTER_ERRORS
    };
};

// REGISTER Async
const userRegister = newUser => {
    return dispatch => {

        dispatch(clearRegisterErrors());
        dispatch(userRegisterRequest());

        return axios.post('api/users/register', newUser)
            .then(res => {
                dispatch(userRegisterSuccess());
                history.push('/login');
            })
            .catch(err => {
                dispatch(userRegisterError());
                dispatch(getRegisterErrors(err.response.data))
            });
    };    
};

export { userRegister };