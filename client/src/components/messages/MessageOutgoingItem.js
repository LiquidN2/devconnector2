import React, { Component } from 'react';

export default class MessageOutgoingItem extends Component {
  render() {
    return (
      <div className="message-conversation-outgoing">
          <div className="message-conversation-outgoing__content">
          <p className="message-conversation-outgoing__text">
            {/* Lorem ipsum dolor sit amet. */}
            {this.props.message}
          </p>
          <p className="message-conversation-outgoing__time">
            30 minutes ago
          </p>
        </div>
      </div>
    )
  }
}
