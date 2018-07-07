import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import MyComponent from './Components/MyTree';
import CenteredTree from './Components/CenteredTree';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body>
        <div className="chart">
          <CenteredTree />
        </div>
        </body>
      </div>
    );
  }
}

export default App;
