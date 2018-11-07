import { RECEIVE_API_DATA, REQUEST_API_DATA } from "../constants/action-types";

export const receiveApiData = data =>({
    type: RECEIVE_API_DATA,
    data
    });

export const requestApiData = ()=>(
    {
        type: REQUEST_API_DATA
    });