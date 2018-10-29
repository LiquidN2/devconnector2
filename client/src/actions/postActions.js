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
  CURRENT_USER_POSTS_DELETE_SUCCESS,
  CURRENT_USER_POSTS_LIKE_TOGGLE_REQUEST,
  CURRENT_USER_POSTS_LIKE_TOGGLE_ERRORS,
  CURRENT_USER_POSTS_LIKE_TOGGLE_SUCCESS,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_ERRORS,
  CREATE_COMMENT_SUCCESS
} from './../constants/actionTypes';

const currentUserPostsRequest = () => ({
  type: CURRENT_USER_POSTS_REQUEST
});

const currentUserPostsErrors = errors => ({
  type: CURRENT_USER_POSTS_ERRORS,
  errors
});

const currentUserPostsSuccess = (posts, page) => ({
  type: CURRENT_USER_POSTS_SUCCESS,
  page,
  posts
});


export const getCurrentUserPostsAsync = pageNumber => {
  return dispatch => {
    dispatch(currentUserPostsRequest());
    return axios.get(`/api/posts?pageNumber=${pageNumber}`)
      .then(res => {
        dispatch(currentUserPostsSuccess(res.data, pageNumber));
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

const currentUserPostLikeToggleRequest = () => ({
  type: CURRENT_USER_POSTS_LIKE_TOGGLE_REQUEST
});

const currentUserPostLikeToggleErrors = errors => ({
  type: CURRENT_USER_POSTS_LIKE_TOGGLE_ERRORS,
  errors
});

const currentUserPostLikeToggleSuccess = updatedPost => ({
  type: CURRENT_USER_POSTS_LIKE_TOGGLE_SUCCESS,
  updatedPost
});

export const postLikeToggleAsync = postId => {
  return dispatch => {
    dispatch(currentUserPostLikeToggleRequest());
    return axios.post(`/api/posts/like/${postId}`)
      .then(res => {
        dispatch(currentUserPostLikeToggleSuccess(res.data.updatedPost));
      })
      .catch(err => {
        dispatch(currentUserPostLikeToggleErrors(err.response.data));
      });
  };
};


const createCommentRequest = () => ({
  type: CREATE_COMMENT_REQUEST
});

const createCommentErrors = errors => ({
  type: CREATE_COMMENT_ERRORS,
  errors
});

const createCommentSuccess = (postId, newComment) => ({
  type: CREATE_COMMENT_SUCCESS,
  postId,
  newComment
});

export const createCommentAsync = (postId, commentData) => {
  return dispatch => {
    dispatch(createCommentRequest());
    return axios.post(`/api/posts/comment/${postId}`, commentData)
      .then(res => {
        dispatch(createCommentSuccess(postId, res.data));
      })
      .catch(err => {
        dispatch(createCommentErrors(err.response.data));
      });
  };
};