import React from 'react';
import './ReadsSection.css';

import ReadsSubjection from './../Components/ReadsSubsection';
import CurrentlyReading from './../CurrentlyReading/CurrentlyReading';
import WantToRead from './../WantToRead/WantToRead';
import Read from './../Read/Read';

const ReadsSection = (props) => {
    return(
        <div className="container">
            <h2>Reads Section</h2>
            <ReadsSubsection title="test"/>
        </div>
    );
};

export default ReadsSection;