import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button, Comment, Form } from 'semantic-ui-react';

class Homepage extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = "white";
  }

  // Homepage Renderer
  render(){
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/video">video</Link>
        <br></br>
        <Link to="/profile">profile</Link>

        <br></br> 
      </div>
    );
  }
  
}

export default Homepage;