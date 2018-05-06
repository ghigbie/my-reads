import React from 'react';
import './DropdownButton.css';
import PropTypes from 'prop-types';

const DropdownButton = (props) => (
    <div className="dropdown btn-bottom">
        <button className="book-shelf-changer" 
                type="button" 
                id={props.uniqueID}
                data-toggle="dropdown" 
                aria-haspopup="true">
        </button>
        <div className="dropdown-menu" 
             aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" 
               href="#">Action</a>
            <a className="dropdown-item" 
               href="#">Another action</a>
            <a className="dropdown-item"
               href="#">Something else here</a>
        </div>
    </div>
);

DropdownButton.propTypes = {
  uniqueID: PropTypes.string.isRequired  
};

export default DropdownButton;