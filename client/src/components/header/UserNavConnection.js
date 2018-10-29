import React, { Component } from 'react';

export default class UserNavConnection extends Component {
  render() {
    return (
      <div className="user-nav__icon-box">
        <span className="user-nav__icon">
          <i class="far fa-user fa-lg"></i>
        </span>
        <span className="user-nav__notification">7</span>
      </div>
    )
  }
}
