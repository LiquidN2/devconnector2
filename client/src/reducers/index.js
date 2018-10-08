import { combineReducers } from 'redux';

// Load reducers
import registerReducer from './registerReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
    register: registerReducer,
    auth: authReducer,
    errors: errorReducer
});

export default rootReducer;