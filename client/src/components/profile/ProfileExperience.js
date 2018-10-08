import React from 'react';

import ProfileBox from './ProfileBox';

import ProfileExperienceItem from './ProfileExperienceItem';

class ExperienceContent extends React.Component {
    render() {
        const { experiences } = this.props;
        return (
            <div className="profile-experience__container u-margin-top-3rem">
                { 
                    experiences.map(experience => {
                        return <ProfileExperienceItem key={experience._id} {...experience}/>
                    }) 
                }
            </div>
        )
    }
}

const ProfileExperience = ProfileBox(ExperienceContent);

export default ProfileExperience;