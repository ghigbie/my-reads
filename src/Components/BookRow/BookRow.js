import React from 'react';
import PropTypes from 'prop-types';
import './BookRow.css';

import BookItem from './../BookItem/BookItem';

const BookRow = (props) => 
    (<div>
        <h4 className="shelf-title">{props.heading}</h4>
        <div className="books-container row">
            {props.books.filter((book) => 
                book.shelf === props.shelfCategory).map((book) => {
                    return (<BookItem key={book.id}
                                            title={book.title}
                                            authors={book.authors}
                                            image={book.imageLinks.thumbnail}
                                            description={book.description}
                                            id={book.id}
                                            shelf={book.shelf}
                                            sectionTitles={props.sectionTitles}
                                            isSearch={false}
                                            changeShelf={props.changeShelf}/>);
            })}
        </div>
    </div>
);

BookRow.propTypes = {
    heading: PropTypes.string.isRequired,
    shelfCategory: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    sectionTitles: PropTypes.array.isRequired
};

export default BookRow;