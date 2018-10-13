import {
    // GET_ERRORS,
    GET_LOGIN_ERRORS,
    GET_REGISTER_ERRORS,
    CLEAR_ERRORS,
    CLEAR_LOGIN_ERRORS,
    CLEAR_REGISTER_ERRORS,
    GET_CURRENT_USER_PROFILE_ERRORS,
    CURRENT_USER_PROFILE_UPDATE_ERRORS
} from './../constants/actionTypes';


// const initialState = {};
const initialState = {
    login: {},
    register: {},
    profile: {}
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

        case GET_CURRENT_USER_PROFILE_ERRORS:
        case CURRENT_USER_PROFILE_UPDATE_ERRORS:
            return {
                ...state,
                profile: action.errors
            };
            
        default:
            return state;
    }
};

export default errorReducer;