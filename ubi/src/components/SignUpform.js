import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from './InlineError';

class SignUpform extends Component {
  state = {
    data: {
      username: '',
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  }

  //form placeholder type in handler
  onChange = e => 
    this.setState({
      data: {...this.state.data, [e.target.name] : e.target.value}
    });

  //sign up form submit button clicked
  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({errors})
    if(Object.keys(errors).length === 0){
      this.props.submit(this.state.data)
      .catch(err => this.setState({ 
        errors: {...this.state.errors, ["global"] : err.message} 
      }));
    }
  };

  //sign up form validator
  validate = (data) => {
    const errors = {};
    if(!data.username) errors.username = "Can't be blank, meow.";
    if(!Validator.isEmail(data.email)) errors.email = "Invalid email, qwq.";
    if(!data.password) errors.password = "Did you type your password, meow?";
    return errors;
  };

  //sign up form renderer
  render() {
    const { data } = this.state;
    const { errors } = this.state;
    
    return (
      <div>
          <Form className="ui large form" onSubmit={this.onSubmit}>
            <div className="ui stacked segment">
              <Form.Field error={!!errors.username}>
                <label htmlFor="username">Username</label>
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input id="username" name="username" placeholder="Whatevery name u want :)" value={data.username} onChange={this.onChange}></input>
                </div>
                {errors.username && <InlineError text={errors.username}/>}
              </Form.Field>

              <Form.Field error={!!errors.email}>
                <label htmlFor="email">Email</label>
                <div className="ui left icon input">
                  <i className="envelope icon"></i>
                  <input type="email" id="email" name="email" placeholder="example@example.com" value={data.email} onChange={this.onChange}></input>
                </div>
                {errors.email && <InlineError text={errors.email}/>}
              </Form.Field>

              <Form.Field error={!!errors.password}>
                <label htmlFor="password">Password</label>
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input type="password" id="password" name="password" placeholder="Make it secure :)" value={data.password} onChange={this.onChange}></input>
                </div>
                {errors.password && <InlineError text={errors.password}/>}
              </Form.Field>
              
              {/* <Button primary>Sign Up</Button> */}
              <br></br>
              <button className="fluid medium ui green button">Sign up</button>
            </div>
          </Form>
        
      </div>
    )
  }
}

export default SignUpform;
