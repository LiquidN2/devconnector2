import { USER_LOGOUT } from '../constants/authActionTypes';

import {
  CONNECTION_STATUS_REQUEST,
  CONNECTION_STATUS_ERRORS,
  CONNECTION_STATUS_SUCCESS
} from '../constants/connectionActionTypes';

const initialState = {
  isFetchingConnectionStatus: false,
  visitingUserId: '',
  connected: false,
  pendingRequestFrom: false,
  pendingRequestTo: false
}

const visitingConnectionReducer = (state = initialState, action) => {
  switch(action.type) {

    case CONNECTION_STATUS_REQUEST:
      return {
        ...state,
        isFetchingConnectionStatus: true
      };

    case CONNECTION_STATUS_ERRORS:
      return {
        ...state,
        isFetchingConnectionStatus: false
      };

    case CONNECTION_STATUS_SUCCESS:
      return {
        ...state,
        isFetchingConnectionStatus: false,
        visitingUserId: action.visitingUserId,
        connected: action.connected,
        pendingRequestFrom: action.pendingRequestFrom,
        pendingRequestTo: action.pendingRequestTo
      }

    case USER_LOGOUT:
      return { ...initialState }

    default:
      return state;
  }
}

export default visitingConnectionReducer;