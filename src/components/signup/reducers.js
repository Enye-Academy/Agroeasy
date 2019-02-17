import {  SIGNUP_SUCCESS, SIGNUP_REQUEST } from './actionTypes';

const initialState = {
    data: [],
    isLoading: false,
    registered:false, 
};
  
export default (state = initialState, action) => {
    switch (action.type) {
    case SIGNUP_REQUEST:
        return{
            ...state,
            data: [],
            isLoading: true,
            registered: false,
        };

    case SIGNUP_SUCCESS:{
        const { message, success: isSignupSuccessful } = action.payload;
        return {
            ...state,
            data: action.payload,
            isLoading: false,
            isSignupSuccessful,
            message,
            registered: true,
        };
    }

    default:
        return state;
    }
};
