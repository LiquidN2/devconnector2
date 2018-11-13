import React, { Component } from 'react';

export default class messageHistoryItem extends Component {
  render() {
    return (
      <div className="message-history-item">
        <img src="img/user-1.jpg" alt="user 4" className="message-history-item__user-photo" />
        <div className="message-history-item__content">
          <p className="message-history-item__user-name">John Doe</p>
          <p className="message-history-item__text">Lorem ipsum dolor sit amet kosa...</p>
        </div>
      </div>
    )
  }
}
