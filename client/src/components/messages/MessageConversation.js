import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux'; 

import { socket } from '../../socketIOClient/socketIOClient';

import MessageForm from '../form/MessageForm';
import MessageIncomingItem from './MessageIncomingItem';
import MessageOutGoingItem from './MessageOutgoingItem';

import { 
  getMessagesByRoomIdAsync,
  addNewMessage 
} from '../../actions/messageActions';

import Loading from '../Loading';

class MessageConversation extends PureComponent {
  // state = { 
  //   roomId: '', 
  //   messages: []
  // };

  // handle new message emitted from socket.io server
  handleNewServerMessage = message => {
    this.props.addNewMessage(message);
  };

  // scroll to the latest message at the bottom
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount = () => {
    const { roomId, message, user } = this.props;

    // fetch messages from DB
    if(!message[roomId] || message[roomId].length === 0){
      this.props.getMessagesByRoomIdAsync(roomId);
    }

    // this.props.getMessagesByRoomIdAsync(this.props.roomId);
    
    this.setState(prevState => ({
      messages: message.messages
    }))
    
    // socket.emit('join', {roomId, userId: user._id, userName: user.name});
        
    // listen to event from server
    socket.on('newServerMessage', this.handleNewServerMessage);

    this.scrollToBottom();
  };
  
  componentDidUpdate = (prevProps, prevState) => {
    // const { roomId, message, user } = this.props;

    // if(prevProps.roomId !== this.props.roomId && !prevProps.user && this.props.user) {
    //   console.log('should join room')
    // }

    this.scrollToBottom();
  }
  
  componentWillUnmount = () => {
    socket.removeListener('newServerMessage', this.handleNewServerMessage)
    // socket.removeAllListeners();
    this.setState(prevState => ({
      messages: []
    }));
  }
  
  
  render() {
    const { roomId, message, user } = this.props;
    const displayedMessages = message[roomId] ? message[roomId] : [];

    return (
      <div className="message-conversation">
        {
          message.isFetching ? (
            <div className="container u-margin-top-3rem u-margin-bottom-3rem">
              <Loading />
            </div>
          ) : (
            null
          )
        }

        <div className="message-conversation-incoming-outgoing">
          {
            displayedMessages.map((message, index) => {
              if(message.user._id === user._id) {
                return <MessageOutGoingItem key={index} {...message}/>
              } else {
                return <MessageIncomingItem key={index} {...message}/>
              }
              
            })
          }
          
          <div 
            style={{ float:"left", clear: "both" }}
            ref={(el) => { this.messagesEnd = el; }}
          >
          </div>
        </div>

        <MessageForm roomId={roomId} isSavingMessages={this.props.isSavingMessages} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // user: state.user.user,
  message: state.message
});

const mapDispatchToProps = {
  getMessagesByRoomIdAsync,
  addNewMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageConversation)