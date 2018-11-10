import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from './InlineError';

class Loginform extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  }

  onChange = e => 
    this.setState({
      data: {...this.state.data, [e.target.name] : e.target.value}
    });

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

  validate = (data) => {
    const errors = {};
    if(!Validator.isEmail(data.email)) errors.email = "Invalid email, qwq.";
    if(!data.password) errors.password = "Did you type your password, meow?";
    return errors;
  };

  render() {
    const { data } = this.state;
    const { errors } = this.state;

    return (
      <Form class="ui large form" onSubmit={this.onSubmit}>
        {errors.global && 
        <Message negative>
          <Message.Header>Whoops owo, something went wrong</Message.Header>
          <p>{errors.global}</p>
        </Message>}
        <div class="ui stacked segment">
          <Form.Field error={!!errors.email}>
            <label htmlFor="email">Email</label>
            <div class="ui left icon input">
              <i class="envelope icon"></i>
              <input type="email" id="email" name="email" placeholder="example@example.com" value={data.email} onChange={this.onChange}></input>
            </div>
            {errors.email && <InlineError text={errors.email}/>}
          </Form.Field>
          <Form.Field error={!!errors.password}>
            <label htmlFor="password">Password</label>
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" id="password" name="password" placeholder="Make it secure :)" value={data.password} onChange={this.onChange}></input>
            </div>
            {errors.password && <InlineError text={errors.password}/>}
          </Form.Field>
          {/* <Button primary>Login</Button> */}
          <br></br>
          <button class="fluid medium ui green button">Login</button>
        </div>
      </Form>
    )
  }
}

export default Loginform;
