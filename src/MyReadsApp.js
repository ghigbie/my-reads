import React, { Component } from 'react';
import logo from './logo.svg';
import './MyReadsApp.css';

import Header from './Components/Header/Header';
import NewReadsSection from './Components/NewReadsSection/NewReadsSection';
import ReadsSection from './Components/ReadsSection/ReadsSection';
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
          <ReadsSection className="container"
                        sectionTitles={this.sectionTitles}/>
          <Footer footerText={this.footerText}/>
      </div>
    );
  }
}

export default MyReadsApp;
