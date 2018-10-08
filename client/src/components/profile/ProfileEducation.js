import React from 'react';

import ProfileBox from './ProfileBox';

import ProfileEducationItem from './ProfileEducationItem';

class EducationContent extends React.Component {
    render() {
        const { educations } = this.props;
        return (
            <div className="profile-education__container u-margin-top-3rem">
                { 
                    educations.map(education => {
                        return <ProfileEducationItem key={education._id} {...education}/>
                    }) 
                }
            </div>
        )
    }
}

const ProfileEducation = ProfileBox(EducationContent);

export default ProfileEducation;