import { combineReducers } from 'redux';

// Load reducers
import registerReducer from './registerReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
    register: registerReducer,
    auth: authReducer,
    errors: errorReducer,
    profile: profileReducer
});

export default rootReducer;