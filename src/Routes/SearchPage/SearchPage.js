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
        const { query } = this.state;
        const searchingBooks = this.state.query === '' ? this.state.books :   //This varibale filters the list of books
            this.state.books.filter((book) => book.title.toLowercase().includes(this.state.query.toLowercase())
            || book.authors.toString().toLowercase().includes(this.state.query.toLowercase()));

        return(
            <div className="container">
                {this.state.query}
                <BackArrow />
                <form onSubmit={this.props.searchBooks}>
                    <input type="text" 
                           name="search"
                           className="form-control"
                           placeholder="Search Books"
                           value={this.state.query}
                           onChange={(event) => this.updateQuery(event.target.value)}/>
                </form>
                
                <div className="book-display search-container">
                    {this.props.books.filter((book) => book.title === this.state.query).map(
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