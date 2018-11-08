import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loginform from './Loginform';

class Loginpage extends Component {
    submit = data => {
      console.log(data);
    };

    render(){
        return (
            <div>
                <h1>Login Page</h1>
                <Loginform submit={this.submit}></Loginform>
            </div>
        );
    }
    
}

export default Loginpage;