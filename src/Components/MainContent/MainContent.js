import React from 'react';
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

export default MainContent;