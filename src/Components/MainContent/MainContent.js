import React from 'react';
import PropTypes from 'prop-types';
import './MainContent.css';

import BookRow from './../BookRow/BookRow';

const MainContent= (props) => {
    return(
        <div className="custom-container">
            {props.sectionTitles.map((title, index) => {
                return (<BookRow key={index} title={title} />);
            })}
        </div>
    );
};

MainContent.propTypes = {
    sectionTitles: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired
};

export default MainContent;