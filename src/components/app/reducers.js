import Cookies from 'cookies-js';

import { SET_COOKIE, REMOVE_COOKIE, SIGNUP_SUCCESS, RESET_STATE } from './actionTypes';
import { EXPIRATION } from './constants';

const initialState = {
    isLoggedIn: null,
    token: "",
    user: {},
};

export default ( state = { ...initialState }, action) => {
    
    switch (action.type) {
    case SET_COOKIE:    {
        const { token, user } = action.payload.data;
        Cookies.set(token, { expires: EXPIRATION });

        return {
            ...state,
            isLoggedIn: true,
            token,
            user,
        };
    }

    case SIGNUP_SUCCESS:{
        const { status, data } = action.payload;
        return {
            ...state,
            data,
            status,
        };
    }

    case REMOVE_COOKIE: {
        Cookies.expire(state.token);
        
        return { 
            ...state,
            isLoggedIn: false,
            token: null,
            user: {},
        };
    }
    case RESET_STATE:

        return { ...initialState };
    default:
        return state;
    }
}; 
