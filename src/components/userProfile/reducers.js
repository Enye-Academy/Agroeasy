import _cloneDeep from 'lodash.clonedeep';
import { 
    FETCH_USER_DATA,
    REQUEST_USER_DATA, 
    REQUEST_USER_FAILURE, 
    UPDATE_USER_DATA, 
    UPDATE_FAILURE 
} from './actionTypes';

const initialState = {
    error: null,
    isLoading: false,
    userInfo: [],
};

export default (state = { ...initialState }, action ) => {
    switch(action.type){
    case REQUEST_USER_DATA:
        return {
            ...state,
            isLoading: true,
        };
    case FETCH_USER_DATA: {
        const fetchedUserInfo = _cloneDeep(state.userInfo).concat([ action.data ]);
        return {
            ...state,
            fetchedUserInfo,
            isLoading:false,
        };
    }

    case REQUEST_USER_FAILURE:
        return {
            ...state,
            error: action.error,
            isLoading: false,
        };
    case UPDATE_USER_DATA:
        return {
            ...state,
            updatedUserData: action.data,
        };
    case UPDATE_FAILURE: 
        return {
            ...state,
            error: action.error,
        };
    default:
        return state;
    }
};
