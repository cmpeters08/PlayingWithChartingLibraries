import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StackedBar from './Componenets/stackedBar';
import MyTime from './Componenets/mytimeBar';

class App extends Component {
  render() {
    return (
    <div class="chartContainer">
      <div className="App">     
        <StackedBar />
        </div>
      <div className="myTimeContainer">
        <MyTime />
        </div>
      </div>

    );
  }
}

export default App;
