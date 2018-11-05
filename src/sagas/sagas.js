import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { REQUEST_API_DATA, receiveApiData } from "../actions/index";

import { fetchApiData } from '../api';

function* getApiData(){
    try{
        const data = yield call(fetchApiData);

        yield put(receiveApiData(data));

    }catch(e){
        console.log(e);
    }
}

export default function* mySaga(){
    yield takeLatest(REQUEST_API_DATA, getApiData);
}