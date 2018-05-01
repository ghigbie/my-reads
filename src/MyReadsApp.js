import React, { Component } from 'react';
import logo from './logo.svg';
import './MyReadsApp.css';

import Header from './Components/Header/Header';
import ReadsSection from './Components/ReadsSection/ReadsSection';
import Footer from './Components/Footer/Footer';

class MyReadsApp extends Component {
  
  state = {
    books: []
  }
  
  title = 'MyReads';
  subtitle = 'The world\'s most okayist book tracker...';
  footerText = 'The best way to organize your reading endevors...';
  
  render() {
    return (
        <div>
          <Header title={this.title}
                  subtitle={this.subtitle}/>
          <ReadsSection className="container" />
          <Footer footerText={this.footerText}/>
      </div>
    );
  }
}

export default MyReadsApp;
