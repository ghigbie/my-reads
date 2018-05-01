import React, { Component } from 'react';
import logo from './logo.svg';
import './MyReadsApp.css';

import Header from './Components/Header/Header';
import ReadsSection from './Components/ReadsSection/ReadsSection';
import Footer from './Components/Footer/Footer';

class MyReadsApp extends Component {
  
  title = 'MyReads';
  subtitle = 'The world\'s most okayist book tracker...';
  
  render() {
    return (
        <div>
          <Header title={this.title}
                  subtitle={this.subtitle}/>
                  
          <ReadsSection className="container" />
          <Footer />
      </div>
    );
  }
}

export default MyReadsApp;
