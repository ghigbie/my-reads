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
  
  handleChoice(){
    alert('Yeah!');
  }
  
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
          
          <DropdownItem value={this.props.sectionTitles[0].shelfCategory}
                        onChange={this.props.changeShelf}>
                        {this.props.sectionTitles[0].heading}</DropdownItem>
                        
          <DropdownItem value={this.props.sectionTitles[0].shelfCategory}
                        onChange={this.props.changeShelf}>
                        {this.props.sectionTitles[1].heading}</DropdownItem>
                        
          <DropdownItem value={this.props.sectionTitles[0].shelfCategory}
                        onChange={this.props.changeShelf}>
                        {this.props.sectionTitles[2].heading}</DropdownItem>
                        
          <DropdownItem>None</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default DropdownButton;