import { combineReducers } from "redux";
import data  from "./articleReducer";

// Combine all reducers as root reducer
export default combineReducers({ data});