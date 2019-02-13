import { RESET_STATE,SIGNIN_SUCCESS,SIGNUP_SUCCESS } from './actionTypes';

const initialState = {
    siginStatus: null,
    signupStatus: null,
};

export default ( state = { ...initialState }, action) => {

    switch(action.type){

    case SIGNIN_SUCCESS:{
        const { payload: { data, status } } = action;
        return {
            ...state,
            siginStatus: status,
            signinData: data,
        };
    }

    case SIGNUP_SUCCESS:{
        const { data: signupData, status: signupStatus } = action.payload;
        return {
            ...state,
            signupData,
            signupStatus,
        };
    }

    case RESET_STATE:
        return { ...initialState };

    default:
        return state;
    }
};
