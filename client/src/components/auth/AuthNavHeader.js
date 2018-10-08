import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const AuthNavHeader = props => {
    return (
        <ul className="tab-group">
            <NavLink to="/login" className="tab-group__item" activeClassName="tab-group__item--active">
                <span className="tab-group__link">Login</span>
            </NavLink>
            <NavLink to="/register" className="tab-group__item" activeClassName="tab-group__item--active">
                <span className="tab-group__link">Register</span>
            </NavLink>
        </ul>
    );
};

export default AuthNavHeader;
