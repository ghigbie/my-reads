import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchPage.css';

import BackArrow from './../../Components/BackArrow/BackArrow';
import BookItem  from './../../Components/BookItem/BookItem';

class SearchPage extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            query: ''
        };
    }
    
    static propTypes = {
        books: PropTypes.array.isRequired,
        searchBooks: PropTypes.function.isRequired
    }
    
    render(){
        return(
            <div className="container">
                This is the search page
                <BackArrow />
                <form onSubmit={this.props.searchBooks}>
                    <input type="text" name="search" />
                </form>
                
                <div className="book-display search-container">
                    {this.props.books.map((book) => (<BookItem key={book.id}
                                                          title={book.title}
                                                          authors={book.authors}
                                                          image={book.imageLinks.thumbnail}
                                                          description={book.description}
                                                          id={book.id}
                                                          shelf={book.shelf}
                                                          sectionTitles={this.props.sectionTitles}
                                                          changeShelf={this.props.changeShelf}/>))}
                </div>
            </div>);
    }

}


export default SearchPage;