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
        // BookAPI.search(query).then((response) =>
        //     (this.setState(() => ({searchedBooks: response}))));
        // console.log('update query called');
        // BookAPI.search(this.state.query).then((response) =>
        //     (this.setState((prevState) => ({searchedBooks: prevState.searchedBooks.concat(response)}))));
        // console.log(BookAPI.search(query));
        //this.setState((prevState) => ({searchedBooks: prevState.searchedBooks.concat(BookAPI.search(query))}));
    }
    
    clearQuery = () => this.updateQuery('')
    
    ComponentDidMount(){
        // BookAPI.search('a')
        //     .then((response) => {
        //     this.setState(() => ({searchedBooks: response}));
        //     console.log(response);
        // });
        // console.log(this.state.searchedBooks)
    }
    
    render(){
        const { query } = this.state;
        const filteredBooks = query === '' ? [] //searchedBooks //This varibale filters the list of books. It can either be "books" or "[]", depending on what you want to display
            : this.props.searchedBooks.filter((book) => (  //This funciton filters the books by title and author
                book.title.toLowerCase().includes(query.toLowerCase())) //this line filters by title
                || book.authors.toString().toLowerCase().includes(query.toLowerCase())); //this line filters by title
        console.log('FILTERED', filteredBooks);
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
                {filteredBooks.length > 0 &&
                    <div className="showing-books">
                        <span>Now showing {filteredBooks.length} of {this.props.searchedBooks.length}</span>
                        <button onClick={(event) => this.clearQuery()}>Clear Search</button>
                    </div>}
                
                <div className="book-display search-display-container">
                    {filteredBooks.map((book) => (<BookItem key={book.id}
                                                            title={book.title}
                                                            authors={book.authors}
                                                            image={book.imageLinks.thumbnail}
                                                            
                                                            id={book.id}
                                                            shelf={book.shelf}
                                                            sectionTitles={this.props.sectionTitles}
                                                            changeShelf={this.props.changeShelf}/>))}
                </div>
            </div>);
    }

}


export default SearchPage;