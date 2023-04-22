import React from 'react';
import './SectionAside.scss';

const SectionAside = (props) => {
    return (
        <section className="sectionAside">
            <p className="sectionAside__text">
                {props.text}</p>
        </section>
    );
}

export default SectionAside;