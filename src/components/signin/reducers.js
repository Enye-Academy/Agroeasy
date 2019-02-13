import { RESET_STATE, SIGNIN_REQUEST } from './actionTypes';

const initialState = {
    email: "",
    isLoading: false,
    password: "",
};

export default ( state = { ...initialState }, action) => {

    switch(action.type){
    case SIGNIN_REQUEST: {
        const { payload: { email, password } } = action;
        return {
            ...state,
            email,
            isLoading: true,
            password,
        };
    }

    case RESET_STATE:
        return { ...initialState };

    default:
        return state;
    }
};
