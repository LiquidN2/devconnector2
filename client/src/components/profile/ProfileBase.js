import React from 'react';

import SocialItem from './SocialItem';

const ProfileBase = props => {
    const { user, handle, website, location, social, githubUser } = props;
    const { email } = user;
    const { linkedin, facebook, twitter, instagram, youtube } = social;

    return (
        <div className="profile-base">
            <div className="profile-base__photo-container">
                <img src={user.avatar} alt="user 1" className="profile-base__photo" />
                <p className="profile-base__text-name">{user.name}</p>
                <p className="profile-base__text-location">{location}</p>
            </div>
            <div className="profile-base__connections-views">
                <div className="profile-base__connections-views-box">
                    <p className="profile-base__connections-views-count">300</p>
                    <p className="profile-base__connections-views-text">connections</p>
                </div>
                <div className="profile-base__connections-views-box">
                    <p className="profile-base__connections-views-count">450</p>
                    <p className="profile-base__connections-views-text">views</p>
                </div>
            </div>
            <div className="profile-base__socials">
                {handle ? <SocialItem urlType="handle" urlValue={handle} /> : null}
                {githubUser ? <SocialItem urlType="github" urlValue={githubUser} /> : null}
                {email ? <SocialItem urlType="email" urlValue={email} /> : null}
                {website ? <SocialItem urlType="website" urlValue={website} /> : null}
                {linkedin ? <SocialItem urlType="linkedin" urlValue={linkedin} /> : null}
                {twitter ? <SocialItem urlType="twitter" urlValue={twitter} /> : null}
                {facebook ? <SocialItem urlType="facebook" urlValue={facebook} /> : null}
                {instagram ? <SocialItem urlType="instagram" urlValue={instagram} /> : null}
                {youtube ? <SocialItem urlType="youtube" urlValue={youtube} /> : null}
            </div>
        </div>
    );

}

export default ProfileBase;