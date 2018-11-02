import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import SocialItem from './SocialItem';

export default class AvatarBox extends Component {
  render() {
    const { user, location, numConnections } = this.props;

    return (
      <div className="profile-base">
        <div className="profile-base__photo-container">
          <img src={user.avatar} alt="user 1" className="profile-base__photo" />
          <p className="profile-base__text-name">{user.name}</p>
          <p className="profile-base__text-location">{location}</p>
        </div>

        {
          numConnections > 0 ? (
            <div className="profile-base__connections-views">
              <div className="profile-base__connections-views-box">
                <p className="profile-base__connections-views-count">{numConnections}</p>
                <p className="profile-base__connections-views-text">{numConnections > 1 ? 'connections' : 'connection'}</p>
              </div>
              <div className="profile-base__connections-views-box">
                <p className="profile-base__connections-views-count">450</p>
                <p className="profile-base__connections-views-text">views</p>
              </div>
            </div>
          ) : null
        }        

        <div className="profile-base__nav">
          <Link to="/profile" className="profile-base__nav-item link--color">View Profile</Link>
        </div>
      </div>
    )
  }
}
