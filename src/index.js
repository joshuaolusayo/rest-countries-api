import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './css/style.css';

import Header from './components/header';
import Search from './components/search';
import Countries from './components/countries';

class App extends Component {
  render () {
    return (
      <div className="">
        <Header />
        <Search />
      </div>
    )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path='/' component={App}></Route>
    </div>
  </BrowserRouter>, 
document.getElementById('root'));