import {takeEvery, put} from 'redux-saga/effects';
import {AnyAction} from 'redux';
import {types} from "../actions/template";
import axios from "axios/index";

export function* watchRequestTemplate() {
    yield takeEvery(types.GET_TITLE, getTitle);
}

function* getTitle(action: AnyAction) {
    console.log(3);
    const response = yield axios.get(`https://jsonplaceholder.typicode.com/users/${Math.floor(Math.random() * Math.floor(10) + 1)}`);
    console.log(response.data);
    console.log(response.data.name + action.payload);
    yield put({
        type: types.GET_TITLE_SUCCESS,
        payload: response.data.name + " " + action.payload
    });
}