import React, { Component } from 'react';
import { connect } from 'react-redux';

// load components
import Header from './header/Header';
import AvatarBox from './profile/AvatarBox';
import ProfileSkills from './profile/ProfileSkills';
import PostEntry from './post/PostEntry';
import PostItem from './post/PostItem';

import setAuthToken from './../utils/setAuthToken';

// load actions
import { setCurrentUserAsync } from './../actions/userActions';
import { getCurrentUserProfileAsync } from './../actions/profileActions';

class PostPage extends Component {
  componentDidMount = () => {
    setAuthToken(localStorage.getItem('token'));
    // get current user
    if (!this.props.user._id) {
      this.props.setCurrentUserAsync();
    }

    // get current profile
    // if (!this.props.profile._id) {
    //   this.props.getCurrentUserProfileAsync();
    // }
  }

  handleCreatePost = post => {
    console.log(post);
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
                <PostEntry handleCreatePost={this.handleCreatePost}/>
              </div>
              <div className="row">
                <PostItem />
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
  user: state.user.user
});

const mapDispatchToProps = {
  setCurrentUserAsync,
  getCurrentUserProfileAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);