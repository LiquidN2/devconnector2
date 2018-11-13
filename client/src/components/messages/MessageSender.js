import React, { Component } from 'react'

export default class MessageSender extends Component {
  render() {
    return (
      <div className="message-sender">
        <div className="profile-base u-border-none">
          <div className="profile-base__photo-container">
            <img src="/img/user-1.jpg" alt="user 1" className="profile-base__photo" />
            <p className="profile-base__text-name">John Doe</p>
            <p className="profile-base__text-location">Sydney, NSW</p>
          </div>
          <div className="profile-base__socials">
            <a href="#" className="profile-base__socials-link link--standard">
              <span className="profile-base__socials-logo"><i className="fas fa-code"></i></span>
              johndoe
              </a>
            <a href="#" className="profile-base__socials-link link--standard">
              <span className="profile-base__socials-logo"><i className="fas fa-at"></i></span>
              me@johndoe.io
              </a>
            <a href="#" className="profile-base__socials-link link--standard">
              <span className="profile-base__socials-logo"><i className="fas fa-globe"></i></span>
              johndoe.io
              </a>
            <a href="#" className="profile-base__socials-link link--standard">
              <span className="profile-base__socials-logo"><i className="fab fa-linkedin-in"></i></span>
              www.linkedin.com/johndoe
              </a>
            <a href="#" className="profile-base__socials-link link--standard">
              <span className="profile-base__socials-logo"><i className="fab fa-facebook-f"></i></span>
              www.facebook.com/johndoe
              </a>
            <a href="#" className="profile-base__socials-link link--standard">
              <span className="profile-base__socials-logo"><i className="fab fa-twitter"></i></span>
              johndoe
              </a>
            <a href="#" className="profile-base__socials-link link--standard">
              <span className="profile-base__socials-logo"><i className="fab fa-instagram"></i></span>
              johndoe
              </a>
            <a href="#" className="profile-base__socials-link link--standard">
              <span className="profile-base__socials-logo"><i className="fab fa-youtube"></i></span>
              johndoe
              </a>
          </div>
        </div>
      </div>
    )
  }
}
