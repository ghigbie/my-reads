import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MainContent.css';

import BookRow from './../BookRow/BookRow';

const MainContent = (props) => (
    <div className="custom-container">
        {props.sectionTitles.map((title, index) => {
            return (<BookRow key={index} 
                             heading={title.heading}
                             shelfCategory={title.shelfCategory}
                             books={props.books}/>);
        })}
        <div>
        <NavLink to="/add" className="book-adder"/>
        </div>
    </div>
    
);

MainContent.propTypes = {
    sectionTitles: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired
};

export default MainContent;