//import {loadState, saveState} from "./localStorage";
import {createStore, applyMiddleware } from "redux";
import todoApp from "./reducers/todos";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';

// Single point of entry for a Configured Store with all reducers === awesome
const configureStore = () => {

    // const middlewares = [promise];
    const middlewares = [thunk];


    // Everytime store dispatches an event to update state, we would like to log it
    // Skip this for production code!
    if(process.env.NODE_ENV !== 'production') {
        //store.dispatch = addLoggingToDispatch(store);
        middlewares.push(createLogger());
    }

    const store = createStore(
        todoApp,
        applyMiddleware(...middlewares)
    ); // , persistedState);


    return store;
};
export default configureStore