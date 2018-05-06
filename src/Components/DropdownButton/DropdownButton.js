import React from 'react';
import {Dropdown, DropdownTrigger, DropdownContent} from 'react-simple-dropdown'
import './DropdownButton.css';
import PropTypes from 'prop-types';

const DropdownButton = (props) => (
  <Dropdown>
                <DropdownTrigger>Profile</DropdownTrigger>
                <DropdownContent>
                    <img src="avatar.jpg" /> Username
                    <ul>
                        <li>
                            <a href="/profile">Profile</a>
                        </li>
                        <li>
                            <a href="/favorites">Favorites</a>
                        </li>
                        <li>
                            <a href="/logout">Log Out</a>
                        </li>
                    </ul>
                </DropdownContent>
            </Dropdown>
);

DropdownButton.propTypes = {
  uniqueID: PropTypes.string.isRequired  
};

export default DropdownButton;