import {
  CURRENT_USER_POSTS_REQUEST,
  CURRENT_USER_POSTS_ERRORS,
  CURRENT_USER_POSTS_SUCCESS
} from './../constants/actionTypes';

const initialState = {
  isFetching: false,
  isUpdating: false,
  isUpdated: false,
  posts: []
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default postReducer;