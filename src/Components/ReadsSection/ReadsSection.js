import React from 'react';

import CurrentlyReading from './../CurrentlyReading/CurrentlyReading';
import WantToRead from './../WantToRead/WantToRead';
import Read from './../Read/Read';

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