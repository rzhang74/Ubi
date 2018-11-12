import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Search } from 'semantic-ui-react';
import '../css/imageheader.css';
import { connect } from 'react-redux';
import { logout } from "../actions/auth";
import PropTypes from 'prop-types';

class MyHeader extends Component {
  //logout button clicked action
  onClick = () => {
    this.props.logout(this.props.user.token);
  }
  
  //header renderer
  render() {
    return (
      <div id="header">
        <div>
          <img className='crop' id="headerimg" src= {process.env.PUBLIC_URL+"/image_headers/header1.png"} alt=""></img>
          <div className="ui container">
            <Link to="/" style={{color:"white",width:"100%", height:"100%"}}>
              <img className='logo' id="headerimg"src= {process.env.PUBLIC_URL+"logo4.png"} alt=""/>
            </Link>
          </div>
        </div>
        <div className="ui borderless menu" id="textheader">
          <div className="ui container">
            <div className="item"><Link to="/" style={{color:"white",width:"100%", height:"100%"}}>Home</Link></div>
            <a className="item">Anime</a>
            <a className="item">Gaming</a>
            <a className="item">Music</a>
            <a className="item">Dancing</a>
            <a className="item">Movies</a>
            <div className="right menu">
              <div className="item">
                <div className="ui icon input">
                  <input type="text" placeholder="Search..."/>
                  <i className="search link icon"></i>
                </div>
              </div>
              {!this.props.user.logged_in && <div className="item"><Link to="/signup" style={{color:"white"}}>Sign Up</Link></div>}
              {this.props.user.logged_in && <div className="item"><Link to="/profile" style={{color:"white"}}>Profile</Link></div>}
              {!this.props.user.logged_in && <div className="item"><Link to="/login" style={{color:"white"}}>Login</Link></div>}
              {this.props.user.logged_in && <div className="item" onClick={this.onClick}><Link to="/" style={{color:"white"}}>Logout</Link></div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MyHeader.propTypes = {
  logout: PropTypes.func.isRequired
}

const mapStateToProps = State => ({
  user: State.user
});

export default connect(mapStateToProps, {logout})(MyHeader);
