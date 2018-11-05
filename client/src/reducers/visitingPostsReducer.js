import { USER_LOGOUT } from '../constants/authActionTypes';

import {
  POSTS_BY_USER_ID_REQUEST,
  POSTS_BY_USER_ID_ERRORS,
  POSTS_BY_USER_ID_SUCCESS,
  
  POST_COUNT_BY_USER_ID_REQUEST,
  POST_COUNT_BY_USER_ID_ERRORS,
  POST_COUNT_BY_USER_ID_SUCCESS
} from '../constants/postActionTypes';

const initialState = {
  isFetchingCount: false,
  isFetching: false,
  isUpdating: false,
  isUpdated: false,
  numPosts: 0,
  posts: []
};

const visitingPostsReducer = (state = initialState, action) => {
  switch (action.type) {

    case POST_COUNT_BY_USER_ID_REQUEST:
      return {
        ...state,
        isFetchingCount: true
      };

    case POST_COUNT_BY_USER_ID_ERRORS:
      return {
        ...state,
        isFetchingCount: false
      };

    case POST_COUNT_BY_USER_ID_SUCCESS:
      return {
        ...state,
        isFetchingCount: false,
        numPosts: action.numPosts
      };

    case USER_LOGOUT:
      return { ...initialState }

    default:
      return state;
  }
}

export default visitingPostsReducer;