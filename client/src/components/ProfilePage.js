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

import { getCurrentUserProfileAsync } from './../actions/profileActions';

class ProfilePage extends Component {
    componentDidMount() {
        setAuthToken(localStorage.getItem('token'));
        if (!this.props.profile._id) {
            this.props.getCurrentUserProfileAsync();
        }
    }

    render() {
        const { isFetching: isFetchingProfile } = this.props;
        
        const profileBase = {
            user: this.props.profile.user,
            githubUser: this.props.profile.githubUser,
            handle: this.props.profile.handle,
            website: this.props.profile.website,
            location: this.props.profile.location,
            social: this.props.profile.social
        };

        const { bio, skills, experience, education } = this.props.profile;

        return (
            <React.Fragment>
                <Header />
                <section className="section-profile">

                    {
                        isFetchingProfile ? (
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
                                    this.props.profile._id ? (
                                        <ProfileBase {...profileBase} />
                                    ) : (
                                        null
                                    )
                                }
                            </div>
                            <div className="row">
                                <Link to="/profile/edit" className="btn btn--color-primary btn--full u-center-text">
                                    Edit Profile
                                </Link>
                            </div>
                        </div>

                        <div className="col-2-of-4">
                            <div className="row">
                                <ProfileSummary 
                                    boxTitle="Summary" 
                                    text={bio || ''} 
                                />
                            </div>
                            <div className="row">
                                <ProfileExperience 
                                    boxTitle="Experience" 
                                    experiences={experience || []} 
                                />
                            </div>
                            <div className="row">
                                <ProfileEducation 
                                    boxTitle="Education" 
                                    educations={education || []} 
                                />
                            </div>
                        </div>
                        
                        <div className="col-1-of-4">
                            <div className="row">
                                <ProfileSkills 
                                    boxTitle="Skills" 
                                    skills={skills || []} 
                                />
                            </div>
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

const mapDispatchToProps = { getCurrentUserProfileAsync };

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);