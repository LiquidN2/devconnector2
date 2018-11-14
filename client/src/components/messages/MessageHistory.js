import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Loading from '../Loading';
import MessageSearchForm from '../form/MessageSearchForm';
import MessageHistoryItem from './MessageHistoryItem';

export default class MessageHistory extends Component {
  componentDidMount = () => {
    // console.log('history comp did mount')
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
            // this.props.room.all.map(room => {
            //   return <MessageHistoryItem key={room._id} {...room} />
            // })

            this.props.room.all.map(room => {
              const { name, avatar } = room.withUserId; 
              return (
                <NavLink 
                  to={`/messages/room/${room._id}`} 
                  key={room._id}
                  className="message-history-item"
                  activeClassName="message-history-item--active"
                >
                  <img src={avatar} alt={name} className="message-history-item__user-photo" />
                  <div className="message-history-item__content">
                    <p className="message-history-item__user-name">{name}</p>
                    <p className="message-history-item__text">Lorem ipsum dolor sit amet kosa...</p>
                  </div>  
                  {/* <MessageHistoryItem {...room} /> */}
                </NavLink>
              )
            })
          }

        </div>

      </div>
    )
  }
}
