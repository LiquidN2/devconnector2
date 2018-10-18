import React, { Component } from 'react';

export default class PostItemMenu extends Component {
  handleDeletePost = () => {
    const { id } = this.props;    
    this.props.handleDeletePost(id);
  }

  render() {
    return (
      <div className="post-tools__nav post-tools__nav--show">
        <div className="post-tools__arrow"><div className="arrow-up"></div></div>
        <button className="post-tools__nav-item btn-tool-menu">Edit post</button>
        <button className="post-tools__nav-item btn-tool-menu" onClick={this.handleDeletePost}>Delete post</button>
      </div>
    )
  }
}
