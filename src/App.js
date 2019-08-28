import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Images from './components/images/Images';
import User from './components/images/Photographer';
import Search from './components/images/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import './sass/main.scss';

class App extends Component {
  state = {
    images: [],
    user: {},
    loading: false,
    alert: null
  };

  // Search Unsplash images
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

  // Get Unsplash user
  getUser = async username => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.unsplash.com/users/${username}`, {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`
      }
    });

    this.setState({ user: res.data, loading: false });
  };

  // Get photographers repos

  // Clear images from state
  clearImages = () => this.setState({ images: [], loading: false });

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { images, user, loading } = this.state;

    return (
      <Router>
        <div className='container'>
          <Header />
          <Alert alert={this.state.alert} />
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Fragment>
                  <Search
                    searchImages={this.searchImages}
                    clearImages={this.clearImages}
                    showClear={images.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Images loading={loading} images={images} />
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route
              exact
              path='/user/:username'
              render={props => (
                <User
                  {...props}
                  getUser={this.getUser}
                  user={user}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
