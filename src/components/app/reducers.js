import { RESET_STATE,SIGNIN_SUCCESS } from './actionTypes';

const initialState = {
    status: null,
};

export default ( state = { ...initialState }, action) => {

    switch(action.type){

    case SIGNIN_SUCCESS:{
        const { payload: { data, status } } = action;
        return {
            ...state,
            data,
            status,
        };
    }

    case RESET_STATE:
        return { ...initialState };

    default:
        return state;
    }
};
