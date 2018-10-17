import React, { Component } from 'react'

export default class PostItem extends Component {


  render() {
    return (
      <div className="post-box">
        <div className="post-header">
          <div className="post-user">
            <img src="/img/user-1.jpg" alt="" className="post-user__photo" />
            <div className="post-user__description">
              <p className="post-user__name">John Doe</p>
              <p className="post-user__title">Developer</p>
            </div>
          </div>
          <div className="post-tools-wrapper">
            <div className="post-time">6 hrs</div>
            <div className="post-tools__menu">
              <button className="btn-tool-menu__toggle post-menu__button">
                <i className="fas fa-ellipsis-h"></i>
              </button>
              <div className="post-tools__nav">
                <button className="post-tools__nav-item btn-tool-menu">Edit post</button>
                <button className="post-tools__nav-item btn-tool-menu">Delete post</button>
              </div>
            </div>
          </div>
        </div>

        <div className="post-content">
          <p className="post-content__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima eos nisi autem nihil
            expedita magni sequi doloribus excepturi illum! Soluta et quasi provident recusandae
            nostrum eius deserunt ipsa fugiat sit.
          </p>
        </div>

        <div className="post-interactions">
          <button className="post-interactions__item post-interactions__item--active">
            <span className="post-interactions__icon">
              <i className="far fa-thumbs-up"></i>
            </span>
            <span className="post-interactions__text">20</span>
          </button>
          <button className="post-interactions__item">
            <span className="post-interactions__icon">
              <i className="far fa-comment-alt"></i>
            </span>
            <span className="post-interactions__text">8</span>
          </button>
          <button className="post-interactions__item">
            <span className="post-interactions__icon">
              <i className="far fa-share-square"></i>
            </span>
          </button>
        </div>

        <div className="post-comment">
          <div className="post-comment__item">
            <img src="/img/user-3.jpg" alt="" className="post-comment__user-photo" />
            <div className="post-comment__content">
              <div className="post-comment__header">
                <span className="post-comment__user-name">Jack Brown</span>
                <span className="post-time">5 hrs</span>
              </div>
              <p className="post-comment__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae
                doloremque quis iure sint nam
              </p>
            </div>
          </div>
          <div className="post-comment__item">
            <img src="/img/user-2.jpg" alt="" className="post-comment__user-photo" />
            <div className="post-comment__content">
              <div className="post-comment__header">
                <span className="post-comment__user-name">Jane Smith</span>
                <span className="post-time">4 hrs</span>
              </div>
              <p className="post-comment__text">
                Quis iure sint nam, officia veritatis illum assumenda placeat
                accusamus pariatur provident perspiciatis eligendi tempore hic debitis autem
                laborum?
              </p>
            </div>
          </div>
          <div className="post-comment__show-more">
            <button className="btn-link btn-link--color">
              <i className="fas fa-arrow-down"></i>
              Show more comments
                </button>
          </div>
          <form className="post-comment__form">
            <textarea name="" id="" className="post-comment__textarea" placeholder="Add comment here..."></textarea>
            <button className="btn btn--small btn--color-primary">Add Comment</button>
          </form>
        </div>

      </div>
    )
  }
}
