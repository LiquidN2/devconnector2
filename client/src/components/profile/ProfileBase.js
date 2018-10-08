import React from 'react';

class ProfileBase extends React.Component {
    render() {
        return (
            <div className="profile-base">
                <div className="profile-base__photo-container">
                    <img src="/img/user-1.jpg" alt="user 1" className="profile-base__photo" />
                    <p className="profile-base__text-name">John Doe</p>
                    <p className="profile-base__text-location">Sydney, NSW</p>
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
                    <div className="profile-base__socials-box">
                        <span className="profile-base__socials-logo">
                            <i className="fas fa-at"></i>
                        </span>
                        <span className="profile-base__socials-text">
                            <a href="#" className="link--standard">me@johndoe.io</a>
                        </span>
                    </div>
                    <div className="profile-base__socials-box">
                        <span className="profile-base__socials-logo">
                            <i className="fas fa-globe"></i>
                        </span>
                        <span className="profile-base__socials-text">
                            <a href="#" className="link--standard" target="_blank">www.johndoe.io</a>
                        </span>
                    </div>
                    <div className="profile-base__socials-box">
                        <span className="profile-base__socials-logo">
                            <i className="fab fa-linkedin-in"></i>
                        </span>
                        <span className="profile-base__socials-text">
                            <a href="#" className="link--standard" target="_blank">linkedin.com/johndoe</a>
                        </span>
                    </div>
                    <div className="profile-base__socials-box">
                        <span className="profile-base__socials-logo">
                            <i className="fab fa-facebook-f"></i>
                        </span>
                        <span className="profile-base__socials-text">
                            <a href="#" className="link--standard" target="_blank">facebook.com/johndoe</a>
                        </span>
                    </div>
                    <div className="profile-base__socials-box">
                        <span className="profile-base__socials-logo">
                            <i className="fab fa-twitter"></i>
                        </span>
                        <span className="profile-base__socials-text">
                            <a href="#" className="link--standard" target="_blank">johndoe</a>
                        </span>
                    </div>
                    <div className="profile-base__socials-box">
                        <span className="profile-base__socials-logo">
                            <i className="fab fa-instagram"></i>
                        </span>
                        <span className="profile-base__socials-text">
                            <a href="#" className="link--standard" target="_blank">johndoe</a>
                        </span>
                    </div>
                    <div className="profile-base__socials-box">
                        <span className="profile-base__socials-logo">
                            <i className="fab fa-youtube"></i>
                        </span>
                        <span className="profile-base__socials-text">
                            <a href="#" className="link--standard" target="_blank">johndoe</a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileBase;