import React, { Component } from 'react'

export default class CommentForm extends Component {
  render() {
    return (
      <form className="post-comment__form">
        <textarea name="" id="" className="post-comment__textarea" placeholder="Add comment here..."></textarea>
        <button className="btn btn--small btn--color-primary">Add Comment</button>
      </form>
    )
  }
}
