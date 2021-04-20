import React, { Component } from 'react';
import './App.css';
import MainComponent from './components/MainComponent';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainComponent />
        <Footer />
      </div>
    );
  }
}

export default App;
