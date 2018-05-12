import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchPage.css';

import BackArrow from './../../Components/BackArrow/BackArrow';
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
        console.log('updateQuery Called');
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

        return(
            <div className="container">
                <BackArrow />
                <form onSubmit={this.props.searchBooks}>
                    <input type="text" 
                           name="search"
                           className="form-control"
                           placeholder="Search Books"
                           value={this.state.query}
                           onChange={(event) => this.updateQuery(event.target.value)}/>
                    {filteredBooks.length !== books.length &&
                        <div className="showing-books">
                            <p>Now showing {filteredBooks.length} of {books.length}</p>
                            <button>Clear Search</button>
                        </div>
                    }
                    
                </form>
                
                <div className="book-display search-container">
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