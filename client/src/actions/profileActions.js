import axios from 'axios';

import { 
    GET_CURRENT_USER_PROFILE,
    GET_CURRENT_USER_PROFILE_ERRORS,
    SET_CURRENT_USER_PROFILE,
    CURRENT_USER_PROFILE_UPDATE_REQUEST,
    CURRENT_USER_PROFILE_UPDATE_ERRORS,
    CURRENT_USER_PROFILE_UPDATE_SUCCESS,
    CURRENT_USER_EXPERIENCES_REQUEST,
    CURRENT_USER_EXPERIENCES_ERRORS,
    CURRENT_USER_EXPERIENCES_SUCCESS,
    CURRENT_USER_EDUCATION_REQUEST,
    CURRENT_USER_EDUCATION_ERRORS,
    CURRENT_USER_EDUCATION_SUCCESS
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
};


const currentUserExperiencesRequest = () => ({
    type: CURRENT_USER_EXPERIENCES_REQUEST,
});

const currentUserExperiencesErrors = errors => ({
    type: CURRENT_USER_EXPERIENCES_ERRORS,
    errors
});

const currentUserExperiencesSuccess = experiences => ({
    type: CURRENT_USER_EXPERIENCES_SUCCESS,
    experiences
});

// CREATE New Experience - Async
export const addNewExperienceAsync = newExperienceData => {
    return dispatch => {
        dispatch(currentUserProfileUpdateRequest());
        return axios.post('/api/profile/experience', newExperienceData)
            .then(res => {
                dispatch(currentUserProfileUpdateSuccess());
            })
            .catch(err => {
                dispatch(currentUserProfileUpdateErrors(err.response.data));
            })
    }
};

// UPDATE Existing Experience - Async
export const updateExperienceAsync = experienceData => {
    return dispatch => {
        dispatch(currentUserProfileUpdateRequest());
        return axios.patch(`/api/profile/experience/${experienceData._id}`, experienceData)
            .then(res => {
                dispatch(currentUserProfileUpdateSuccess());
            })
            .catch(err => {
                dispatch(currentUserProfileUpdateErrors(err.response.data));
            });
    }
};

// DELETE Existing Experience - Async
export const deleteExperienceAsync = experienceId => {
    return dispatch => {
        dispatch(currentUserProfileUpdateRequest());
        return axios.delete(`/api/profile/experience/${experienceId}`)
            .then(res => {
                dispatch(currentUserProfileUpdateSuccess());
            })
            .catch(err => {
                dispatch(currentUserProfileUpdateErrors(err.response.data));
            })
    }
};

// GET All experiences - Async
export const getCurrentUserExperiencesAsync = () => {
    return dispatch => {
        dispatch(currentUserExperiencesRequest());

        return axios.get('/api/profile/experience')
            .then(res => {
                dispatch(currentUserExperiencesSuccess(res.data));
            })
            .catch(err => {
                dispatch(currentUserExperiencesErrors(err.response.data));
            })
    }
};


const currentUserEducationRequest = () => ({
    type: CURRENT_USER_EDUCATION_REQUEST,
});

const currentUserEducationErrors = errors => ({
    type: CURRENT_USER_EDUCATION_ERRORS,
    errors
});

const currentUserEducationSuccess = education => ({
    type: CURRENT_USER_EDUCATION_SUCCESS,
    education
});

// CREATE New Education - Async
export const addNewEducationAsync = newEducationData => {
    return dispatch => {
        dispatch(currentUserProfileUpdateRequest());
        return axios.post('/api/profile/education', newEducationData)
            .then(res => {
                dispatch(currentUserProfileUpdateSuccess());
            })
            .catch(err => {
                dispatch(currentUserProfileUpdateErrors(err.response.data));
            });
    }
};

// DELETE Existing Education - Async
export const deleteEducationAsync = educationId => {
    return dispatch => {
        dispatch(currentUserProfileUpdateRequest());
        return axios.delete(`/api/profile/education/${educationId}`)
            .then(res => {
                dispatch(currentUserProfileUpdateSuccess());
            })
            .catch(err => {
                dispatch(currentUserProfileUpdateErrors(err.response.data));
            });
    }
};

// UPDATE Existing Education - Async
export const updateEducationAsync = educationData => {
    return dispatch => {
        dispatch(currentUserProfileUpdateRequest());
        return axios.patch(`/api/profile/education/${educationData._id}`, educationData)
            .then(res => {
                dispatch(currentUserProfileUpdateSuccess());
            })
            .catch(err => {
                dispatch(currentUserProfileUpdateErrors(err.response.data));
            });
    }
};

// GET All education items - Async
export const getCurrentUserEducationAsync = () => {
    return dispatch => {
        dispatch(currentUserEducationRequest());

        return axios.get('/api/profile/education')
            .then(res => {
                dispatch(currentUserEducationSuccess(res.data));
            })
            .catch(err => {
                dispatch(currentUserEducationErrors(err.response.data));
            })
    }
};