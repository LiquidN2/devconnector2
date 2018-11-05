import axios from 'axios';

import { 
  CURRENT_USER_POSTS_REQUEST,
  CURRENT_USER_POSTS_ERRORS,
  CURRENT_USER_POSTS_SUCCESS,

  CURRENT_USER_POST_COUNT_REQUEST,
  CURRENT_USER_POST_COUNT_ERRORS,
  CURRENT_USER_POST_COUNT_SUCCESS,
  
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
  CREATE_COMMENT_SUCCESS,

  POSTS_BY_USER_ID_REQUEST,
  POSTS_BY_USER_ID_ERRORS,
  POSTS_BY_USER_ID_SUCCESS,

  POST_COUNT_BY_USER_ID_REQUEST,
  POST_COUNT_BY_USER_ID_ERRORS,
  POST_COUNT_BY_USER_ID_SUCCESS,

  CREATE_COMMENT_ON_VISIT_REQUEST,
  CREATE_COMMENT_ON_VISIT_ERRORS,
  CREATE_COMMENT_ON_VISIT_SUCCESS,

  POST_LIKE_TOGGLE_ON_VISIT_REQUEST,
  POST_LIKE_TOGGLE_ON_VISIT_ERRORS,
  POST_LIKE_TOGGLE_ON_VISIT_SUCCESS
} from './../constants/postActionTypes';


const currentUserPostCountRequest = () => ({
  type: CURRENT_USER_POST_COUNT_REQUEST
});

const currentUserPostCountErrors = errors => ({
  type: CURRENT_USER_POST_COUNT_ERRORS,
  errors
});

const currentUserPostCountSuccess = ({ numPosts }) => ({
  type: CURRENT_USER_POST_COUNT_SUCCESS,
  numPosts
});

export const getCurrentUserPostCountAsync = () => {
  return dispatch => {
    dispatch(currentUserPostCountRequest());

    // setTimeout(() => {
    //   dispatch(currentUserPostCountSuccess(10));
    // }, 500);
    
    return axios.get(`/api/posts/count`)
      .then(res => {
        dispatch(currentUserPostCountSuccess(res.data));
      })
      .catch(err => {
        dispatch(currentUserPostCountErrors(err.response.data));
      });
  }
};


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


const postCountByUserIdRequest = () => ({
  type: POST_COUNT_BY_USER_ID_REQUEST
});

const postCountByUserIdErrors = errors => ({
  type: POST_COUNT_BY_USER_ID_ERRORS,
  errors
});

const postCountByUserIdSuccess = ({ numPosts }) => ({
  type: POST_COUNT_BY_USER_ID_SUCCESS,
  numPosts
});

export const getPostCountByUserIdAsync = userId => {
  return dispatch => {
    dispatch(postCountByUserIdRequest());
    // dispatch(postCountByUserIdSuccess({ numPosts: 10 }));

    return axios.get(`/api/posts/count/user/${userId}`)
      .then(res => {
        dispatch(postCountByUserIdSuccess(res.data));
      })
      .catch(err => {
        dispatch(postCountByUserIdErrors(err.response.data));
      })
  }
};


const postsByUserIdRequest = () => ({
  type: POSTS_BY_USER_ID_REQUEST
});

const postsByUserIdErrors = errors => ({
  type: POSTS_BY_USER_ID_ERRORS,
  errors
});

const postsByUserIdSuccess = (posts, page) => ({
  type: POSTS_BY_USER_ID_SUCCESS,
  page,
  posts
});

export const getPostsByUserIdAsync = (userId, pageNumber) => {
  return dispatch => {
    dispatch(postsByUserIdRequest());
    return axios.get(`/api/posts/user/${userId}?pageNumber=${pageNumber}`)
      .then(res => {
        dispatch(postsByUserIdSuccess(res.data, pageNumber));
      })
      .catch(err => {
        dispatch(postsByUserIdErrors(err.response.data));
      });
  }
};

const createCommentOnVisitRequest = () => ({
  type: CREATE_COMMENT_ON_VISIT_REQUEST
});

const createCommentOnVisitErrors = errors => ({
  type: CREATE_COMMENT_ON_VISIT_ERRORS,
  errors
});

const createCommentOnVisitSuccess = (postId, newComment) => ({
  type: CREATE_COMMENT_ON_VISIT_SUCCESS,
  postId,
  newComment
});

export const createCommentOnVisitAsync = (postId, commentData) => {
  return dispatch => {
    dispatch(createCommentOnVisitRequest());
    return axios.post(`/api/posts/comment/${postId}`, commentData)
      .then(res => {
        dispatch(createCommentOnVisitSuccess(postId, res.data));
      })
      .catch(err => {
        dispatch(createCommentOnVisitErrors(err.response.data));
      });
  };
};


const PostLikeToggleOnVisitRequest = () => ({
  type: POST_LIKE_TOGGLE_ON_VISIT_REQUEST
});

const PostLikeToggleOnVisitErrors = errors => ({
  type: POST_LIKE_TOGGLE_ON_VISIT_ERRORS,
  errors
});

const PostLikeToggleOnVisitSuccess = updatedPost => ({
  type: POST_LIKE_TOGGLE_ON_VISIT_SUCCESS,
  updatedPost
});

export const postLikeToggleOnVisitAsync = postId => {
  return dispatch => {
    dispatch(PostLikeToggleOnVisitRequest());
    return axios.post(`/api/posts/like/${postId}`)
      .then(res => {
        dispatch(PostLikeToggleOnVisitSuccess(res.data.updatedPost));
      })
      .catch(err => {
        dispatch(PostLikeToggleOnVisitErrors(err.response.data));
      });
  };
};