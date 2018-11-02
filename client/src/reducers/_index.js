import { combineReducers } from 'redux';

// Load reducers
import errorReducer from './errorReducer';

import registerReducer from './registerReducer';
import authReducer from './authReducer';

import userReducer from './userReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';
import connectionReducer from './connectionsReducer';

import visitingProfileReducer from './visitingProfileReducer';
import visitingConnectionsReducer from './visitingConnectionsReducer';


const rootReducer = combineReducers({
    register: registerReducer,
    auth: authReducer,
    errors: errorReducer,
    user: userReducer,
    profile: profileReducer,
    posts: postReducer,
    connections: connectionReducer,
    visitingProfile: visitingProfileReducer,
    visitingConnections: visitingConnectionsReducer
});

export default rootReducer;