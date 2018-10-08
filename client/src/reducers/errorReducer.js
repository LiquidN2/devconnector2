import {
    GET_ERRORS,
    GET_LOGIN_ERRORS,
    GET_REGISTER_ERRORS,
    CLEAR_ERRORS,
    CLEAR_LOGIN_ERRORS,
    CLEAR_REGISTER_ERRORS
} from './../constants/actionTypes';


// const initialState = {};
const initialState = {
    login: {},
    register: {}
};

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        // case GET_ERRORS:
        //     return { ...action.errors };

        case GET_LOGIN_ERRORS:
            return {
                ...state,
                login: action.errors
            };

        case GET_REGISTER_ERRORS:
            return {
                ...state,
                register: action.errors
            };

        case CLEAR_ERRORS:
            return {};

        case CLEAR_LOGIN_ERRORS:
            return {
                ...state,
                login: {}
            };
        
        case CLEAR_REGISTER_ERRORS:
            return {
                ...state,
                register: {}
            };
        
        default:
            return state;
    }
};

export default errorReducer;