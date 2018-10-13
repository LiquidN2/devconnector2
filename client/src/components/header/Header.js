import React from 'react';

import HeaderTop from './HeaderTop';
import NavBar from './NavBar';

const Header = props => {
    return (
        <header className="header">
            <HeaderTop />
            <NavBar path={props.path}/>
        </header>
    );
}

export default Header;

