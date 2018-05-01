import React from 'react';

import CurrentlyReading from './../CurrentlyReading';
import WantToRead from './../WantToRead';
import Read from './../Read';

const ReadsSection = (props) => {
    return(
        <div>
            <h2>Reads Section</h2>
            <CurrentlyReading />
            <WantToRead />
            <Read />
        </div>
    );
};

export default ReadsSection;