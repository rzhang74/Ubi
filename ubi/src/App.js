import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Loginpage from './components/Loginpage';
import SignUppage from './components/SignUppage';
import Profilepage from './components/Profilepage';
import Videopage from './components/Videopage';
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
          <Route path = "/profile" exact component={Profilepage} />
          <Route path = "/video" exact component={Videopage} />
        </div>
      </div>
    );
  }
}

export default App;
