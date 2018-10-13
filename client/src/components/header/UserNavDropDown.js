import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userLogout } from './../../actions/authActions';

class UserNavDropDown extends Component {

    userLogout = () => {
        this.props.userLogout();
    }

    render() {
        const { menuList } = this.props;
        let dropDownClassName = "user-nav__dropdown";
        if (this.props.isOpen) dropDownClassName += " user-nav__dropdown--show";
        
        return (
            <ul className={dropDownClassName}>
                <li className="user-nav__dropdown__arrow">
                    <div className="arrow-up"></div>
                </li>

                {   
                    menuList.map((item, index) => {
                        return (
                            <Link key={index} to={item.url}>
                                <li key={index} className="user-nav__dropdown__item">
                                    <span className="user-nav__dropdown__link">{item.label}</span>
                                </li>
                            </Link>
                        )
                    })
                }

                <li className="user-nav__dropdown__item" onClick={this.userLogout}>
                    <span className="user-nav__dropdown__link">Logout</span>
                </li>
            </ul>
        )
    }
}

const mapDispatchToProps = { userLogout };

export default connect(undefined, mapDispatchToProps)(UserNavDropDown);