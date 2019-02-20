import { RESET_STATE, SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './actionTypes';

const initialState = {
    isLoading: false,
};
  
export default (state = initialState, action) => {
    switch (action.type) {
    case SIGNUP_REQUEST:
        return{
            ...state,
            isLoading: true,
        };
    
    case SIGNUP_SUCCESS: {
        const { isSuccessful } = action;
        return {
            ...state,
            isLoading: false,
            isSuccessful,
        };
    }
    case SIGNUP_FAIL:{
        const { status, data: { title } } = action.payload;
            
        return {
            ...state,
            isLoading: false,
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
