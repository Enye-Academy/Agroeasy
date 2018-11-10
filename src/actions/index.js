import { RECEIVE_API_DATA, REQUEST_API_DATA } from "../constants/action-types";

export const producerApiData = data =>({
    type: RECEIVE_API_DATA,
    data
    });

export const requestProducerData = ()=>(
    {
        type: REQUEST_API_DATA
    });


export const productApiData = data =>({
    type: RECEIVE_API_DATA,
    data
    });

export const requestProductData = ()=>(
    {
        type: REQUEST_API_DATA
    });