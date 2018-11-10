import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SignUpform from './SignUpform';
import { signup } from "../actions/auth";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/form.css';

class SignUppage extends Component {

  submit = data => 
    // console.log(data);
    this.props.signup(data).then(() => this.props.history.push("/login"));
  

  render() {
    return (
      <div class="ui middle aligned center aligned grid" id="auth">
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

SignUppage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
}

export default connect(null, { signup })(SignUppage);
