//import {loadState, saveState} from "./localStorage";
import {createStore, applyMiddleware } from "redux";
import todoApp from "./reducers/todos";
//import promise from 'redux-promise';
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';

// Returns a Store object with right reducers and Right Subscriptions.
// This alos can be used in testing to spin off multiple stores to test App
/*function wrapDispatchWithMiddlewares(store, middlewares) {
    middlewares.slice().reverse().forEach(middleware => {
        store.dispatch = middleware(store)(store.dispatch);
    })
}*/

// Single point of entry for a Configured Store with all reducers === awesome
const configureStore = () => {
    /*const persistedState = loadState();

    // Commeneted to load from Browser localstorage
    const persistedState = {
        todos:[{
            id:'0',
            text: 'persisted todo',
            completed: false
        }]
    }
    */

    // const middlewares = [promise];
    const middlewares = [thunk];


    // Everytime store dispatches an event to update state, we would like to log it
    // Skip this for production code!
    if(process.env.NODE_ENV !== 'production') {
        //store.dispatch = addLoggingToDispatch(store);
        middlewares.push(createLogger());
    }

    // Add Promise support to handle promises to current Store.
    //middlewares.push(promise);



    // wrapDispatchWithMiddlewares(store, middlewares);

    const store = createStore(
        todoApp,
        applyMiddleware(...middlewares)
    ); // , persistedState);

    console.log("Current Store is: ", store);

    store.subscribe((data) => {
        console.log("Store udapte event recieved and data is: ", data);
        //saveState({todos:store.getState().todos});
    });

    return store;
};

/*
const promise = (store) => {
    //const next = store.dispatch;
    return (next) => {
        // Return a function that has same API as dispatch which accepts action and returns
        return (action) => {
            if (typeof action.then === 'function') {
                // we wait for the action to resolve to an action object.
                // Then trigger original dispacth
                return action.then(next);
            }
            return next(action);
        };
    }
};

const logger = (store) => {
    // save the reference to original store  dispatch
    //const next = store.dispatch;
    return (next) => {
        if (!console.group)
            return next;

        // since we are overriding dispacth function that takes action as argument
        // we return that function to be executed when original store.dispacth is called!
        return (action) => {
            // Below statements will be executed when store.dispatch is invoked!
            console.group(action.type);
            console.log("%c Previous State: ", 'color:gray', store.getState());
            console.log("%c Action: ", 'color:blue', action);
            const returnVal = next(action);
            console.log("%c Next State: ", 'color:green', store.getState());
            console.groupEnd(action.type);
            return returnVal;
        }
    }
}
*/
export default configureStore