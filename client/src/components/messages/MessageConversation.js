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
  state = { 
    roomId: '', 
    messages: []
  };

  handleNewServerMessage = message => {
    // this.setState(prevState => ({
    //   messages: [
    //     ...prevState.messages,
    //     message
    //   ]
    // }));
    this.props.addNewMessage(message);
  };

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount = () => {
    // fetch messages
    this.props.getMessagesByRoomIdAsync(this.props.roomId);
    
    this.setState(prevState => ({
      messages: this.props.message.messages
    }))
    
    // tell server room id
    socket.emit('join', this.props.roomId);
    
    // listen to event from server
    socket.on('newServerMessage', this.handleNewServerMessage);

    this.scrollToBottom();
  };
  
  componentDidUpdate = (prevProps, prevState) => {
    this.scrollToBottom();
  }
  
  componentWillUnmount = () => {
    // socket.removeListener('newServerMessage', this.handleNewServerMessage)
    socket.removeAllListeners();
    this.setState(prevState => ({
      messages: []
    }));
  }
  
  
  render() {
    return (
      <div className="message-conversation">
        {
          this.props.message.isFetching ? (
            <div className="container u-margin-top-3rem u-margin-bottom-3rem">
              <Loading />
            </div>
          ) : (
            null
          )
        }

        <div className="message-conversation-incoming-outgoing">
          {/* {this.props.roomId} */}
          {
            this.props.message.messages.map((message, index) => {
              if(message.user._id === this.props.user._id) {
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

        <MessageForm />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  message: state.message
});

const mapDispatchToProps = {
  getMessagesByRoomIdAsync,
  addNewMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageConversation)