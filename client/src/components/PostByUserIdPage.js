import React, { Component } from 'react';
import { connect } from 'react-redux';

import setAuthToken from './../utils/setAuthToken';

// load components
import Header from './header/Header';
import AvatarBox from './profile/AvatarBox';
import PostEntry from './post/PostEntry';
import PostItem from './post/PostItem';
import Loading from './Loading';

// load actions
import { setCurrentUserAsync } from '../actions/userActions';
import { getProfileByUserIdAsync } from '../actions/profileActions';
import { 
  getConnectionStatusAsync, 
  getConnectionCountByUserIdAsync 
} from '../actions/connectionActions';
import { getPostCountByUserIdAsync } from '../actions/postActions';

let selfUserId, visitingUserId;

class PostByUserIdPage extends Component {
  state = {
    pageNumber: 1
  };

  componentDidMount = () => {
    visitingUserId = this.props.match.params.userId;

    setAuthToken(localStorage.getItem('token'));
    // get current user
    if (!this.props.user._id) {
      this.props.setCurrentUserAsync();
    }

    if (this.props.match.params.userId) {
      visitingUserId = this.props.match.params.userId;

      // get profile by user Id
      this.props.getProfileByUserIdAsync(visitingUserId);

      // connection status with this user by userId
      this.props.getConnectionStatusAsync(visitingUserId);

      /// get number of connections
      this.props.getConnectionCountByUserIdAsync(visitingUserId);

      this.props.getPostCountByUserIdAsync(visitingUserId);
    }
  }
  
  handleShowMorePosts = () => {

  };

  render() {
    selfUserId = this.props.user._id;

    const { numConnections } = this.props.visitingConnections;
    const { numPosts } = this.props.visitingPosts;
    return (
      <React.Fragment>
        <Header visitingUserId={visitingUserId} />
        <section className="section-profile">

          <div className="container row">
            <div className="col-1-of-4">
              <div className="row">
                {
                  this.props.visitingProfile._id ? (
                    <AvatarBox 
                      user={this.props.visitingProfile.user} 
                      profile={this.props.visitingProfile}
                      numConnections={numConnections}
                      numPosts={numPosts}
                      visitingUserId={visitingUserId}
                    />
                  ) : null
                }
              </div>
            </div>

            <div className="col-3-of-4">
              <div className="row u-display-flex-row-center">
                <button 
                  className="btn-link btn-link--color" 
                  onClick={this.handleShowMorePosts}
                >
                  <i className="fas fa-arrow-down"></i>&nbsp;
                  Show older posts
                </button>
              </div>
            </div>

          </div>
        </section>
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => ({
  user: state.user.user,
  isFetchingVisitingProfile: state.visitingProfile.isFetching,
  visitingProfile: state.visitingProfile.profile,
  visitingConnections: state.visitingConnections,
  visitingPosts: state.visitingPosts
});

const mapDispatchToProps = {
  setCurrentUserAsync,
  getProfileByUserIdAsync,
  getConnectionStatusAsync,
  getConnectionCountByUserIdAsync,
  getPostCountByUserIdAsync
};
export default connect(mapStateToProps, mapDispatchToProps)(PostByUserIdPage);
