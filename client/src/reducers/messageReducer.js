import { USER_LOGOUT } from '../constants/authActionTypes';

import {
  MESSAGES_BY_ROOM_ID_REQUEST,
  MESSAGES_BY_ROOM_ID_ERRORS,
  MESSAGES_BY_ROOM_ID_SUCCESS,

  ADD_NEW_MESSAGE
} from '../constants/messageActionTypes';

const initialState = {
  isFetching: false,
  roomId: '',
  messages: []
};

const messageReducer = (state = initialState, action) => {
  switch(action.type) {
    case MESSAGES_BY_ROOM_ID_REQUEST:
      return {
        ...state,
        isFetching: true,
        roomId: action.roomId  
      }

    case MESSAGES_BY_ROOM_ID_ERRORS:
      return {
        ...state,
        isFetching: false  
      }

    case MESSAGES_BY_ROOM_ID_SUCCESS:
      return {
        ...state,
        isFetching: false,
        messages: action.messages
      }
    
    case ADD_NEW_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          action.message
        ]
      }

    case USER_LOGOUT:
      return { ...initialState }

    default:
      return state;
  }
}

export default messageReducer;