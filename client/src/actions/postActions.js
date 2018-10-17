import axios from 'axios';

import { 
  CURRENT_USER_POSTS_REQUEST,
  CURRENT_USER_POSTS_ERRORS,
  CURRENT_USER_EXPERIENCES_SUCCESS 
} from './../constants/actionTypes';
import { dispatch } from 'rxjs/internal/observable/pairs';

const currentUserPostsRequest = () => ({
  type: CURRENT_USER_POSTS_REQUEST
});

const currentUserPostseErrors = errors => ({
  type: CURRENT_USER_POSTS_ERRORS,
  errors
});

const currentUserPostsSuccess = posts => ({
  type: CURRENT_USER_POSTS_SUCCESS,
  posts
});

export const getCurrentUserPostsAsync = () => {
  return dispatch => {

  }
};