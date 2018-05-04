import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BookAPI from './utils/BookAPI';
import * as starterData from './services/starterData';
import './MyReadsApp.css';

import Header from './Components/Header/Header';
import MainContent from './Components/MainContent/MainContent';
import Footer from './Components/Footer/Footer';

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
          <Route path="/" render={() => (
          <div>
            <Header title={starterData.title}
                    subtitle={starterData.subtitle}/>
            <MainContent sectionTitles={starterData.sectionTitles}
                         books={this.state.books}/>
            <Footer footerText={starterData.footerText}/>
          </div>)
          }/>
      </div>
    );
  }
}

export default MyReadsApp;
