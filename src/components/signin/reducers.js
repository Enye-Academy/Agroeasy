import { SIGNIN_REQUEST } from './actionTypes';

const initialState = {
    email: "",
    password: "",
};

export default ( state = { ...initialState }, action) => {

    switch(action.type){
    case SIGNIN_REQUEST: {
        const { payload: { email, password } } = action;
        return {
            ...state,
            email,
            password,
        };
    }

    default:
        return state;
    }
};
