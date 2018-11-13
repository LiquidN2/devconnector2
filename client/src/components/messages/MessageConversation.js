import React, { Component } from 'react';

import MessageForm from '../form/MessageForm';
import MessageIncomingItem from './MessageIncomingItem';
import MessageOutGoingItem from './MessageOutgoingItem';

export default class MessageConversation extends Component {
  render() {
    return (
      <div className="message-conversation">
        <div className="message-conversation-incoming-outgoing">
          <MessageIncomingItem />
          <MessageOutGoingItem />
        </div>

        <MessageForm />
      </div>
    )
  }
}
