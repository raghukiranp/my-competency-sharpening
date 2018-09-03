import App from "../App";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from 'react-router-dom';
import React from 'react';

// watch for curly braces around store arguments
// Also no curly braces around the Arrow function implementation
/**
 * react-router v4 breaks and changes the API
 * used react-router-dom import and updated API calls
 */
    // TODO: Try this as a regular react component with render and return
const Root = ({store}) => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route  path='/:filter?' component={App}/>
            </div>
        </BrowserRouter>
    </Provider>
);

export default Root;