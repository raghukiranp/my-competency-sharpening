import React, { Component } from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import devicesProvider from './providers'
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import { DeviceList } from './devices'
import { FeedsList } from './feeds'
import './App.css';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `JWT ${token}`);
    return fetchUtils.fetchJson(url, options);
}

const dataProvider = devicesProvider('https://api.spaceagelabs.com.sg/v2/Spaceagelabs', httpClient);
//const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
class App extends Component {
  render() {
    return (
        <Admin dashboard={Dashboard} authProvider={authProvider}  dataProvider={dataProvider} >
            <Resource name="devices" list={DeviceList} />
            <Resource name="feeds" list={FeedsList} />
        </Admin>
    );
  }
}

export default App;
