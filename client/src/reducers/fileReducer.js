import { USER_LOGOUT } from '../constants/authActionTypes';  

import {
  FILE_SINGLE_UPLOAD_REQUEST,
  FILE_SINGLE_UPLOAD_ERRORS,
  FILE_SINGLE_UPLOAD_SUCCESS
} from '../constants/fileActionTypes';

const initialState = {
  isUploading: false,
  uploadProgress: 0,
  downloadURL: ''
};

const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILE_SINGLE_UPLOAD_REQUEST:
      return {
        ...state,
        isUploading: true
      }
    
    case FILE_SINGLE_UPLOAD_ERRORS:
      return {
        ...state,
        isUploading: false
      }

    case FILE_SINGLE_UPLOAD_SUCCESS:
      return {
        ...state,
        isUploading: false,
        downloadURL: action.downloadURL
      }

    case USER_LOGOUT:
      return { ...initialState }

    default:
      return state
  }
}

export default fileReducer;