import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BookRow.css';

import BookItem from './../BookItem/BookItem';

class BookRow extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    }
    
    render(){
        return(
            <div>
                <h4 className="book-title">{this.props.title}</h4>
                <div className="books-container row">
                    {this.props.books.map((book) => {
                        return (<BookItem key={book.id}
                                          title={book.title}
                                          author={book.authors}
                                          image={book.imageLinks.smallThumbnail}
                                          description={book.description}/>);
                    })}
                </div>
            </div>
        );
    }
}

export default BookRow;