import React from 'react';
import './MainSection.css';

import BookRow from './../Components/BookRow/BookRow';

const MainSection = (props) => {
    return(
        <div className="custom-container">
            <h2>Reads Section</h2>
            <BookRow title="test"/>
        </div>
    );
};

export default MainSection;