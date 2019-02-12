import { combineReducers } from 'redux';

import signin from './signin';
import signUp  from './signup';
import contactus from './contactUs';
import app from './app';

export default combineReducers({
    app: app.reducers,
    contactus: contactus.reducers,
    signin: signin.reducers,
    signup: signUp.reducers,
});
