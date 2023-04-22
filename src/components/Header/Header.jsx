import React from 'react'
import NavList from './Nav/NavList'
import Logo from './Logo'
import './Header.scss'

function Header() {
    return (
        <header className="header">
            <Logo/>
            <nav>
                <NavList/>
            </nav>
        </header>
    );
}

export default Header;
