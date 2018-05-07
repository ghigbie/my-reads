import React, {Component} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './DropdownButton.css';
import PropTypes from 'prop-types';

class DropdownButton extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
    this.forcedStyle = {
          borderRadius: '50%',
        };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} 
                      toggle={this.toggle}>
        <DropdownToggle color="primary" 
                        style={this.forcedStyle} 
                        className="book-shelf-changer">
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Move to...</DropdownItem>
          <DropdownItem>{this.props.sectionTitles[0].heading}</DropdownItem>
          <DropdownItem>{this.props.sectionTitles[1].heading}</DropdownItem>
          <DropdownItem>{this.props.sectionTitles[2].heading}</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}


DropdownButton.propTypes = {
  uniqueID: PropTypes.string.isRequired,
  sectionTitles: PropTypes.array.isRequired
};

export default DropdownButton;