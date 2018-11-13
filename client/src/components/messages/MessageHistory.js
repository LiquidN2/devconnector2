import React, { Component } from 'react';

import MessageSearchForm from '../form/MessageSearchForm';
import MessageHistoryItem from './MessageHistoryItem';

export default class MessageHistory extends Component {
  render() {
    return (
      <div className="message-history">

        <button className="message-start-new">
          <div className="message-start-new__icon"><i className="fas fa-plus"></i></div>
        </button>

        <MessageSearchForm />

        <div className="message-history-items-container">
          <MessageHistoryItem />
          
        </div>

      </div>
    )
  }
}
