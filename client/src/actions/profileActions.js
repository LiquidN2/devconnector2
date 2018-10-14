import axios from 'axios';

import { 
    GET_CURRENT_USER_PROFILE,
    GET_CURRENT_USER_PROFILE_ERRORS,
    SET_CURRENT_USER_PROFILE,
    CURRENT_USER_PROFILE_UPDATE_REQUEST,
    CURRENT_USER_PROFILE_UPDATE_ERRORS,
    CURRENT_USER_PROFILE_UPDATE_SUCCESS
} from './../constants/actionTypes';


const getCurrentUserProfile = () => {
    return {
        type: GET_CURRENT_USER_PROFILE
    }
};

const getCurrentUserProfileErrors = errors => {
    return {
        type: GET_CURRENT_USER_PROFILE_ERRORS,
        errors
    }
};

const setCurrentUserProfile = profile => {
    return {
        type: SET_CURRENT_USER_PROFILE,
        profile
    }
};

const currentUserProfileUpdateRequest = () => {
    return {
        type: CURRENT_USER_PROFILE_UPDATE_REQUEST
    };
};

const currentUserProfileUpdateErrors = errors => {
    return {
        type: CURRENT_USER_PROFILE_UPDATE_ERRORS,
        errors
    };
};

const currentUserProfileUpdateSuccess = () => {
    return {
        type: CURRENT_USER_PROFILE_UPDATE_SUCCESS,
    };
};

// GET PROFILE - Async
export const getCurrentUserProfileAsync = () => {
    return dispatch => {
        dispatch(getCurrentUserProfile());
        return axios.get('/api/profile')
            .then(res => {
                dispatch(setCurrentUserProfile(res.data));
            })
            .catch(err => {
                console.log(err.response);
                dispatch(getCurrentUserProfileErrors(err.response.data));
            });
    }
};

// UPDATE Profile - Async
export const updateCurrentUserProfileAsync = userData => {
    return dispatch => {
        dispatch(currentUserProfileUpdateRequest());
        return axios.post('/api/profile', userData)
            .then(res => {
                dispatch(currentUserProfileUpdateSuccess());
                dispatch(setCurrentUserProfile(res.data));
            })
            .catch(err => {
                dispatch(currentUserProfileUpdateErrors(err.response.data));
            });
    }
}

// CREATE NEW Experience - Async
export const addNewExperienceAsync = newExperienceData => {
    return dispatch => {
        dispatch(currentUserProfileUpdateRequest());
        return axios.post('/api/profile/experience', newExperienceData)
            .then(res => {
                dispatch(currentUserProfileUpdateSuccess());
                dispatch(setCurrentUserProfile(res.data));
            })
            .catch(err => {
                dispatch(currentUserProfileUpdateErrors());
            })
    }
}