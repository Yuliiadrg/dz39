import React from 'react';
import './NavItem.scss';

const NavItem = (props) => {
    return (
        <li className="list">
            <a href={props.href}> {props.title}</a>
        </li>
    );
}


export default NavItem;