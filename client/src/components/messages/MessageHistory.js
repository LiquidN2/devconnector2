import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';

import { socket } from '../../socketIOClient/socketIOClient';


import Loading from '../Loading';
import MessageSearchForm from '../form/MessageSearchForm';
import MessageHistoryItem from './MessageHistoryItem';

export default class MessageHistory extends Component {
  componentDidMount = () => {
    // console.log('history comp did mount')
    // socket.on('updateUserList', users => {
    //   console.log(users)
    // })
  }
  
  render() {
    return (
      <div className="message-history">

        <button className="message-start-new">
          <div className="message-start-new__icon"><i className="fas fa-plus"></i></div>
        </button>

        <MessageSearchForm />

        {
          this.props.room.isFetchingAll ? (
            <div className="container u-margin-top-3rem u-margin-bottom-3rem">
              <Loading />
            </div>
          ) : (
            null
          )
        }

        <div className="message-history-items-container">
          {
            this.props.room.all.map(room => {
              return <MessageHistoryItem key={room._id} user={this.props.user} {...room}/>
            })
          }

        </div>

      </div>
    )
  }
}
