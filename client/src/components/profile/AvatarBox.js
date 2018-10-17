import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AvatarBox extends Component {
    render() {
        const { user, location } = this.props;
        const { name } = user;
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
                <div className="profile-base__nav">
                    <Link to="/profile" className="profile-base__nav-item link--color">View Profile</Link>
                </div>
            </div>
        )
    }
}
