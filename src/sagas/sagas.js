import { put, call, takeLatest } from 'redux-saga/effects';
import {  receiveApiData } from "../actions/index";
import { REQUEST_API_DATA } from '../constants/action-types';

import { fetchApiData } from '../api';

function* getApiData(){
    try{
        const data = yield call(fetchApiData);
        yield put(receiveApiData(data));

    }catch(e){
       console.log(e);
    }
}

export default function* rootSaga(){
    yield takeLatest(REQUEST_API_DATA, getApiData);
}