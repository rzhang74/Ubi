import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loginform from './Loginform';

class Loginpage extends Component {
    render(){
        return (
            <div>
                <h1>Login Page</h1>
                <Loginform></Loginform>
            </div>
        );
    }
    
}

export default Loginpage;