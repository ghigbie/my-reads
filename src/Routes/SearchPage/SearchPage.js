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
            query: 'react'
        };
    }
    
    static propTypes = {
        books: PropTypes.array.isRequired
    }
    
    updateQuery = (query) => {
        console.log('updateQuery Called');
        this.setState(() => {{query: query.trim()}});
    }
    
    clearQuery = () => this.updateQuery('')
    
    render(){
        const { query } = this.state;
        const { books } = this.props;
        return(
            <div className="container">
                This is the search page
                <BackArrow />
                <form onSubmit={this.props.searchBooks}>
                    <input type="text" 
                           name="search"
                           className="form-control"
                           placeHolder="Search Books"
                           value={this.state.query}
                           onChange={true}/>
                </form>
                
                <div className="book-display search-container">
                    {this.props.books.filter((book) => book.title === query).map(
                        (book) => (<BookItem key={book.id}
                                                          title={book.title}
                                                          authors={book.authors}
                                                          image={book.imageLinks.thumbnail}
                                                          description={book.description}
                                                          id={book.id}
                                                          shelf={book.shelf}
                                                          sectionTitles={this.props.sectionTitles}
                                                          changeShelf={this.props.changeShelf}/>))}
                        
                    
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