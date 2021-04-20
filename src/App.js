import React, { Component } from 'react';
import './App.css';
import MainComponent from './components/MainComponent';
import Header from './components/Header';
import Footer from './components/Footer';
// import fetch from 'cross-fetch';
import axios from 'axios';

class App extends Component {
  componentDidMount() {

    // // let a = fetch('https://jsonplaceholder.typicode.com/posts');
    // // console.log(a);

    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   // .then(response => console.log(response));
    //   .then(response => response.json())
    //   .then(data => console.log(data));

    // let a = axios.get('https://jsonplaceholder.typicode.com/posts');
    // console.log(a);

    axios.get('https://jsonplaceholder.typicode.com/posts')
      // .then(response => console.log(response));
      .then(response => response.data)
      .then(data => console.log(data));

  }
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
