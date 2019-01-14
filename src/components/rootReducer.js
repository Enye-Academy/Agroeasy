import { combineReducers } from 'redux';

import app from './app';
import signin from './signin';
import signUp  from './signup';

export default combineReducers({
    app: app.reducers,
    signin: signin.reducers,
    signup: signUp.reducers,
});
