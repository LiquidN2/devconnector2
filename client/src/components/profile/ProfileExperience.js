import React from 'react';

import ProfileBox from './ProfileBox';

import ProfileExperienceItem from './ProfileExperienceItem';

const ExperienceContent = props => {
    const { experiences } = props;
    return (
        <div className="profile-experience__container u-margin-top-3rem">
            {
                experiences.map(experience => {
                    return (
                        <ProfileExperienceItem 
                            key={experience._id} 
                            {...experience} 
                            withTools={props.withTools}
                            onShowItemToEdit={props.onShowItemToEdit}
                        />
                    )
                })
            }
        </div>
    );
}

const ProfileExperience = ProfileBox(ExperienceContent);

export default ProfileExperience;