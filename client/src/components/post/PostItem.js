import React, { Component } from 'react';
import moment from 'moment';

import Comments from './Comments';
import PostItemMenu from './PostItemMenu';



export default class PostItem extends Component {
  state = {
    showComments: false,
    showMenu: false
  };

  handleToggleComments = event => {
    event.preventDefault();
    this.setState(prevState => ({
      showComments: !prevState.showComments
    }));
  };

  handleLikeToggle = event => {
    event.preventDefault();
    const postId = this.props._id
    this.props.handleLikeToggle(postId);
  }

  handleTogglePostItemMenu = event => {
    event.preventDefault();
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  }

  render() {
    let isLikedBySelf;
    let classNameLikeButton = 'post-interactions__item';

    if (this.props.likes.length > 0) {
      isLikedBySelf = this.props.likes.findIndex(like => {
        return like.user === this.props.user;
      });
    }

    if (isLikedBySelf > -1) {
      classNameLikeButton = classNameLikeButton + ' post-interactions__item--active'
    }
    

    return (
      <div className="post-box">
        <div className="post-header">
          <div className="post-user">
            <img src={this.props.avatar} alt={this.props.name} className="post-user__photo" />
            <div className="post-user__description">
              <p className="post-user__name">{this.props.name}</p>
              <p className="post-user__title">Developer</p>
            </div>
          </div>
          <div className="post-tools-wrapper">
            <div className="post-time">{moment(this.props.date).fromNow()}</div>
            <div className="post-tools__menu">
              <button className="btn-tool-menu__toggle" onClick={this.handleTogglePostItemMenu}>
                <i className="fas fa-ellipsis-h"></i>
              </button>
              { this.state.showMenu ? <PostItemMenu id={this.props._id} handleDeletePost={this.props.handleDeletePost} /> : null }
            </div>
          </div>
        </div>

        <div className="post-content">
          <p className="post-content__text">{this.props.text}</p>
        </div>

        <div className="post-interactions">
          <button className={classNameLikeButton} onClick={this.handleLikeToggle}>
            <span className="post-interactions__icon">
              <i className="far fa-thumbs-up"></i>
            </span>
            <span className="post-interactions__text">
              { this.props.likes.length > 0 ? this.props.likes.length : null }
            </span>
          </button>
          <button className="post-interactions__item" onClick={this.handleToggleComments}>
            <span className="post-interactions__icon">
              <i className="far fa-comment-alt"></i>
            </span>
            <span className="post-interactions__text">
              { this.props.comments.length > 0 ? this.props.comments.length : null }
            </span>
          </button>
          <button className="post-interactions__item">
            <span className="post-interactions__icon">
              <i className="far fa-share-square"></i>
            </span>
          </button>
        </div>
        { this.state.showComments ? <Comments comments={this.props.comments}/> : null }
      </div>
    )
  }
}
