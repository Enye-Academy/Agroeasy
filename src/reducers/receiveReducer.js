import { RECEIVE_API_DATA  } from "../constants/action-types";
import { initialState } from '../constants/states';


export default (state = initialState, action)=>{
    switch(action.type){
        case RECEIVE_API_DATA:
            return action.data;
        default:
        return state;
    }
};
