import React, { Component } from 'react';
import Header from './components/layout/Header';
import Images from './components/images/Images';
import axios from 'axios';
import './sass/main.scss';

class App extends Component {
  componentDidMount() {
    axios
      .get('https://api.unsplash.com/images')
      .then(res => console.log(res.data));
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <Images />
      </div>
    );
  }
}

export default App;
