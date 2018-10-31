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
import { getNumConnectionsAsync } from './../actions/connectionActions';
import { 
  getCurrentUserPostsAsync, 
  createPostAsync, 
  deletePostAsync, 
  postLikeToggleAsync,
  createCommentAsync 
} from './../actions/postActions';

class PostPage extends Component {
  state = {
    pageNumber: 1
  };

  componentDidMount = () => {
    setAuthToken(localStorage.getItem('token'));
    // get current user
    if (!this.props.user._id) {
      this.props.setCurrentUserAsync();
    }

    // get current user posts
    this.props.getCurrentUserPostsAsync();

    // get number of connections
    this.props.getNumConnectionsAsync();
  };

  handleCreatePost = postText => {
    const newPost = {
      name: this.props.user.name,
      avatar: this.props.user.avatar,
      text: postText
    }
    this.props.createPostAsync(newPost);
    // console.log(newPost);
  };

  handleDeletePost = postId => {
    // console.log(postId);
    this.props.deletePostAsync(postId);
  };

  handleLikeToggle = postId => {
    // console.log(postId);
    this.props.postLikeToggleAsync(postId);
  }
  
  handleShowMorePosts = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1
    }), () => {
      this.props.getCurrentUserPostsAsync(this.state.pageNumber);
    });
  };

  handleCreateComment = (postId, commentText) => {
    const { name, avatar } = this.props.user;
    const commentData = {
      name,
      avatar,
      text: commentText
    };
    // console.log(postId, commentData);
    this.props.createCommentAsync(postId, commentData);
  };

  render() {
    
    return (
      <React.Fragment>
        <Header />
        <section className="section-profile">

          <div className="container row">
            <div className="col-1-of-4">
              <div className="row">
                <AvatarBox 
                  user={this.props.user} 
                  numConnections={this.props.connections.numConnections}
                />
              </div>
            </div>

            <div className="col-3-of-4">

              <div className="row">
                <PostEntry 
                  handleCreatePost={this.handleCreatePost} 
                  postErrors={this.props.postErrors}
                />
              </div>
              
              {
                this.props.posts.map(post => {
                  return (
                    <div key={post._id} className="row">
                      <PostItem 
                        {...post}
                        handleLikeToggle={this.handleLikeToggle} 
                        handleDeletePost={this.handleDeletePost}
                        handleCreateComment={this.handleCreateComment}
                      />
                    </div>
                  )
                })
              }

              {
                this.props.isFetchingPosts ? (
                  <div className="container u-margin-bottom-3rem">
                    <Loading />
                  </div>
                ) : null
              }

              <div className="row u-display-flex-row-center">
                <button className="btn-link btn-link--color" onClick={this.handleShowMorePosts}>
                  <i className="fas fa-arrow-down"></i>&nbsp;
                  Show older posts
                </button>
              </div>

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
  connections: state.connections,
  isFetchingPosts: state.posts.isFetching,
  postErrors: state.errors.post,
  posts: state.posts.posts
});

const mapDispatchToProps = {
  setCurrentUserAsync,
  getNumConnectionsAsync,
  getCurrentUserPostsAsync,
  createPostAsync,
  deletePostAsync,
  postLikeToggleAsync,
  createCommentAsync
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);