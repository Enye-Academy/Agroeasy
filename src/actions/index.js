import { ADD_ARTICLE, RECEIVE_API_DATA, REQUEST_API_DATA } from "../constants/action-types";

// Action to add article to store
export const addArticle = article => ({
    type: ADD_ARTICLE,
    article
});


export const receiveApiData = data =>({
    type: RECEIVE_API_DATA,
    data
    });

export const requestApiData = ()=>(
    {
        type: REQUEST_API_DATA
    });