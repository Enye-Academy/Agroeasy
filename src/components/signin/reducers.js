import { RESET_STATE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from './actionTypes';

const initialState = {
    email: "",
    error: null,
    isLoading: null,
    password: "",
};

export default ( state = { ...initialState }, action) => {

    switch(action.type){
    case SIGNIN_REQUEST: {
        const { payload: { email, password } } = action;
        return {
            ...state,
            email,
            error: null,
            isLoading: true,
            password,
        };
    }

    case SIGNIN_SUCCESS:{
        const { isSuccessful } = action;
        return {
            ...state,
            failureMessage: !isSuccessful ? action.payload.data.title: "",
            isLoading: false,
            isSuccessful,
            status: !isSuccessful ? action.payload.status: "",
        };
    }

    case RESET_STATE:
        return { ...initialState };
        
    default:
        return state;
    }
};
