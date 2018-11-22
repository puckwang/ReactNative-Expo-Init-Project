import { all, fork } from 'redux-saga/effects';
import {watchRequestTemplate} from "./template";
export default function* rootSaga() {
    yield all([
        watchRequestTemplate()
    ]);
}