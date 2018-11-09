import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Search } from 'semantic-ui-react';
import '../css/imageheader.css';

class MyHeader extends Component {
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
              <div class="item"><Link to="/login" style={{color:"white"}}>Login</Link></div>
              {/* <a class="item">Login<Link to="/login">Login</Link></a> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MyHeader;
