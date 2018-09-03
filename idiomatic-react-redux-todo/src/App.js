import React, {Component} from 'react';
import './css/bootstrap.css';
import './App.css'

import AddTodo from './components/AddTodo.jsx';
import VisibleTodoList from './components/VisibleTodoList';
import Footer from './components/Footer.jsx';

class App extends Component {
    render() {
        return (
            <div className="App">
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
                            <VisibleTodoList />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
