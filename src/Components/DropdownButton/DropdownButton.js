import React from 'react';
import './DropdownButton.css';

const DropdownButton = () => (
            <div className="dropdown">
                <button className="book-shelf-changer" 
                        type="button" 
                        id={props.id}
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

export default DropdownButton;