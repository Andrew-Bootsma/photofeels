import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Photographer from './components/images/Photographer';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import UnsplashState from './context/unsplash/UnsplashState';
import AlertState from './context/alert/AlertState';

import './sass/main.scss';

const App = () => {
  return (
    <UnsplashState>
      <AlertState>
        <Router>
          <div className='container'>
            <Header />
            <Alert />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:username' component={Photographer} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </UnsplashState>
  );
};

export default App;
