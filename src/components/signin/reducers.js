import { RESET_STATE, SIGNIN_FAIL, SIGNIN_REQUEST, SIGNIN_SUCCESS } from './actionTypes';

const initialState = {
    email: "",
    error: null,
    isLoading: null,
    password: "",
};

export default ( state = { ...initialState }, action) => {

    switch (action.type) {
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

    case SIGNIN_SUCCESS: {
        const { isSuccessful } = action;
        return {
            ...state,
            isLoading: false,
            isSuccessful,
        };
    }

    case SIGNIN_FAIL: {

        const { status, data: { title } } = action.payload;

        return{
            ...state,
            message: title,
            status,
        };
    }

    case RESET_STATE:
        return { ...initialState };
        
    default:
        return state;
    }
};
