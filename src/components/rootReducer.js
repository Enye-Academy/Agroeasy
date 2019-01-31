import { combineReducers } from 'redux';

import app from './app';
import signin from './signin';
import signUp  from './signup';
import home from './home';

export default combineReducers({
    app: app.reducers,
    home: home.reducers,
    signin: signin.reducers,
    signup: signUp.reducers,
});
