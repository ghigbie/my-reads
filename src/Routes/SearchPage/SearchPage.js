import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';
import './SearchPage.css';

import BookItem  from './../../Components/BookItem/BookItem';

class SearchPage extends Component{
    constructor(props){
        super(props);
        this.updateQuery = this.updateQuery.bind(this);
        this.clearQuery = this.clearQuery.bind(this);
        this.state = {
            query: ''
        };
    }
    
    static propTypes = {
        searchedBooks: PropTypes.array.isRequired,
        title: PropTypes.string,
        authors: PropTypes.array,
        image: PropTypes.string,
        description: PropTypes.string,
        id: PropTypes.string,
        sectionTitle: PropTypes.string,
    }
    
    updateQuery = (query) => { 
        this.setState(() => ({query: query}));
        this.props.searchBooks(query);
    }
    
    clearQuery = () => this.updateQuery('');
    
    render(){
        const { searchedBooks } = this.props;
        return(
            <div className="books-container">
                <h5 className="search-instructions">Search by Title or &nbsp;
                    <button onClick={this.clearQuery}
                            className="btn btn-outline-primary">Clear Search</button>
                </h5>
                <form className="search-navigation">
                    <Link className="close-search" to="/">{true}</Link>
                    <DebounceInput type="text" 
                                   name="search"
                                   className="form-control search-books-bar"
                                   placeholder="Search Books"
                                   value={this.state.query}
                                   minLength={2}
                                   debounceTimeout={300}
                                   onChange={(event) => this.updateQuery(event.target.value)}/>
                </form>

                
                <div className="book-display search-display-container">
                    {searchedBooks.map((book, index) => (<BookItem key={book.id}
                                                            title={book.title}
                                                            authors={book.authors !== undefined && book.authors}
                                                            image={book.imageLinks !== undefined && book.imageLinks.thumbnail}
                                                            description={book.description}
                                                            id={book.id !== undefined && book.id}
                                                            shelf={book.shelf}
                                                            sectionTitles={this.props.sectionTitles}
                                                            isSearch={true}
                                                            changeShelf={this.props.changeShelf}/>))}
                
                </div>
            </div>);
        }
    

}


export default SearchPage;