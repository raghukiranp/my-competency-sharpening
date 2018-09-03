import React, {Component} from 'react';
import './css/bootstrap.css';
import './App.css'
import {Provider} from 'react-redux';

import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';
import Footer from './components/Footer.jsx';
import store from './store/index';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                                <h2>Add todo's here</h2>
                                <div id="custom-search-input">
                                    <AddTodo/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                                <TodoList/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                                <Footer/>
                            </div>
                        </div>
                    </div>
                </Provider>
            </div>

        );
    }
}

export default App;
