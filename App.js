import React, {Component} from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import Reducers from './app/redux/reducers'
import App from './app/screens/app'
import createSagaMiddleware from 'redux-saga'
import sages from './app/redux/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    Reducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sages);

export default class extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}