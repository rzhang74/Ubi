import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Loginpage from './components/Loginpage';
import SignUppage from './components/SignUppage';
import MyHeader from './components/MyHeader';

class App extends Component {
  render() {
    return (
      <div>
        <MyHeader/>
        <div className="ui container">
          <Route path = "/" exact component={Homepage} />
          <Route path = "/login" exact component={Loginpage} />
          <Route path = "/signup" exact component={SignUppage} />
        </div>
      </div>
    );
  }
}

export default App;
