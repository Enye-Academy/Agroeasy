import { SIGNUP_REQUEST } from './actionTypes';

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

    default:
        return state;
    }
};
