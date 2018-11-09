import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loginform from './Loginform';
import { login } from "../actions/auth";
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../css/form.css';

class Loginpage extends Component {
  
  submit = data => {
    // console.log(data);
    this.props.login(data).then(() => this.props.history.push("/"));
  };

  render(){
    return (
      <div class="ui middle aligned center aligned grid" id="auth">
        <div class="column">
          <h1>Login</h1>
          <Loginform submit={this.submit}></Loginform>

          <br></br>
          <div class="ui message">
            New to us?  <Link to="/signup">Register</Link>
          </div>
        </div>
      </div>
    );
  }
    
}

Loginpage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default connect(null, { login })(Loginpage);