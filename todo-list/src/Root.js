import React from 'react'
import Provide form 'react-redux'
import App from './App'

const Root = ({store}) => (
    <Provider store={ store} >
        <App />
    </Provider>
);