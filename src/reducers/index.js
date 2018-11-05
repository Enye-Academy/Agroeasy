import { combineReducers } from "redux";
import {articleReducer, data} from "./articleReducer";

// Combine all reducers as root reducer
export default combineReducers({articles: articleReducer, data});