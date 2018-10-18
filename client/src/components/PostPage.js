import React, { Component } from 'react';
import { connect } from 'react-redux';

// load components
import Header from './header/Header';
import AvatarBox from './profile/AvatarBox';
import PostEntry from './post/PostEntry';
import PostItem from './post/PostItem';
import Loading from './Loading';

import setAuthToken from './../utils/setAuthToken';

// load actions
import { setCurrentUserAsync } from './../actions/userActions';
import { getCurrentUserPostsAsync, createPostAsync, deletePostAsync } from './../actions/postActions';

class PostPage extends Component {
  componentDidMount = () => {
    setAuthToken(localStorage.getItem('token'));
    // get current user
    if (!this.props.user._id) {
      this.props.setCurrentUserAsync();
    }

    // get current user posts
    this.props.getCurrentUserPostsAsync();
  }

  handleCreatePost = postText => {
    const newPost = {
      name: this.props.user.name,
      avatar: this.props.user.avatar,
      text: postText
    }
    this.props.createPostAsync(newPost);
    // console.log(newPost);
  }

  handleDeletePost = postId => {
    // console.log(postId);
    this.props.deletePostAsync(postId);
  }

  render() {
    
    return (
      <React.Fragment>
        <Header />
        <section className="section-profile">

          <div className="container row">
            <div className="col-1-of-4">
              <div className="row">
                <AvatarBox user={this.props.user} />
              </div>
            </div>

            <div className="col-2-of-4">

              <div className="row">
                <PostEntry handleCreatePost={this.handleCreatePost} />
              </div>
              {
                this.props.isFetchingPosts ? (
                  <div className="container u-margin-bottom-3rem">
                    <Loading />
                  </div>
                ) : null
              }

              {
                this.props.posts.map(post => {
                  return (
                    <div key={post._id} className="row">
                      <PostItem {...post} handleDeletePost={this.handleDeletePost}/>
                    </div>
                  )
                })
              }

            </div>

            <div className="col-1-of-4">
              <div className="row">

              </div>
            </div>

          </div>
        </section>
      </React.Fragment>
    );
  }
};

const mapStateToProps = state => ({
  user: state.user.user,
  isFetchingPosts: state.posts.isFetching,
  posts: state.posts.posts
});

const mapDispatchToProps = {
  setCurrentUserAsync,
  getCurrentUserPostsAsync,
  createPostAsync,
  deletePostAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);