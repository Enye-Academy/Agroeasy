import { SIGNUP_REQUEST } from './actionTypes';

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

    default:
        return state;
    }
};
