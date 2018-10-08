import React from 'react';

const ProfileBox = ProfileBoxContentComponent => {
    return class extends React.Component {
        render() {
            return (
                <div className="profile-box">
                    <h2 className="profile-heading u-margin-bottom-3rem">{this.props.boxTitle}</h2>
                    <hr className="profile-text-separater" />
                    <ProfileBoxContentComponent {...this.props} />
                </div>
            )
        }
    }
};

export default ProfileBox;