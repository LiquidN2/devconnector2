import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';

import AuthPage from '../components/AuthPage';
import LoginPage from '../components/auth/LoginPage';
import RegisterPage from '../components/auth/RegisterPage';
import ProfilePage from '../components/ProfilePage';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
    return (
        <Router history={history}>
            <Switch>
                <PrivateRoute exact path="/" component={ProfilePage} />
                <PublicRoute path="/register" component={RegisterPage} />
                <PublicRoute path="/login" component={LoginPage} />
                <PrivateRoute path="/profile" component={ProfilePage} />
            </Switch>
        </Router>
    )
}

export default AppRouter;