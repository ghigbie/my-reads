import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BookRow.css';

class BookRow extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    
    render(){
        return(
            <div>
                <h4 className="book-title">{this.props.title}</h4>
                <div className="books-container">
            
                </div>
            </div>
        );
    }
}

export default BookRow;