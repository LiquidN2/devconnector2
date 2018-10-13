import React, { Component } from 'react';
import { connect } from 'react-redux';

// load components
import Header from './header/Header';
import ProfileBase from './profile/ProfileBase';
import Loading from './Loading';
import ProfileMainForm from './form/ProfileMainForm';

import setAuthToken from './../utils/setAuthToken';

import { getCurrentUserProfileAsync, updateCurrentUserProfileAsync } from './../actions/profileActions';

class ProfileEditPage extends Component {
    componentDidMount() {
        // console.log('component mount');
        setAuthToken(localStorage.getItem('token'));
        if (!this.props.profile._id) {
            this.props.getCurrentUserProfileAsync();
        }
    }

    onProfileMainUpdate = profileData => {
        // console.log(profileData);
        this.props.updateCurrentUserProfileAsync(profileData);
    }

    render() {
        const { isFetching: isFetchingProfile, isUpdating: isUpdatingProfile } = this.props;

        const profileBase = {
            _id: this.props.profile._id,
            user: this.props.profile.user,
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
                        (isFetchingProfile || isUpdatingProfile) ? (
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
                                { this.props.profile._id ? <ProfileBase {...profileBase}/> : null }
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
                                />
                            ) : (
                                <ProfileMainForm />
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
        isFetching: state.profile.isFetching,
        profile: state.profile.profile
    }
}

const mapDispatchToProps = { getCurrentUserProfileAsync, updateCurrentUserProfileAsync };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditPage);