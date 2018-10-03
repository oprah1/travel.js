import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Mytravels from "./mytravels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Voyage</h1>
        </header>

        <Mytravels
          destination="Tanzanie"
          country="Zanzibar"
          image="http://www.ledoigtdanslether.net/diz/safari-4.jpg"
          distance="7.089,04 km"
        />

        <Mytravels
          destination="Wallis et Futuna"
          country="Halalo"
          image="http://outremers360.com/wp-media/uploads/2016/02/Wonderful-Bora-Bora-Wallpaper-1.jpg"
          distance="16.161 km"
        />

      </div>
    );
  }
}

export default App;
