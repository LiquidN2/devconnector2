import React, { Component } from 'react';
import { connect } from 'react-redux';

// load components
import Header from './header/Header';
import ProfileBase from './profile/ProfileBase';
import Loading from './Loading';
import ProfileMainForm from './form/ProfileMainForm';

import setAuthToken from './../utils/setAuthToken';

import { setCurrentUserAsync } from './../actions/userActions';
import { getCurrentUserProfileAsync, updateCurrentUserProfileAsync } from './../actions/profileActions';

class ProfileEditPage extends Component {
    componentDidMount() {
        setAuthToken(localStorage.getItem('token'));

        // fetching current user
        if (!this.props.user._id) {
            this.props.setCurrentUserAsync();
        }

        // fetching current profile
        if (!this.props.profile._id) {
            this.props.getCurrentUserProfileAsync();
        }
    }

    onProfileMainUpdate = profileData => {
        console.log(profileData);
        this.props.updateCurrentUserProfileAsync(profileData);
    }

    render() {
        const { isFetchingUser, isFetchingProfile, isUpdatingProfile } = this.props;

        const profileBase = {
            user: this.props.user,
            _id: this.props.profile._id,
            githubUser: this.props.profile.githubUser,
            handle: this.props.profile.handle,
            website: this.props.profile.website,
            location: this.props.profile.location,
            company: this.props.profile.company,
            social: this.props.profile.social,
            status: this.props.profile.status
        };

        const { bio, skills } = this.props.profile;

        return (
            <React.Fragment>
                <Header path={this.props.match.path}/>
                <section className="section-profile">
                    {
                        (isFetchingUser || isFetchingProfile ) ? (
                            <div className="container u-margin-bottom-3rem">
                                <Loading />
                            </div>
                        ) : null
                    }

                    <div className="container row">
                        <div className="col-1-of-4">
                            <div className="row">
                                { this.props.user._id ? <ProfileBase {...profileBase}/> : null }
                            </div>
                        </div>

                        <div className="col-3-of-4">
                        { 
                            this.props.profile._id ? ( 
                                <ProfileMainForm
                                    bio={bio}
                                    skills={skills}
                                    {...profileBase}
                                    onProfileMainUpdate={this.onProfileMainUpdate}
                                    isUpdatingProfile={isUpdatingProfile}
                                />
                            ) : (
                                <ProfileMainForm onProfileMainUpdate={this.onProfileMainUpdate} />
                            )
                        }
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        isFetchingUser: state.user.isFetching,
        user: state.user.user,
        isFetchingProfile: state.profile.isFetching,
        isUpdatingProfile: state.profile.isUpdating,
        profile: state.profile.profile
    }
}

const mapDispatchToProps = { getCurrentUserProfileAsync, updateCurrentUserProfileAsync, setCurrentUserAsync };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditPage);