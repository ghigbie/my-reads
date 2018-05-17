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
    console.log("Selectedbook", selectedBook);
    const targetID = selectedBook[0]; //This is the value of the ID, which was on the first item on the array
    const targetShelf = selectedBook[1]; //This is the shelf that the book should move to, which was on the second element of the array
    let isSearch = selectedBook[2];//This determines if the book was from the searched books
    console.log("ISSEARCH", typeof(isSearch));
    let newBooksArray = this.state.books;
    let targetBook;
    if(isSearch === 'true'){
      console.log("search running");
      targetBook = this.state.searchedBooks.filter((book) => book.id === targetID)[0]; //this identif
      targetBook['shelf'] = targetShelf;//this adds the shelf property to book object that does not have a shelf property
      this.setState((prevState) => ({searchedBooks: prevState.searchedBooks.filter((book) => book.id !== targetID)}));
      this.setState((prevState) => ({books: prevState.books.concat(targetBook)})); //this adds the searched book to the books array
      console.log(targetBook);
    }else{
      console.log("not search running");
      if(targetShelf === 'none'){//If none is selected, then this book should be removed'
         this.setState((prevState) => ({books: prevState.books.filter((book) => book.id !== targetID)})); //this removes the book by modifying the array
      }
      targetBook = this.state.books.filter((book) => book.id === targetID)[0];
      const targetBookIndex = this.state.books.findIndex((book) => book.id === targetID);
      newBooksArray[targetBookIndex].shelf = targetShelf;
      this.setState((prevState) => ({books: newBooksArray}));
      console.log(targetBook);
    }
    console.log("Target Book Done", targetBook);
    BookAPI.update(targetBook, targetShelf) //This updates the data base
      .then((response) => {});
  }
    
    //this.setState((prevState) => ({books: newBooksArray}))
    
    // isSearch === true ? targetArray = this.state.searchedBooks : targetArray = this.state.books;
    // console.log("Target array" , targetArray);
    
    // const newBooksArray = this.state.books; //This is the original array. 
    // let targetBook;
    // isSearch === true &&
    //   console.log('searched running');
    //   targetBook = this.state.searchedBooks.filter((book) => book.id === targetID)[0]; //This is the array with the book that is be be changed
    //   targetBook['shelf'] = targetShelf;  //This adds the shelf property to the object. It does not exist for searched books array
    //   newBooksArray.concat(targetBook);
    //   console.log("Target book is Search", targetBook);
    //   if(targetShelf === 'none'){
    //     this.setState((prevState) => ({books: prevState.searchedBooks.filter((book) => book.id !== targetID)}));
    //   }
    // isSearch === false &&
    //   console.log('not serached running');
    //   targetBook = this.state.books.filter((book) => book.id === targetID)[0];//This is an array with the book that is to be changed
    //   const targetBookIndex = this.state.books.findIndex((book) => book.id === targetID); //This is the index of the book that is to changed
    //   newBooksArray[targetBookIndex].shelf = targetShelf; //This changes the shelf of the one item in the array
    //   console.log("Target book is NOT Search", targetBook);
    //   if(targetShelf === 'none'){//If none is selected, then this book should be removed'
    //     this.setState((prevState) => ({books: prevState.books.filter((book) => book.id !== targetID)})); //this removes the book by modifying the array
    //   }
    // console.log("Target book done", targetBook);
    // this.setState(() => ({ books: newBooksArray })); //This sets the state of the books item in state.
    // BookAPI.update(targetBook, targetShelf) //This updates the data base
    //   .then((response) => {});
  //}
  
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
