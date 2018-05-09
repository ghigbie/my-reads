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
    this.componentDidMount = this.componentDidMount.bind(this);    
    
    this.state = {
      books: []
    };
  }
  
  componentDidMount(){
    BookAPI.getAll()
      .then((booksRequested) => {
        this.setState(() => ({books: booksRequested }));
        console.log(this.state.books);
      });
  }
  
  handleChangeShelf(e){
    const selectedBook = e.currentTarget.value.split(','); //This gets the object an turns it into an array
    const targetID = selectedBook[0]; //This is the value of the ID, which was on the first item on the array
    const targetShelf = selectedBook[1]; //This is the shelf that the book should move to, which was on the second element of the array
    const targetBook = this.state.books.filter((book) => book.id === targetID); //This is an array with the book that is to be changed
    const targetBookIndex = this.state.books.findIndex((book) => book.id === targetID); //This is the index of the book that is to changed
    targetBook[0].shelf = targetShelf;
    let newBooksArray = this.state.books; //This is the original array. 
    newBooksArray[targetBookIndex].shelf = targetShelf; //This changes the shelf of the one item in the array
    this.setState(() => ({books: newBooksArray})); //This sets the state of the books item in state.
    BookAPI.update(targetBook[0], targetShelf) //This updates the data base
      .then((response) => {
    });
  }
  
  render() {
    return (
        <div>
            <Header title={starterData.title}
                    subtitle={starterData.subtitle}/>
            <Switch>
              <Route path="/" exact render={() => (
                <MainContent sectionTitles={starterData.sectionTitles}
                             books={this.state.books}
                             changeShelf={this.handleChangeShelf}/>)} />
              <Route path="/add" component={AddBook} />
              <Route path="/search" component={SearchPage} />
              <Route path="*" component={NotFound} />
            </Switch>
            <Footer footerText={starterData.footerText}/>
      </div>
    );
  }
}

export default MyReadsApp;
