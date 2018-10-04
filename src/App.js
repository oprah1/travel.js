import React, { Component } from 'react';
import './App.css';

import Header from './component/Header'
// import Travel from './component/Travel'
import Travels from './component/Travels'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
        <p>  
          <Travels />
        </p>

      </div>
    );
  }
}

export default App;
