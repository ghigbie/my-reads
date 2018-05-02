import React, { Component } from 'react';
import './MyReadsApp.css';
import Header from './Components/Header/Header';
import MainContent from './Components/MainContent/MainContent';
import Footer from './Components/Footer/Footer';

class MyReadsApp extends Component {
  
  state = {
    books: []
  }
  
  title = 'MyReads';
  subtitle = 'The world\'s most okayist book tracker...';
  footerText = 'The best way to organize your reading endevors...';
  sectionTitles = ['Currently Reading', 'Want To Read', 'Read'];
  
  render() {
    return (
        <div>
          <Header title={this.title}
                  subtitle={this.subtitle}/>
          <MainContent sectionTitles={this.sectionTitles}
                       books={this.state.books}/>
          <Footer footerText={this.footerText}/>
      </div>
    );
  }
}

export default MyReadsApp;
