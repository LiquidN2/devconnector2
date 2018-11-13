import React, { Component } from 'react';

export default class MessageForm extends Component {
  render() {
    return (
      <form action="" className="message-conversation-form">
        <button className="message-conversation-form__button">
          <span className="message-conversation-form__icon">
            <i className="far fa-file-image fa-lg"></i>
          </span>
        </button>
        <input type="text" className="message-conversation-form__input" placeholder="Type a message..." autoFocus />

      </form>
    )
  }
}
