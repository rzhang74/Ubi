import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Search } from 'semantic-ui-react';
import '../css/imageheader.css';
import { connect } from 'react-redux';
import { logout } from "../actions/auth";
import PropTypes from 'prop-types';

class MyHeader extends Component {
  onClick = () => {
    this.props.logout(this.props.user.token);
  }
  
  render() {
    return (
      <div id="header">
        <div>
          <img class='crop' src= {process.env.PUBLIC_URL+"/image_headers/header1.png"} alt=""></img>
          <div class="ui container">
            <Link to="/" style={{color:"white",width:"100%", height:"100%"}}>
              <img class='logo' src= {process.env.PUBLIC_URL+"logo4.png"} alt=""/>
            </Link>
          </div>
        </div>
        <div class="ui borderless menu" id="textheader">
          <div className="ui container">
            <div class="item"><Link to="/" style={{color:"white",width:"100%", height:"100%"}}>Home</Link></div>
            <a class="item">Anime</a>
            <a class="item">Gaming</a>
            <a class="item">Music</a>
            <a class="item">Dancing</a>
            <a class="item">Movies</a>
            <div class="right menu">
              <div class="item">
                <div class="ui icon input">
                  <input type="text" placeholder="Search..."/>
                  <i class="search link icon"></i>
                </div>
              </div>
              <div class="item"><Link to="/signup" style={{color:"white"}}>Sign Up</Link></div>
              {!this.props.user.logged_in && <div class="item"><Link to="/login" style={{color:"white"}}>Login</Link></div>}
              {this.props.user.logged_in && <div class="item" onClick={this.onClick}><Link to="/" style={{color:"white"}}>Logout</Link></div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MyHeader.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = State => ({
  user: State.user
});

export default connect(mapStateToProps, {logout})(MyHeader);
