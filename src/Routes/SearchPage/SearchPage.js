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
            query: '',
            searchedBooks: []
        };
    }
    
    static propTypes = {
        books: PropTypes.array.isRequired
    }
    
    updateQuery = (query) => {
        this.setState(() => ({query: query}));
        console.log('update query caleld');
        BookAPI.search(this.state.query).then((response) =>
            (this.setState((prevState) => ({searchedBooks: prevState.searchedBooks.concat(response)}))));
        console.log(BookAPI.search(query));
        //this.setState((prevState) => ({searchedBooks: prevState.searchedBooks.concat(BookAPI.search(query))}));
    }
    
    clearQuery = () => this.updateQuery('')
    
    render(){
        const { books } = this.props;
        const { query } = this.state;
        const filteredBooks = query === '' ? [] //books //This varibale filters the list of books. It can either be "books" or "[]", depending on what you want to display
            : this.state.searchedBooks.filter((book) => (  //This funciton filters the books by title and author
                book.title.toLowerCase().includes(query.toLowerCase())) //this line filters by title
                || book.authors.toString().toLowerCase().includes(query.toLowerCase())); //this line filters by title
        //console.log(searchedBooks);
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
                        <span>Now showing {searchedBooks.length} of {books.length}</span>
                        <button onClick={(event) => this.clearQuery()}>Clear Search</button>
                    </div>}
                
                <div className="book-display search-display-container">
                    {filteredBooks.map((book) => (<BookItem key={book.id}
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