import axios from 'axios';

import { 
  CURRENT_USER_POSTS_REQUEST,
  CURRENT_USER_POSTS_ERRORS,
  CURRENT_USER_POSTS_SUCCESS,
  CURRENT_USER_POSTS_CREATE_REQUEST,
  CURRENT_USER_POSTS_CREATE_ERRORS,
  CURRENT_USER_POSTS_CREATE_SUCCESS,
  CURRENT_USER_POSTS_DELETE_REQUEST,
  CURRENT_USER_POSTS_DELETE_ERRORS,
  CURRENT_USER_POSTS_DELETE_SUCCESS 
} from './../constants/actionTypes';

const currentUserPostsRequest = () => ({
  type: CURRENT_USER_POSTS_REQUEST
});

const currentUserPostsErrors = errors => ({
  type: CURRENT_USER_POSTS_ERRORS,
  errors
});

const currentUserPostsSuccess = posts => ({
  type: CURRENT_USER_POSTS_SUCCESS,
  posts
});

export const getCurrentUserPostsAsync = () => {
  return dispatch => {
    dispatch(currentUserPostsRequest());
    return axios.get('/api/posts')
      .then(res => {
        dispatch(currentUserPostsSuccess(res.data));
      })
      .catch(err => {
        dispatch(currentUserPostsErrors(err.response.data));
      });
  }
};


const currentUserPostsCreateRequest = () => ({
  type: CURRENT_USER_POSTS_CREATE_REQUEST
});

const currentUserPostsCreateErrors = errors => ({
  type: CURRENT_USER_POSTS_CREATE_ERRORS,
  errors
});

const currentUserPostsCreateSuccess = newPost => ({
  type: CURRENT_USER_POSTS_CREATE_SUCCESS,
  newPost
});

export const createPostAsync = newPostData => {
  return dispatch => {
    dispatch(currentUserPostsCreateRequest());
    return axios.post('/api/posts', newPostData)
      .then(res => {
        dispatch(currentUserPostsCreateSuccess(res.data));
      })
      .catch(err => {
        dispatch(currentUserPostsCreateErrors(err.response.data));
      });
  };
};

const currentUserPostDeleteRequest = () => ({
  type: CURRENT_USER_POSTS_DELETE_REQUEST
});

const currentUserPostDeleteErrors = errors => ({
  type: CURRENT_USER_POSTS_DELETE_ERRORS,
  errors
});

const currentUserPostDeleteSuccess = deletedPostId => ({
  type: CURRENT_USER_POSTS_DELETE_SUCCESS,
  deletedPostId
});

export const deletePostAsync = postId => {
  return dispatch => {
    dispatch(currentUserPostDeleteRequest());
    return axios.delete(`/api/posts/${postId}`)
      .then(res => {
        dispatch(currentUserPostDeleteSuccess(res.data._id));
      })
      .catch(err => {
        dispatch(currentUserPostDeleteErrors(err.response.data));
      });
  };
};