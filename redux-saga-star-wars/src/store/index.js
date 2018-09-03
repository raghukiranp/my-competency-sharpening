import { createStore, applyMiddleware } from 'redux';
import createSaga from 'redux-saga'
import starWarsApp from '../reducers'

export default createStore(starWarsApp)

