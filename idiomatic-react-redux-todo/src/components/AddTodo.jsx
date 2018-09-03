import React from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../actions/index';
import '../css/bootstrap.css';
import '../App.css'
let AddTodo = ({dispatch}) => {
    let input;

    return (
        <div className="input-group col-md-12">
            <input type="text"  className="form-control input-lg" placeholder="Add todo"  ref={node => {
                input = node;
            }} onKeyPress={(e) => {
                if (e.key === "Enter") {
                    dispatch(addTodo(e.target.value));
                    e.target.value = '';
                }
            }}/>
            <span className="input-group-btn">
                <button className="btn btn-info btn-lg" type= "button" onClick={() => {
                    dispatch(addTodo(input.value));
                    input.value = '';
                }}>
                    <i className="glyphicon glyphicon-plus"></i>
                </button>
            </span>
        </div>
    );
};
export default connect()(AddTodo);