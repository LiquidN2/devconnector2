import { 
    GET_CURRENT_USER_PROFILE,
    GET_CURRENT_USER_PROFILE_ERRORS,
    SET_CURRENT_USER_PROFILE,
    CURRENT_USER_PROFILE_UPDATE_REQUEST,
    CURRENT_USER_PROFILE_UPDATE_ERRORS,
    CURRENT_USER_PROFILE_UPDATE_SUCCESS
} from './../constants/actionTypes';

const initialState = {
    isFetching: false,
    isUpdating: false,
    isUpdated: false,
    profile: {}
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CURRENT_USER_PROFILE:
            return {
                ...state,
                isFetching: true
            };
        
        case GET_CURRENT_USER_PROFILE_ERRORS:
            return {
                ...state,
                isFetching: false,
                profile: {}
            };
        
        case SET_CURRENT_USER_PROFILE:
            return {
                ...state,
                isFetching: false,
                profile: {
                    ...state.profile,
                    ...action.profile
                }
            };

        case CURRENT_USER_PROFILE_UPDATE_REQUEST:
            return {
                ...state,
                isUpdating: true,
                isUpdated: false
            };
        
        case CURRENT_USER_PROFILE_UPDATE_ERRORS:
            return {
                ...state,
                isUpdating: false,
                isUpdated: false
            };
        
        case CURRENT_USER_PROFILE_UPDATE_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                isUpdated: true
            };
        
        default:
            return state;
    }
}

export default profileReducer;