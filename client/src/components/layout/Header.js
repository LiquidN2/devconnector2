import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class HeaderTop extends React.Component {
    onSubmit = event => {
        event.preventDefault();
        console.log('search');
    }

    render() {
        return (
            <div className="header-container">
                <div className="container">
                    <Link to="/">
                        <span className="logo">
                            <i className="fas fa-code fa-2x"></i>
                        </span>
                    </Link>
                    
                    <form className="search" onSubmit={this.onSubmit}>
                        <button className="search__button">
                            <span className="search__icon">
                                <i className="fas fa-search"></i>
                            </span>
                        </button>
                        <input type="text" name="search" id="search" className="search__input" placeholder="search for people" />
                    </form>

                    <nav className="user-nav">
                        <div className="user-nav__icon-box">
                            <span className="user-nav__icon">
                                <i className="far fa-comments fa-lg"></i>
                            </span>
                            <span className="user-nav__notification">7</span>
                        </div>
                        <div className="user-nav__icon-box">
                            <span className="user-nav__icon">
                                <i className="far fa-flag fa-lg"></i>
                            </span>
                            <span className="user-nav__notification">7</span>
                        </div>
                        <div className="user-nav__user">
                            <img id="user-menu-btn" src="img/user-1.jpg" className="user-nav__user-photo" />
                            <ul className="user-nav__dropdown">
                                <li className="user-nav__dropdown__arrow">
                                    <div className="arrow-up"></div>
                                </li>
                                <li className="user-nav__dropdown__item">
                                    <a href="#" className="user-nav__dropdown__link">Profile</a>
                                </li>
                                <li className="user-nav__dropdown__item">
                                    <a href="/login.html" className="user-nav__dropdown__link">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

class NavBar extends React.Component {
    render() {
        return (
            <nav className="section-nav-bar">
                <div className="container nav-bar-container">
                    <ul className="nav-bar">
                        <NavLink to="/profile" className="nav-bar__item" activeClassName="nav-bar__item--active">
                            <span className="nav-bar__link">Profile</span>
                        </NavLink>
                        <NavLink to="/posts" className="nav-bar__item" activeClassName="nav-bar__item--active">
                            <span className="nav-bar__link">Posts</span>
                        </NavLink>
                        <NavLink to="/connections" className="nav-bar__item" activeClassName="nav-bar__item--active">
                            <span className="nav-bar__link">Connections</span>
                        </NavLink>
                    </ul>
                </div>
            </nav>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <HeaderTop />
                <NavBar />
            </header>
        )
    }
}

export default Header;