import React, { Component } from 'react';
import Header from './components/layout/Header';
import Images from './components/images/Images';
import Search from './components/images/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';
import './sass/main.scss';

class App extends Component {
  state = {
    images: [],
    loading: false,
    alert: null
  };

  // Search UnSplash images
  searchImages = async text => {
    this.setState({ loading: true });

    const res = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: `${text}` },
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`
      }
    });

    this.setState({ images: res.data.results, loading: false });
  };

  // Clear images from state
  clearImages = () => this.setState({ images: [], loading: false });

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { images, loading } = this.state;

    return (
      <div className='container'>
        <Header />
        <Alert alert={this.state.alert} />
        <Search
          searchImages={this.searchImages}
          clearImages={this.clearImages}
          showClear={images.length > 0 ? true : false}
          setAlert={this.setAlert}
        />
        <Images loading={loading} images={images} />
      </div>
    );
  }
}

export default App;
