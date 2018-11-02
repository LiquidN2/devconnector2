import React, { Component } from 'react';
import { connect } from 'react-redux';

import setAuthToken from '../utils/setAuthToken';

// load components
import Header from './header/Header';
import ProfileBase from './profile/ProfileBase';
import ProfileSummary from './profile/ProfileSummary';
import ProfileExperience from './profile/ProfileExperience';
import ProfileEducation from './profile/ProfileEducation';
import ProfileSkills from './profile/ProfileSkills';
import Loading from './Loading';

// load actions
import { setCurrentUserAsync } from '../actions/userActions';

import {
  getCurrentUserProfileAsync, 
  getProfileByUserIdAsync 
} from '../actions/profileActions';

import { 
  getConnectionStatusAsync,
  addConnectionAsync 
} from '../actions/connectionActions'; 

let selfUserId,
    selfProfileId, 
    visitingUserId,
    visitingProfileId;

class ProfileByIdPage extends Component {

  componentDidMount = () => {

    setAuthToken(localStorage.getItem('token'));
    // get current user
    if (!this.props.user._id) {
      this.props.setCurrentUserAsync();
    }

    if (!this.props.profile._id) {
      this.props.getCurrentUserProfileAsync();
    }

    if (this.props.match.params.userId) {
      visitingUserId = this.props.match.params.userId;

      // get profile by user Id
      this.props.getProfileByUserIdAsync(visitingUserId);

      // connection status with this user by userId
      this.props.getConnectionStatusAsync(visitingUserId);
    }
  };

  handleConnectionAdd = () => {
    if (selfUserId && selfProfileId && visitingUserId && visitingProfileId) {
      const data = {
        userId: visitingUserId,
        profileId: visitingProfileId,
        selfProfileId
      };

      this.props.addConnectionAsync(data);
      // console.log('adding connection', data);
    }
  };

  render() {
    selfUserId = this.props.user._id;
    selfProfileId = this.props.profile._id;
    visitingProfileId = this.props.visitingProfile._id;

    // profile info
    const { isFetchingVisitingProfile, isAddingConnection, connectionSent } = this.props;
    const profileBase = {
      user: this.props.visitingProfile.user,
      githubUser: this.props.visitingProfile.githubUser,
      handle: this.props.visitingProfile.handle,
      website: this.props.visitingProfile.website,
      location: this.props.visitingProfile.location,
      social: this.props.visitingProfile.social
    };
    const { bio, skills, experience, education } = this.props.visitingProfile;

    // connection status
    const { connected, pendingRequestFrom, pendingRequestTo } = this.props.visitingConnections;
    const allowAddConnection = !connected && !pendingRequestFrom && !pendingRequestTo;


    return (
      <React.Fragment>
        <Header visitingUserId={visitingUserId} />
        <section className="section-profile">

          {
            isFetchingVisitingProfile ? (
              <div className="container u-margin-bottom-3rem">
                <Loading />
              </div>
            ) : (
                null
              )
          }

          <div className="container row">
            <div className="col-1-of-4">
              <div className="row">
                {
                  visitingProfileId ? <ProfileBase {...profileBase} /> : null
                }
              </div>

              {
                (visitingProfileId && allowAddConnection && !connectionSent) ? (
                  <div className="row">
                    <button 
                      className="btn btn--color-primary btn--full u-center-text"
                      onClick={this.handleConnectionAdd}
                      disabled={isAddingConnection}
                    > 
                      <i className="fas fa-user-plus"></i>&nbsp;
                      Add Connections
                    </button>
                  </div>
                ) : null
              }

            </div>

            {
              visitingProfileId ? (
                <React.Fragment>
                  <div className="col-2-of-4">
                    {
                      bio ? (
                        <div className="row">
                          <ProfileSummary
                            boxTitle="Summary"
                            text={bio}
                          />
                        </div>
                      ) : null
                    }

                    {
                      experience.length > 0 ? (
                        <div className="row">
                          <ProfileExperience
                            boxTitle="Experience"
                            experiences={experience}
                          />
                        </div>
                      ) : null
                    }
                    
                    {
                      education.length > 0 ? (
                        <div className="row">
                          <ProfileEducation
                            boxTitle="Education"
                            educations={education}
                          />
                        </div>
                      ) : null
                    }
                  </div>

                  <div className="col-1-of-4">
                    {
                      skills.length > 0 ? (
                        <div className="row">
                          <ProfileSkills
                            boxTitle="Skills"
                            skills={skills || []}
                          />
                        </div>
                      ) : null
                    }
                  </div>
                </React.Fragment>
              ) : null
            }

          </div>
        </section>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  profile: state.profile.profile,
  isFetchingVisitingProfile: state.visitingProfile.isFetching,
  visitingProfile: state.visitingProfile.profile,
  visitingConnections: state.visitingConnections,
  isAddingConnection: state.connections.isAddingConnection,
  connectionSent: state.connections.connectionSent
});

const mapDispatchToProps = {
  setCurrentUserAsync,
  getProfileByUserIdAsync,
  getConnectionStatusAsync,
  getCurrentUserProfileAsync,
  addConnectionAsync
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileByIdPage);