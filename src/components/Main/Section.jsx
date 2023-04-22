import React from 'react';
import './Section.scss';

const Section = (props) => {
    return  (
    <section id={props.id} className="section"><p>{props.text}</p></section>
    );
}

export default Section;