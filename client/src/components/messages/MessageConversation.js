import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import { socket } from '../../socketIOClient/socketIOClient';

import MessageForm from '../form/MessageForm';
import MessageIncomingItem from './MessageIncomingItem';
import MessageOutGoingItem from './MessageOutgoingItem';

class MessageConversation extends Component {
  state = { 
    roomId: '1234', 
    messages: []
  };

  componentDidMount = () => {

    socket.on('newServerMessage', message => {
      // console.log(message);
      this.setState(prevState => ({
        messages: [
          ...prevState.messages,
          message
        ]
      }));
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if(!prevProps.conversationId && this.props.conversationId) {
      socket.emit('join', this.props.conversationId);
    }
  }
  
  

  render() {
    
    return (
      <div className="message-conversation">
        <div className="message-conversation-incoming-outgoing">
          <MessageIncomingItem />
          {/* <MessageOutGoingItem /> */}

          {
            this.state.messages.map((message, index) => {
              return <MessageOutGoingItem key={index} message={message.message} />
            })
          }
        </div>

        <MessageForm />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps)(MessageConversation)