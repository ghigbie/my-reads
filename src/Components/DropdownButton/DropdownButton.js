import React, {Component} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './DropdownButton.css';
import PropTypes from 'prop-types';

class DropdownButton extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.isActive = this.isActive.bind(this);
    
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
  
  isActive = (shelfSelection) => this.props.shelf === shelfSelection ? true : false;

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
          {this.props.sectionTitles.map((sectionTitle, index) => 
            (<DropdownItem key={index}
                          value={`${this.props.id},${sectionTitle.shelfCategory}`}
                          onClick={this.props.changeShelf}
                          active={this.isActive(sectionTitle.shelfCategory)}>
                          {sectionTitle.heading}</DropdownItem>))}
          <DropdownItem value={`${this.props.id},${this.props.sectionTitles[0].shelfCategory}`}
                        onClick={this.props.changeShelf}
                        active={this.isActive(this.props.sectionTitles[0].shelfCategory)}>
                        {this.props.sectionTitles[0].heading}</DropdownItem>
                        
          <DropdownItem value={`${this.props.id},${this.props.sectionTitles[1].shelfCategory}`}
                        onClick={this.props.changeShelf}
                        active={this.isActive(this.props.sectionTitles[1].shelfCategory)}>
                        {this.props.sectionTitles[1].heading}</DropdownItem>
                        
          <DropdownItem value={`${this.props.id},${this.props.sectionTitles[2].shelfCategory}`}
                        onClick={this.props.changeShelf}
                        active={this.isActive(this.props.sectionTitles[2].shelfCategory)}>
                        {this.props.sectionTitles[2].heading}</DropdownItem>
                        
          <DropdownItem value={`${this.props.id},none`}
                        onClick={this.props.changeShelf}>None</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default DropdownButton;