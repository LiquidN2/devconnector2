import React from 'react';

import ProfileBox from './ProfileBox';

// import ProfileExperienceItem from './ProfileExperienceItem';

class SkillContent extends React.Component {
    render() {

        const { skills } = this.props;

        return (
            <div className="profile-skills__container u-margin-top-medium">
                {
                    skills.map((skill, index) => {
                        return <span key={index} className="profile-skills__item">{skill}</span>
                    })
                }

                {/* <span class="profile-skills__item">HTML</span>
                <span class="profile-skills__item">CSS3</span>
                <span class="profile-skills__item">Javascript</span>
                <span class="profile-skills__item">Node.js</span>
                <span class="profile-skills__item">Python</span>
                <span class="profile-skills__item">Git</span>
                <span class="profile-skills__item">Docker</span> */}
            </div>
        )
    }
}

const ProfileSkills = ProfileBox(SkillContent);

export default ProfileSkills;