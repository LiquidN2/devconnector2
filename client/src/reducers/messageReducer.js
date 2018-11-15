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
      const fetchedResults = {
        ...state,
        isFetching: false
        // ,messages: action.messages
      };

      if(action.messages.length > 0) {
        const { roomId } = action.messages[0];
        fetchedResults[roomId] = action.messages;
      }
      
      return fetchedResults;
    

    case ADD_NEW_MESSAGE:
      const newMsgAdded = {
        ...state
        // ,messages: [
        //   ...state.messages,
        //   action.message
        // ]
      }

      if(action.message.roomId) {
        const { roomId } = action.message;
        const messages = state[roomId] || [];
        newMsgAdded[roomId] = [
          ...messages, 
          action.message
        ]
      }

      return newMsgAdded;

    case USER_LOGOUT:
      return { ...initialState }

    default:
      return state;
  }
}

export default messageReducer;