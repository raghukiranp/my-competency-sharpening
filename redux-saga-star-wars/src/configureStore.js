import {createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas/sagas'
import starWars from "./reducers";

// Single point of entry for a Configured Store with all reducers === awesome
const configureStore = () => {

    const middlewares = [];

    // Everytime store dispatches an event to update state, we would like to log it
    // Skip this for production code!
    if(process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    const sagaMiddleware = createSagaMiddleware();
    middlewares.push(sagaMiddleware);

    const store = createStore(
        starWars,
        applyMiddleware(...middlewares)
    );

    sagaMiddleware.run(mySaga);
    return store;
};
export default configureStore