import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import * as actions from "../src/actions";
import {getPeopleList, getIsFetching, getErrorMessage} from "./reducers/people";
import PeopleList from "./components/PeopleList";

class App extends Component {
    componentDidMount() {
        // React component lifecycle Hook
        //this.props.fetchStarWarsRequest();
    }

    componentDidUpdate(prevProps) {
        // React component lifecycle Hook
        //this.props.fetchStarWarsRequest();
    }

    render() {
        const {peopleList, isFetching, errorMessage} = this.props;
        if (isFetching && !peopleList.length) {
            console.log("Fetching data from starWars API");
            return (
                <div id="loader">Loading...</div>
            );
        }
        if (errorMessage && !peopleList.length) {
            console.log("ERROR!!! Fetching data from starWars API");
            return (
                <div id="loader1">Error Fetching Data, if you run into cors error, install CORS extensions on your Browser, refresh the page and retry...</div>
            )
        }
        console.log(this.props);
        return (
            <div className="App">
                <h1>Redux Sagas with Star wars</h1>
                <PeopleList people={this.props.peopleList} />
                <button onClick={this.props.fetchStarWarsRequest}>Refresh People List</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        peopleList: getPeopleList(state),
        isFetching: getIsFetching(state),
        errorMessage: getErrorMessage(state)
    }
};

App = connect(
    mapStateToProps,
    actions
)(App);
export default App;
