import React, { Component } from 'react';
import logo from './logo.svg';
import './MyReadsApp.css';

import Header from './Components/Header/Header';
import ReadsSection from './Components/ReadsSection/ReadsSection';
import Footer from './Components/Footer/Footer';

class MyReadsApp extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Header />
        <ReadsSection />
        <Footer />
      </div>
    );
  }
}

export default MyReadsApp;
