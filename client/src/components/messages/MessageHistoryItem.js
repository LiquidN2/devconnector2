import React, { Component } from 'react';

export default class messageHistoryItem extends Component {
  render() {
    const {name, avatar} = this.props.withUserId;
    return (
      <div className="message-history-item">
        <img src={avatar} alt={name} className="message-history-item__user-photo" />
        <div className="message-history-item__content">
          <p className="message-history-item__user-name">{name}</p>
          <p className="message-history-item__text">Lorem ipsum dolor sit amet kosa...</p>
        </div>
      </div>
    )
  }
}
