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
      dropdownOpen: !this.state.dropdownOpen,
      shelf: this.value
    });
  }
  
  static propTypes = {
      sectionTitles: PropTypes.array.isRequired,
      id: PropTypes.string.isRequired,
      changeShelf: PropTypes.func.isRequired
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
          {this.props.sectionTitles.map((sectionTitle, index) => 
            (<DropdownItem key={index}
                          value={`${this.props.id},${sectionTitle.shelfCategory},${this.props.isSearch}`}
                          onClick={this.props.changeShelf}
                          active={sectionTitle.shelfCategory === this.props.shelf}>
                          {sectionTitle.heading}</DropdownItem>))}
          <DropdownItem value={`${this.props.id},none,${this.props.isSearch}`}
                        onClick={this.props.changeShelf}
                        active={!this.props.shelf}>
                        None</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default DropdownButton;