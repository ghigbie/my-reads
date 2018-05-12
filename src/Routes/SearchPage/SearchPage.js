import React from 'react';
import PropTypes from 'prop-types';
import './SearchPage.css';

import BackArrow from './../../Components/BackArrow/BackArrow';
import BookItem  from './../../Components/BookItem/BookItem';

const SearchPage = (props) => (
    <div className="container">
        This is the search page
        <BackArrow />
        <form onSubmit={props.searchBooks}>
            <input type="text" name="search" />
        </form>
        
        <div className="book-display">
            {props.books.map((book) => (<BookItem key={book.id}
                                                  title={book.title}
                                                  authors={book.authors}
                                                  image={book.imageLinks.thumbnail}
                                                  description={book.description}
                                                  id={book.id}
                                                  shelf={book.shelf}
                                                  sectionTitles={props.sectionTitles}
                                                  changeShelf={props.changeShelf}/>))}
        </div>
    </div>
);

SearchPage.propTypes = {
    books: PropTypes.array.isRequired,
    searchBooks: PropTypes.func.isRequired
};

export default SearchPage;