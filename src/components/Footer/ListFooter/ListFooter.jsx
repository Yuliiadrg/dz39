import React from 'react'
import NavItem from '../../Header/Nav/NavItem/NavItem'
import './ListFooter.scss'


function ListFooter() {
    return (
            <ul className="list">
                <NavItem href="#section1" title="WOOOOOW First Section" />
                <NavItem href="#section2" title="I Second Section" />
                <NavItem href="#section3" title=" LOVE Third Section" />
                <NavItem href="#section4" title=" REACT Fourth Section" />
            </ul>
    );
}

export default ListFooter;