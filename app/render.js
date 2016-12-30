import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import ForgotPassword from './components/ForgotPassword';
import ConfirmEmail from './components/Confirm';
import UserList from './components/UserList';
import Layout from './components/Layout';
import Login from './components/Login';
import Todo from './components/todo/TodoList';
import NotFound from './components/NotFound';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Login}/>
            <Route path="forgot" component={ForgotPassword}/>
            <Route path="confirm" component={ConfirmEmail}/>
            <Route path="user-list" component={UserList}/>
            <Route path="todo" component={Todo}/>
            <Route path="*" component={NotFound}/>
        </Route>

    </Router>
);
ReactDOM.render(routes, document.getElementById('app'));

