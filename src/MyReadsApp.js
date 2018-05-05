import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as BookAPI from './utils/BookAPI';
import * as starterData from './services/starterData';
import './MyReadsApp.css';

import Header from './Components/Header/Header';
import MainContent from './Components/MainContent/MainContent';
import Footer from './Components/Footer/Footer';
//routes
import BookInfo from './Routes/BookInfo/BookInfo';
import AddBook from './Routes/AddBook/AddBook';
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
  
  render() {
    return (
        <div>
            <Header title={starterData.title}
                    subtitle={starterData.subtitle}/>
            <Switch>
              <Route path="/" exact render={() => (
                <MainContent sectionTitles={starterData.sectionTitles}
                             books={this.state.books}/>)} />
              <Route path="/add" component={AddBook} />
              <Route path="/:id" component={BookInfo} />
              <Route path="*" component={NotFound} />
            </Switch>
            <Footer footerText={starterData.footerText}/>
      </div>
    );
  }
}

export default MyReadsApp;
