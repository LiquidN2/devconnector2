import React from 'react';
import { Router, Switch } from 'react-router-dom';

import history from './history';

import LoginPage from '../components/auth/LoginPage';
import RegisterPage from '../components/auth/RegisterPage';

import PostPage from '../components/PostPage';
import ConnectionPage from '../components/ConnectionPage';

import ProfilePage from '../components/ProfilePage';
import ProfileEditPage from '../components/ProfileEditPage';
import ExperienceEditPage from '../components/ExperienceEditPage';
import EducationEditPage from '../components/EducationEditPage';
import ProfileByIdPage from '../components/ProfileByIdPage';


import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
    return (
        <Router history={history}>
            <Switch>
                <PrivateRoute exact path="/" component={ProfilePage} />
                
                <PublicRoute path="/register" component={RegisterPage} />
                <PublicRoute path="/login" component={LoginPage} />

                <PrivateRoute path="/profile/edit/experience" component={ExperienceEditPage} />
                <PrivateRoute path="/profile/edit/education" component={EducationEditPage} />
                <PrivateRoute path="/profile/edit" component={ProfileEditPage} />
                <PrivateRoute path="/profile/create" component={ProfileEditPage} />
                <PrivateRoute path="/profile/:profileId" component={ProfileByIdPage} />
                <PrivateRoute path="/profile" component={ProfilePage} />
                
                <PrivateRoute path="/posts" component={PostPage} />
                <PrivateRoute path="/connections" component={ConnectionPage} />
            </Switch>
        </Router>
    )
};

export default AppRouter;