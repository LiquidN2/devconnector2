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

const initialState = {
  isFetching: false,
  isUpdating: false,
  isUpdated: false,
  posts: []
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case CURRENT_USER_POSTS_ERRORS:
      return {
        ...state,
        isFetching: false,
        posts: []
      }
    
    case CURRENT_USER_POSTS_SUCCESS:
      return {
        isFetching: false,
        posts: action.posts
      }
    
    case CURRENT_USER_POSTS_DELETE_REQUEST:
    case CURRENT_USER_POSTS_CREATE_REQUEST:
      return {
        ...state,
        isUpdating: true,
        isUpdated: false
      }

    case CURRENT_USER_POSTS_DELETE_ERRORS:
    case CURRENT_USER_POSTS_CREATE_ERRORS:
      return {
        ...state,
        isUpdating: false,
        isUpdated: false
      }

    case CURRENT_USER_POSTS_CREATE_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        isUpdated: true,
        posts: [
          action.newPost,
          ...state.posts
        ]
      }
    
    case CURRENT_USER_POSTS_DELETE_SUCCESS:
      const updatedPost = state.posts.filter(post => {
        return post._id !== action.deletedPostId
      });

      return {
        ...state,
        isUpdating: false,
        isUpdated: true,
        posts: updatedPost
      }

    default:
      return state;
  }
}

export default postReducer;