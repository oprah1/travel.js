import React, { Component } from 'react';
import './App.css';

import Header from './component/Header'
import Travel from './component/Travel'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
        <p>  
          <Travel country="France" destination="Paris" image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/1200px-Paris_-_Eiffelturm_und_Marsfeld2.jpg" distance="10000 km"/> 
        </p>
        <Travel country="France" destination="Marseille" image="https://madeinmarseille.net/actualites-marseille/2017/11/date-cle-histoire-marseille.jpg" distance="10000 km"/> 
      </div>
    );
  }
}

export default App;
