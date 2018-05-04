import React, { Component } from 'react';
import * as BookAPI from './utils/BookAPI';
import * as StarterData from './services/dataService';
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
          <Header title={StarterData.title}
                  subtitle={StarterData.subtitle}/>
          <MainContent sectionTitles={StarterData.sectionTitles}
                       books={this.state.books}/>
          <Footer footerText={StarterData.footerText}/>
      </div>
    );
  }
}

export default MyReadsApp;
