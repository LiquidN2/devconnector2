import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// load components
import Header from './header/Header';
import ProfileBase from './profile/ProfileBase';
import ProfileSummary from './profile/ProfileSummary';
import ProfileExperience from './profile/ProfileExperience';
import ProfileEducation from './profile/ProfileEducation';
import ProfileSkills from './profile/ProfileSkills';
import Loading from './Loading';

import setAuthToken from './../utils/setAuthToken';

// load actions
import { setCurrentUserAsync } from './../actions/userActions';

class ProfileByIdPage extends Component {
  componentDidMount = () => {
    setAuthToken(localStorage.getItem('token'));
    // get current user
    if (!this.props.user._id) {
      this.props.setCurrentUserAsync();
    }
  }
  

  render() {
    return (
      <React.Fragment>
        <Header />
        <section className="section-profile">

          <div className="container row">
            <div className="col-1-of-4">
              <div className="row">
                { this.props.match.params.profileId }
                {/* <ProfileBase /> */}
              </div>

            </div>

          </div>
        </section>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = {
  setCurrentUserAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileByIdPage);