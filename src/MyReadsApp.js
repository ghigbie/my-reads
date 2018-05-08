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
  
  state = {
    books: []
  }
  
  componentDidMount(){
    BookAPI.getAll()
      .then((booksRequested) => {
        this.setState(() => ({books: booksRequested }));
        console.log(this.state.books);
      });
  }
  
  handleChangeShelf(e){
    alert('Handle change shelf called');
    let targetShelf = e.currentTarget.value;
    alert(targetShelf);
    console.log(e.currentTarget.value.toString());
    // this.setState((prevState) => ({
    //   books: prevState.books.filter
    // })
    BookAPI.update(targetShelf) //Book needs to be passed here
      .then((response) => {
      console.log(response);
    });
    BookAPI.getAll()
      .then((booksRequested) => {
        this.setState(() => ({books: booksRequested }));
        console.log("After update: ", this.state.books);
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
