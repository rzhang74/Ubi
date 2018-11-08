import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SignUpform from './SignUpform';
import '../css/form.css';

class SignUppage extends Component {
  submit = data => {
    // console.log(data);
    this.props.signup(data).then(() => this.props.history.push("/"));
  };

  render() {
    return (
      <div class="ui middle aligned center aligned grid">
        <div class="column">
          <h1>Sign Up</h1>
          <SignUpform submit={this.submit}></SignUpform>

          <br></br>
          <div class="ui message">
            Already registered?  <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUppage;
