import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = "white";
  }

  render(){
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/login">Login</Link>
      </div>
    );
  }
  
}

export default Homepage;