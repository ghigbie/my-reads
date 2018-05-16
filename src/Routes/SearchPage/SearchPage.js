import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BookAPI from './../../utils/BookAPI';
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
        searchedBooks: PropTypes.array.isRequired
    }
    
    updateQuery = (query) => {
        this.setState(() => ({query: query}));
        this.props.searchBooks(query);
        
        //this.props.searchBooks(this.state.query);
        //this.props.searchBooks(this.state.query);
        // BookAPI.search(query).then((response) =>
        //     (this.setState(() => ({searchedBooks: response}))));
        // console.log('update query called');
        // BookAPI.search(this.state.query).then((response) =>
        //     (this.setState((prevState) => ({searchedBooks: prevState.searchedBooks.concat(response)}))));
        // console.log(BookAPI.search(query));
        //this.setState((prevState) => ({searchedBooks: prevState.searchedBooks.concat(BookAPI.search(query))}));
    }
    
    clearQuery = () => this.updateQuery('')
    
    // ComponentDidMount(){
    //     BookAPI.search('a')
    //       .then((response) => {
    //         this.setState(() => ({searchedBooks: response}));
    //       console.log("called", response);
    //       });
    //     // console.log(this.state.searchedBooks)
    // }
    BookAPI
    
    
    render(){
        // const { query } = this.state;
        // const filteredBooks = query === '' ? [] //searchedBooks //This varibale filters the list of books. It can either be "books" or "[]", depending on what you want to display
        //     : this.props.searchedBooks.filter((book) => (  //This funciton filters the books by title and author
        //         book.title.toLowerCase().includes(query.toLowerCase())) //this line filters by title
        //         || book.authors && book.authors.toString().toLowerCase().includes(query.toLowerCase())); //this line filters by title
        //console.log('FILTERED', filteredBooks);
        const { searchedBooks } = this.props;
        
        return(
            <div className="books-container">
                <h5 className="search-instructions">Search by Title or by Author</h5>
                <form className="search-navigation">
                    <a className="close-search" href="/">{true}</a>
                    <input type="text" 
                           name="search"
                           className="form-control search-books-bar"
                           placeholder="Search Books"
                           value={this.state.query}
                           onChange={(event) => this.updateQuery(event.target.value)}/>
                </form>

                {console.log(this.state.query)}
                {console.log(this.props.searchedBooks)}
                {this.props.searchBooks.length > 0 && 
                
                (<div className="book-display search-display-container">
                    {searchedBooks.map((book, index) => (<BookItem key={index}
                                                            title={book.title}
                                                            authors={book.authors !== undefined && book.authors}
                                                            image={book.imageLinks !== undefined && book.imageLinks.thumbnail}
                                                            description={book.description}
                                                            id={book.id !== undefined && book.id}
                                                            shelf={book.shelf}
                                                            sectionTitles={this.props.sectionTitles}
                                                            changeShelf={this.props.changeShelf}/>))}
                
                </div>)}
            </div>);
    }

}


export default SearchPage;