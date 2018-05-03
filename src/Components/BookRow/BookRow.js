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
                    {this.props.books.filter((book) => book.shelf === this.props.title).map((book) => {
                        return (<BookItem key={book.id}
                                          title={book.title}
                                          authors={book.authors}
                                          image={book.imageLinks.thumbnail}
                                          description={book.description}
                                          shelf={book.shelf}/>);
                    })}
                </div>
            </div>
        );
    }
}

export default BookRow;