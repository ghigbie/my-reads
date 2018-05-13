import React, { Component } from 'react';
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
        books: PropTypes.array.isRequired
    }
    
    updateQuery = (query) => {
        this.setState(() => ({query: query.trim()}));
    }
    
    clearQuery = () => this.updateQuery('')
    
    render(){
        const { books } = this.props;
        const { query } = this.state;
        const filteredBooks = query === '' ? books //This varibale filters the list of books
            : books.filter((book) => (  //This funciton filters the books by title and author
                book.title.toLowerCase().includes(query.toLowerCase())) //this line filters by title
                || book.authors.toString().toLowerCase().includes(query.toLowerCase())); //this line filters by title
        const style = {display: 'inline'};
        
        return(
            <div className="container">
                <form className="search-navigation">
                    <a className="close-search" href="/"></a>
                    <input type="text" 
                           name="search"
                           className="form-control search-books-bar"
                           placeholder="Search Books"
                           value={this.state.query}
                           onChange={(event) => this.updateQuery(event.target.value)}/>
                </form>
                {filteredBooks.length !== books.length &&
                    <div className="showing-books">
                        <span>Now showing {filteredBooks.length} of {books.length}</span>
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