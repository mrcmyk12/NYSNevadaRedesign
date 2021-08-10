import React, { Component } from 'react';

import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
        </style>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
