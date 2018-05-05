import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BookRow.css';

import BookItem from './../BookItem/BookItem';

class BookRow extends Component{
    static propTypes = {
        heading: PropTypes.string.isRequired,
        shelfCategory: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    }
    
    render(){
        return(
            <div>
                <h4 className="shelf-title">{this.props.heading}</h4>
                <div className="books-container row">
                {console.log(this.props.sectionTitles)}
                    {this.props.books.filter((book) => 
                        book.shelf === this.props.shelfCategory).map((book) => {
                            return (<BookItem key={book.id}
                                              title={book.title}
                                              authors={book.authors}
                                              image={book.imageLinks.thumbnail}
                                              description={book.description}
                                              id={book.id}
                                              shelf={book.shelf}/>);
                    })}
                </div>
            </div>
        );
    }
}

export default BookRow;