import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Loginpage from './components/Loginpage';
import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Route path = "/" exact component={Homepage} />
        <Route path = "/login" exact component={Loginpage} />
      </div>
    );
  }
}

export default App;
