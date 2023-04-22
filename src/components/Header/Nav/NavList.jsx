import React from 'react'
import NavItem from './NavItem/NavItem'


function NavList() {
    return (
            <ul className=".nav-item">
                <NavItem href="#section1" title="First Section" />
                <NavItem href="#section2" title="Second Section" />
                <NavItem href="#section3" title="Third Section" />
                <NavItem href="#section4" title="Fourth Section" />
            </ul>
    );
}

export default NavList;