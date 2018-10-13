import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UniversalSearchForm from './../form/UniversalSearchForm';

import UserNavProfile from './UserNavProfile';
import UserNavNotification from './UserNavNotification';
import UserNavMessenger from './UserNavMessenger';

export default class HeaderTop extends Component {
    
    onSubmit = query => {
        console.log(query);
    }

    render() {
        return (
            <div className="header-container">
                <div className="container">
                    <Link to="/" className="logo">
                        <i className="fas fa-code fa-2x"></i>
                    </Link>

                    <UniversalSearchForm onSubmit={this.onSubmit}/>

                    <nav className="user-nav">
                        <UserNavMessenger />
                        <UserNavNotification />
                        <UserNavProfile />
                    </nav>
                </div>
            </div>
        )
    }
}
