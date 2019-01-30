import { combineReducers } from 'redux';

import app from './app';
import signin from './signin';
import signUp  from './signup';
import home from './home';

export default combineReducers({
<<<<<<< HEAD
    app: app.reducers,
=======
    home: home.reducers,
>>>>>>> master
    signin: signin.reducers,
    signup: signUp.reducers,
});
