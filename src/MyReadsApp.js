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
    const isSearch = selectedBook[2];//This determines if the book was from the searched books. THIS VALUE IS A STRING
    const newBooksArray = this.state.books;//This is duplicate of the books array. It is used for further modification.
    let targetBook;
    if(isSearch === 'true'){
      targetBook = this.state.searchedBooks.filter((book) => book.id === targetID)[0]; //this identif
      targetBook['shelf'] = targetShelf;//this adds the shelf property to book object that does not have a shelf property
      this.setState((prevState) => ({searchedBooks: prevState.searchedBooks.filter((book) => book.id !== targetID)}));
      this.setState((prevState) => ({books: prevState.books.concat(targetBook)})); //this adds the searched book to the books array
    }else{
      if(targetShelf === 'none'){//If none is selected, then this book should be removed'
         this.setState((prevState) => ({books: prevState.books.filter((book) => book.id !== targetID)})); //this removes the book by modifying the array
      }
      targetBook = this.state.books.filter((book) => book.id === targetID)[0];
      const targetBookIndex = this.state.books.findIndex((book) => book.id === targetID);
      newBooksArray[targetBookIndex].shelf = targetShelf;//This changes the shelf of the one item in the array
      this.setState((prevState) => ({books: newBooksArray})); //This sets the state of the new array
    }
    BookAPI.update(targetBook, targetShelf) //This updates the data base
      .then((response) => {});
  }
  
  handleSearchBooks(query){
    const queryAPI = query.trim();
    if(queryAPI){
      BookAPI.search(queryAPI)
        
        .then((response) => {
          if(response.error === "empty query"){
            this.setState(() => ({searchedBooks: []}));
          }else{
            //response.filter((book) => book.id.find(id => book.id))
            let filtered = []; //creates an empty array 
            for(let i = 0; i < this.state.books.length; i++){ //loops through books
              for(let j = 0; j < response.length; j++){ //compares values of response with books
                if(this.state.books[i].id === response[j].id){ //compares the id's to the books
                  response.splice(j, 1); //removes the matchign value in the respponse
                  filtered.push(this.state.books[i]); //this adds vales to the formerly empty array
                }
              }
            }
            let allBooks = response.concat(filtered);//This creates a new array, which is the response and the filtered array
            this.setState(() => ({searchedBooks: allBooks}));
          }
        })
        .catch((err) => {
            console.log('THIS IS THE ERROR', err);
            this.setState(() => ({searchedBooks: []}));
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
