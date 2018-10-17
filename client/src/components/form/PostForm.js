import React, { Component } from 'react';

import { ControlledTextArea } from './ControlledInput';

export default class PostForm extends Component {
  state = { post: '' };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  onSubmit = event => {
    event.preventDefault();
    const { post } = this.state;
    this.props.handleCreatePost(post);
  };

  render() {
    return (
      <form className="post-form" onSubmit={this.onSubmit}>
        <ControlledTextArea
          className="post-form__textarea"
          fieldId="post"
          fieldName="post"
          fieldValue={this.state.post}
          onChange={this.handleInputChange}
          placeholder="What's on your mind?"
          autoFocus
        />
        <button className="btn btn--small btn--color-primary">Post</button>
      </form>
    );
  }
}
