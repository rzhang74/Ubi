import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Loginpage from './components/Loginpage';
import SignUppage from './components/SignUppage';
import Profilepage from './components/Profilepage';
import Videopage from './components/Videopage';
import MyHeader from './components/MyHeader';
import Animepage from './components/Animepage';
import Gamingpage from './components/Gamingpage';
import Musicpage from './components/Musicpage';
import Dancingpage from './components/Dancingpage';
import Moviespage from './components/Moviespage';

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
          <Route path = "/videos/:vid" exact component={Videopage} />
          <Route path = "/anime" exact component={Animepage} />
          <Route path = "/gaming" exact component={Gamingpage} />
          <Route path = "/music" exact component={Musicpage} />
          <Route path = "/dancing" exact component={Dancingpage} />
          <Route path = "/movies" exact component={Moviespage} />
        </div>
      </div>
    );
  }
}

export default App;
