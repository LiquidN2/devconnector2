import React, { Component } from 'react';

import ConnectionItemMenu from './ConnectionItemMenu';

export default class ConnectionItem extends Component {
  state = {
    menuIsOpen: false
  };

  handleToggleMenu = event => {
    event.preventDefault();
    this.setState(prevState => ({
      menuIsOpen: !prevState.menuIsOpen
    }));
  };

  handleCloseMenu = () => {
    this.setState(prevState => ({
      menuIsOpen: false
    }));
  }

  render() {
    return (
      <div className="connection-item">
        <img src={this.props.user.avatar} alt={this.props.user.name} className="connection-item__user-photo" />
        <div className="connection-item__main-content">
          <div className="connection-item__description">
            <p className="connection-item__user-name">{this.props.user.name}</p>
            <p className="connection-item__user-text connection-item__user-text--color">
            {
              this.props.profile.company ? (
                `${this.props.profile.status} at ${this.props.profile.company}`
              ) : (
                this.props.profile.status
              )
            }
            </p>
            <p className="connection-item__user-text">{this.props.profile.location}</p>
          </div>
          <div className="connection-item__menu">
            <button className="btn btn--small connection-item__button" onClick={this.handleToggleMenu}>
              <i className="fas fa-ellipsis-h"></i>
            </button>
            {
              this.state.menuIsOpen ? (
                <ConnectionItemMenu
                  connectionId={this.props._id}
                  userId={this.props.user._id} 
                  onClickOutside={this.handleCloseMenu} 
                  handleRemoveConnection={this.props.handleRemoveConnection}
                />
               ) : null
            }
          </div>
        </div>
      </div>
    )
  }
}
