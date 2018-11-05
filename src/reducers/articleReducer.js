import { ADD_ARTICLE, RECEIVE_API_DATA  } from "../constants/action-types";
import { initialState } from '../constants/states';


// Reducer to add article
export const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return [...state, action.article];
        default:
            return state;
    }
};

export default (state = initialState, {type, data})=>{
    switch(type){
        case RECEIVE_API_DATA:
            return data;
        default:
        return state;
    }
};