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
      books: [],
      activeIndex: undefined
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
    const selectedBook = e.currentTarget.value.split(',');
    const targetID = selectedBook[0];
    const targetShelf = selectedBook[1]
    const targetBook = this.state.books.filter((book) => book.id === targetID);
    const targetBookIndex = this.state.books.findIndex((book) => book.id === targetID);
    console.log(targetBook);
    let newBooksArray = this.state.books;
    newBooksArray[targetBookIndex] = targetBook;
    this.setState(() => {books: newBooksArray});
    console.log("After first update: ", this.state.books);
    BookAPI.update(this.state.books[targetBookIndex], targetShelf) //Book needs to be passed here
      .then((response) => {
      console.log(response);
    });
    BookAPI.getAll()
      .then((booksRequested) => {
        this.setState(() => ({books: booksRequested }));
        console.log('After update: ', this.state.books);
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
