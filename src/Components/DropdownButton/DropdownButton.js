import React, {Component} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './DropdownButton.css';
import PropTypes from 'prop-types';

class DropdownButton extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.isSelected = this.isSelected.bind(this);
    
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
  
  isSelected = (shelfSelection) => this.props.shelf === shelfSelection ? true : false;

  static propTypes = {
      sectionTitles: PropTypes.array.isRequired
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
          <DropdownItem value={`${this.props.id},${this.props.sectionTitles[0].shelfCategory}`}
                        onClick={this.props.changeShelf}
                        selected={this.isSelected(this.props.sectionTitles[0].shelfCategory)}>
                        {this.props.sectionTitles[0].heading}</DropdownItem>
                        
          <DropdownItem value={`${this.props.id},${this.props.sectionTitles[1].shelfCategory}`}
                        onClick={this.props.changeShelf}
                        selected={this.isSelected(this.props.sectionTitles[1].shelfCategory)}>
                        {this.props.sectionTitles[1].heading}</DropdownItem>
                        
          <DropdownItem value={`${this.props.id},${this.props.sectionTitles[2].shelfCategory}`}
                        onClick={this.props.changeShelf}
                        selected={this.isSelected(this.props.sectionTitles[2].shelfCategory)}>
                        {this.props.sectionTitles[2].heading}</DropdownItem>
                        
          <DropdownItem value={`${this.props.id},none`}
                        onClick={this.props.changeShelf}>None</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default DropdownButton;