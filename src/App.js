import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bnk2JSON from './bnk2_list'
let girls = bnk2JSON.bnk2_list;
let all_girls = girls;
class App extends Component {
  popGirl(){
    let currentGirl = girls.pop(); 
    return currentGirl;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.popGirl()}
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
