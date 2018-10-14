import React, { Component } from 'react';
import { connect } from 'react-redux';

// load components
import Header from './header/Header';
import ProfileBase from './profile/ProfileBase';
import ProfileMainForm from './form/ProfileMainForm';
import Loading from './Loading';

import setAuthToken from './../utils/setAuthToken';

import { setCurrentUserAsync } from './../actions/userActions';

import { updateCurrentUserProfileAsync } from './../actions/profileActions';

class ProfileCreatePage extends Component {
    componentDidMount = () => {
        setAuthToken(localStorage.getItem('token'));

        if (!this.props.user._id) {
            this.props.setCurrentUserAsync();
        }
    }
    
    onProfileMainUpdate = profileData => {
        this.props.updateCurrentUserProfileAsync(profileData);
    }

    render() {
        const { isFetchingUser } = this.props;

        const profileBase = {
            user: this.props.user
        };

        return (
            <React.Fragment>
                <Header />
                <section className="section-profile">
                {
                    isFetchingUser ? (
                        <div className="container u-margin-bottom-3rem">
                            <Loading />
                        </div>
                    ) : null
                }
                    <div className="container row">
                        <div className="col-1-of-4">
                            <div className="row">
                                { this.props.user._id ? <ProfileBase {...profileBase} /> : null }
                            </div>
                        </div>

                        <div className="col-3-of-4">
                            <ProfileMainForm 
                                onProfileMainUpdate={this.onProfileMainUpdate}
                            />
                        </div>
                    </div>
                
                </section>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetchingUser: state.user.isFetching,
        user: state.user.user
    }
};

const mapDispatchToProps = { setCurrentUserAsync, updateCurrentUserProfileAsync };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCreatePage);