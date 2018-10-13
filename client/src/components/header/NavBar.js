import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = props => {
    let links = [];

    switch(props.path) {
        case '/profile/edit/experience':
        case '/profile/edit':
            links = [{
                urlValue: '/profile/edit',
                urlLabel: 'Profile & Contact Info'
            },{
                urlValue: '/profile/edit/experience',
                urlLabel: 'Experience'
            },{
                urlValue: '/profile/edit/education',
                urlLabel: 'Education'
            }];
            break;

        default:
            links = [{
                urlValue: '/profile',
                urlLabel: 'Profile'
            },{
                urlValue: '/posts',
                urlLabel: 'Posts'
            },{
                urlValue: '/connections',
                urlLabel: 'Connection'
            }];
    }

    // if (props.path === '/profile/edit') {
    //     links = [{
    //         urlValue: '/profile/edit',
    //         urlLabel: 'Profile & Contact Info'
    //     },{
    //         urlValue: '/profile/edit/experience',
    //         urlLabel: 'Experience'
    //     },{
    //         urlValue: '/profile/edit/education',
    //         urlLabel: 'Education'
    //     }];
    // } else {
    //     links = [{
    //         urlValue: '/profile',
    //         urlLabel: 'Profile'
    //     },{
    //         urlValue: '/posts',
    //         urlLabel: 'Posts'
    //     },{
    //         urlValue: '/connections',
    //         urlLabel: 'Connection'
    //     }];
    // }

    return (
        <nav className="section-nav-bar">
            <div className="container nav-bar-container">
                <ul className="nav-bar">
                    {
                        links.map((link, index) => {
                            return (
                                <NavLink exact key={index} to={link.urlValue} className="nav-bar__item" activeClassName="nav-bar__item--active">
                                    <span className="nav-bar__link">{link.urlLabel}</span>
                                </NavLink>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;