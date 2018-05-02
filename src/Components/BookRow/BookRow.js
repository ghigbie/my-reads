import React, { Component } from 'react';
import './BookRow.css';

class BookRow extends Component{
    render(){
        return(
            <div>
                <h4 className="book-title">{this.props.title}</h4>
                <hr />
                <div className="books-container">
                
                </div>
            </div>
        );
    }
}

export default BookRow;