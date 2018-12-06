import {takeEvery, put} from 'redux-saga/effects';
import {AnyAction} from 'redux';
import {types} from "../actions/template";
import axios from 'axios';

export function* watchRequestTemplate() {
    yield takeEvery(types.GET_TITLE, getTitle);
}

function* getTitle(action: AnyAction) {
    const response = yield axios.get(`https://jsonplaceholder.typicode.com/users/${Math.floor(Math.random() * Math.floor(10) + 1)}`);

    yield put({
        type: types.GET_TITLE_SUCCESS,
        payload: `${process.env.title} ${action.payload} - ${response.data.name}`
    });
}