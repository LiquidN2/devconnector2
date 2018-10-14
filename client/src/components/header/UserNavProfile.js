import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserNavDropDown from './UserNavDropDown';

const menuList = [{
    url: '/profile', 
    label: 'Profile'
},{
    url: '/posts', 
    label: 'Posts'
},{
    url: '/connections', 
    label: 'Connections'
}]

class UserNavProfile extends Component {
    state = {
        isUserMenuDropDown: false
    };

    onHandleUserMenuToggle = () => {
        this.setState(prevState => {
            return { isUserMenuDropDown: !prevState.isUserMenuDropDown };
        });
    }
       
    render() {
        return (
            <div className="user-nav__user">
                <img
                    id="user-menu-btn"
                    src={this.props.avatar}
                    className="user-nav__user-photo"
                    onClick={this.onHandleUserMenuToggle}
                    alt={this.props.name}
                />

                <UserNavDropDown isOpen={this.state.isUserMenuDropDown} menuList={menuList}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        avatar: state.user.user ? state.user.user.avatar : '',
        name: state.user.user ? state.user.user.name : ''
    }
};

export default connect(mapStateToProps)(UserNavProfile);