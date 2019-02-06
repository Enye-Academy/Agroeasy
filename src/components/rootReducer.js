import { combineReducers } from 'redux';

import addItem from './addItem';
import contactus from './contactUs';
import signin from './signin';
import signUp  from './signup';

export default combineReducers({
    addItem: addItem.reducers,
    contactus: contactus.reducers,
    signin: signin.reducers,
    signup: signUp.reducers,
});
