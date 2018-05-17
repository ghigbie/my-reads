import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as BookAPI from './utils/BookAPI';
import * as starterData from './services/starterData';
import './MyReadsApp.css';

import Header from './Components/Header/Header';
import MainContent from './Components/MainContent/MainContent';
import Footer from './Components/Footer/Footer';
//routes
import AddBook from './Routes/AddBook/AddBook';
import SearchPage from './Routes/SearchPage/SearchPage';
import NotFound from './Routes/NotFound/NotFound';

class MyReadsApp extends Component {
  constructor(props){
    super(props);
    this.handleChangeShelf = this.handleChangeShelf.bind(this);
    this.handleSearchBooks = this.handleSearchBooks.bind(this);
    this.state = {
      books: [],
      searchedBooks: []
    };
  }
  
  componentDidMount(){
    BookAPI.getAll()
      .then((booksRequested) => {
        this.setState(() => ({ books: booksRequested} ));
      });
  }
  
  handleChangeShelf(e){
    const selectedBook = e.currentTarget.value.split(','); //This gets the object an turns it into an array
    const targetID = selectedBook[0]; //This is the value of the ID, which was on the first item on the array
    const targetShelf = selectedBook[1]; //This is the shelf that the book should move to, which was on the second element of the array
    const isSearch = selectedBook[2];//This determines if the book was from the searched books
    console.log("ISSEARCH", isSearch);
    const newBooksArray = this.state.books; //This is the original array. 
    let targetBook;
    if(isSearch === true){
      targetBook = this.state.searchedBooks.filter((book) => book.id === targetID)[0]; //This is the array with the book that is be be changed
      targetBook['shelf'] = targetShelf;  //This adds the shelf property to the object. It does not exist for searched books array
      newBooksArray.concat(targetBook);
      if(targetShelf === 'nonne'){
        this.setState((prevState) => ({books: prevState.searchedBooks.filter((book) => book.id !== targetID)}));
      }
    }else if(isSearch === false){
      targetBook = this.state.books.filter((book) => book.id === targetID)[0]; //This is an array with the book that is to be changed
      const targetBookIndex = this.state.books.findIndex((book) => book.id === targetID); //This is the index of the book that is to changed
      newBooksArray[targetBookIndex].shelf = targetShelf; //This changes the shelf of the one item in the array
      if(targetShelf === 'none'){//If none is selected, then this book should be removed'
        this.setState((prevState) => ({books: prevState.books.filter((book) => book.id !== targetID)})); //this removes the book by modifying the array
    }
    console.log(targetBook);
    this.setState(() => ({ books: newBooksArray })); //This sets the state of the books item in state.
    BookAPI.update(targetBook, targetShelf) //This updates the data base
      .then((response) => {});
  }
  
  handleSearchBooks(query){
    const queryAPI = query.trim();
    if(queryAPI){
      BookAPI.search(queryAPI)
        .then((response) => {
            this.setState(() => ({searchedBooks: response}));
          });
    }else{
      this.setState(() => ({searchedBooks: []}));
    }
  }
  
  
  render() {
    return (
        <div>
            <Header title={starterData.title}
                    subtitle={starterData.subtitle}/>
            <Switch>
              <Route path="/" exact render={() => (
                <MainContent books={this.state.books}
                             changeShelf={this.handleChangeShelf}
                             sectionTitles={starterData.sectionTitles}/>)} />
              <Route path="/add" 
                     component={AddBook} />
              <Route path="/search" render={() => (
                <SearchPage searchedBooks={this.state.searchedBooks}
                            changeShelf={this.handleChangeShelf}
                            searchBooks={this.handleSearchBooks}
                            sectionTitles={starterData.sectionTitles}/>)} />
              <Route path="*" component={NotFound} />
            </Switch>
            <Footer footerText={starterData.footerText}/>
      </div>
    );
  }
}

export default MyReadsApp;
