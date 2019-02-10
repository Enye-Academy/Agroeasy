import { combineReducers } from 'redux';

import producerItems from './producerItems';
import contactus from './contactUs';
import signin from './signin';
import signUp  from './signup';

export default combineReducers({
    contactus: contactus.reducers,
    producerItems: producerItems.reducers,
    signin: signin.reducers,
    signup: signUp.reducers,
});
