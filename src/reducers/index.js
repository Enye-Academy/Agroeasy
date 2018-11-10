import { combineReducers } from "redux";
import data  from "./receiveReducer";

// Combine all reducers as root reducer
export default combineReducers({ data});