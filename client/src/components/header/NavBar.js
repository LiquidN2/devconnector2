import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    let links = [];

    switch (this.props.path) {
      case '/profile/edit/education':
      case '/profile/edit/experience':
      case '/profile/edit':
        links = [{
          urlValue: '/profile/edit',
          urlLabel: 'Profile & Contact Info'
        }, {
          urlValue: '/profile/edit/experience',
          urlLabel: 'Experience'
        }, {
          urlValue: '/profile/edit/education',
          urlLabel: 'Education'
        }];
        break;

      default:
        links = [{
          urlValue: this.props.visitingUserId ? `/profile/${this.props.visitingUserId}` : '/profile',
          urlLabel: 'Profile'
        }, {
          urlValue: this.props.visitingUserId ? `/posts/${this.props.visitingUserId}` : '/posts',
          urlLabel: 'Posts'
        }, {
          urlValue: this.props.visitingUserId ? `/connections/${this.props.visitingUserId}` : '/connections',
          urlLabel: 'Connections'
        }];
    }

    return (
      <nav className="section-nav-bar">
        <div className="container nav-bar-container">
          <ul className="nav-bar">
            {
              links.map((link, index) => {
                return (
                  <NavLink 
                    exact 
                    key={index} 
                    to={link.urlValue} 
                    className="nav-bar__item" 
                    activeClassName="nav-bar__item--active"
                  >
                    <span className="nav-bar__link">{link.urlLabel}</span>
                  </NavLink>
                )
              })
            }
          </ul>
        </div>
      </nav>
    )
  }
}