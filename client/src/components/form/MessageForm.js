import React, { Component } from 'react';
import { connect } from 'react-redux';

import { socket } from '../../socketIOClient/socketIOClient';


import { ControlledTextInput } from './ControlledInput';

class MessageForm extends Component {
  state = { message: '' };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // console.log(this.state.message);
    const { message } = this.state; 
    socket.emit('newClientMessage', { 
      userId: this.props.user._id, 
      message 
    });

    this.setState({
      message: ''
    });
  };

  render() {
    return (
      <form className="message-conversation-form" onSubmit={this.handleFormSubmit} >
        <button className="message-conversation-form__button">
          <span className="message-conversation-form__icon">
            <i className="far fa-file-image fa-lg"></i>
          </span>
        </button>

        <ControlledTextInput
          fieldName="message"
          fieldId="message"
          className="message-conversation-form__input"
          fieldValue={this.state.message}
          onChange={this.handleInputChange}
          required={true}
          isDisabled={this.props.isFetchingUser}
        />
      </form>
    )
  }
}

const mapStateToProps = state => ({
  isFetchingUser: state.user.isFetching,
  user: state.user.user
});

export default connect(mapStateToProps)(MessageForm);