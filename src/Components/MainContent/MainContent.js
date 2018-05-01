import React from 'react';
import './MainContent.css';

import BookRow from './../Components/BookRow/BookRow';

const MainContent= (props) => {
    return(
        <div className="custom-container">
            <h2>Reads Section</h2>
            <BookRow title="test"/>
        </div>
    );
};

export default MainContent;