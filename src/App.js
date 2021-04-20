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

    // axios.get('https://jsonplaceholder.typicode.com/posts')
    //   // .then(response => console.log(response));
    //   .then(response => response.data)
    //   .then(data => console.log(data));

    // retrieve & error handle
    // axios.get('http://localhost:3001/dishes')
    //   // .then(response => console.log(response));
    //   .then(response => response.data)
    //   .then(data => console.log(data))
    //   // .catch(error => console.log(error))
    //   .catch(error => console.log(error.message));

    //create
    // axios.post('http://localhost:3001/dishes', {
    //   name: '7UP',
    //   image: '',
    //   category: 'drink',
    //   label: '',
    //   price: '70',
    //   featured: false,
    //   description: 'Get inspired to mix it up a little with 7UP! Crisp and refreshing, it mixes into all kinds of drinks, cocktails, punches, baked goods, and more, perfect for you!',
    // }).then(response => console.log(response));

    // update
    // axios.put('http://localhost:3001/dishes/6', {
    //   name: '7UP',
    //   image: 'assets/images/67up.jpg',
    //   category: 'drink',
    //   label: '',
    //   price: '70',
    //   featured: false,
    //   description: 'Get inspired to mix it up a little with 7UP! Crisp and refreshing, it mixes into all kinds of drinks, cocktails, punches, baked goods, and more, perfect for you!',
    // }).then(response => console.log(response));

    //delete
    // axios.delete('http://localhost:3001/dishes/7').then(response => console.log(response));


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
