import {
    // GET_ERRORS,
    GET_LOGIN_ERRORS,
    GET_REGISTER_ERRORS,
    CLEAR_ERRORS,
    CLEAR_LOGIN_ERRORS,
    CLEAR_REGISTER_ERRORS,
    SET_CURRENT_USER_ERRORS,
    GET_CURRENT_USER_PROFILE_ERRORS,
    CURRENT_USER_PROFILE_UPDATE_ERRORS,
    CURRENT_USER_EXPERIENCES_ERRORS,
    CURRENT_USER_EDUCATION_ERRORS,
    CURRENT_USER_POSTS_ERRORS,
    CURRENT_USER_POSTS_CREATE_ERRORS,
    CURRENT_USER_POSTS_DELETE_ERRORS,
    CREATE_COMMENT_ERRORS
} from './../constants/actionTypes';


// const initialState = {};
const initialState = {
    login: {},
    register: {},
    user: {},
    profile: {},
    post: {},
    comment: {}
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
        
        case SET_CURRENT_USER_ERRORS:
            return {
                ...state,
                user: action.errors
            }

        case GET_CURRENT_USER_PROFILE_ERRORS:
        case CURRENT_USER_PROFILE_UPDATE_ERRORS:
        case CURRENT_USER_EXPERIENCES_ERRORS:
        case CURRENT_USER_EDUCATION_ERRORS:
            return {
                ...state,
                profile: action.errors
            };
        
        case CURRENT_USER_POSTS_ERRORS:
        case CURRENT_USER_POSTS_CREATE_ERRORS:
        case CURRENT_USER_POSTS_DELETE_ERRORS:
            return {
                ...state,
                post: action.errors
            }

        case CREATE_COMMENT_ERRORS:
            return {
                ...state,
                comment: action.errors
            }

        default:
            return state;
    }
};

export default errorReducer;