import { combineReducers } from 'redux';

import signin from './signin';
import signUp  from './signup';
import contactus from './contactUs';
import userprofile from './userProfile';

export default combineReducers({
    contactus: contactus.reducers,
    signin: signin.reducers,
    signup: signUp.reducers,
    userprofile: userprofile.reducers,
});
