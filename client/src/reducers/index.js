import { combineReducers } from 'redux';

// Load reducers
import registerReducer from './registerReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';
import connectionReducer from './connectionsReducer';

const rootReducer = combineReducers({
    register: registerReducer,
    auth: authReducer,
    errors: errorReducer,
    user: userReducer,
    profile: profileReducer,
    posts: postReducer,
    connections: connectionReducer
});

export default rootReducer;