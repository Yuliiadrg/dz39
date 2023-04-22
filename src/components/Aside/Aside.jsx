import React from 'react';
import SectionAside from './SectionAside'
import './Aside.scss';

function Aside() {
    return (
        <aside className="aside">
            <h2 className="aside__title">News</h2>
            <SectionAside text="Hello"/>
            <SectionAside text="World"/>
            <SectionAside text="React is awesome"/>
        </aside>
    );
}

export default Aside;