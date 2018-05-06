import React from 'react';
import './DropdownButton.css';
import PropTypes from 'prop-types';

const DropdownButton = (props) => (
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
);

DropdownButton.propTypes = {
  uniqueID: PropTypes.string.isRequired  
};

export default DropdownButton;