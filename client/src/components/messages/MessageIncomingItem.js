import React, { Component } from 'react';

export default class MessageIncomingItem extends Component {
  render() {
    return (
      <div className="message-conversation-incoming">
        <img src="/img/user-1.jpg" alt="user 5" className="message-conversation-incoming__user-photo" />
        <div className="message-conversation-incoming__content">
          <p className="message-conversation-incoming__text">
            Lorem ipsum dolor sit amet, id fugit molestiae nec, ad mea quodsi admodum atomorum, sit ad natum
            facilisis. Qui no illum suavitate, ne mel oratio latine voluptatibus, suas aliquando ad vis. Ut
            virtute dolorem deserunt sed, et sea consulatu dignissim. Vix ferri soluta no, sint omnis choro vel at. Nec
            ea ceteros singulis pericula.
          </p>
          <p className="message-conversation-incoming__time">
            1 hour ago
          </p>
        </div>
      </div>
    )
  }
}
