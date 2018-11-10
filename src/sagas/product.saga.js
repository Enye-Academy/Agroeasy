import { put, call, takeEvery } from 'redux-saga/effects';
import {  productApiData } from "../actions/index";
import { REQUEST_API_DATA } from '../constants/action-types';

const fetchApiData = async ()=>{
    try{
        const response = await fetch("http://localhost:4000/products");

        const data = await response.json();

        return data;

    }catch(e){

        console.log(e);

    }
};

function* getApiData(){
    try{
        const data = yield call(fetchApiData);
        yield put(productApiData(data));

    }catch(e){
       console.log(e);
    }
}

export default function* watchFetchProductData(){
    yield takeEvery(REQUEST_API_DATA, getApiData);
}
