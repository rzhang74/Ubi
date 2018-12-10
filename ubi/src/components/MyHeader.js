import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Search } from 'semantic-ui-react';
import '../css/imageheader.css';
import '../css/image_cell.css';
import { connect } from 'react-redux';
import { logout } from "../actions/auth";
import PropTypes from 'prop-types';

class MyHeader extends Component {
  //logout button clicked action
  state = {
    data: {
      query: '',
    }
  }

  onChange = e => 
    this.setState({
      data: {...this.state.data, [e.target.name] : e.target.value}
    });


  onClick = () => {
    this.props.logout(this.props.user.token);
  }

  clickSearch = () => {
    console.log("!!!!")
  }
  
  //header renderer
  render() {
    const {data} = this.state

    return (
      <div id="header">
        <div>
          <img className='crop' id="headerimg" src= {process.env.PUBLIC_URL+"/image_headers/header1.png"} alt=""></img>
          <div className="ui container">
            <Link to="/" style={{color:"white",width:"100%", height:"100%"}}>
              <img className='logo' id="headerimg"src= {process.env.PUBLIC_URL+"/logo4.png"} alt=""/>
            </Link>
          </div>
        </div>
        <div className="ui borderless menu" id="textheader">
          <div className="ui container">
            <div className="item"><Link to="/" style={{color:"white",width:"100%", height:"100%"}}>Home</Link></div>
            <a className="item"><Link to="/anime" style={{color:"white",width:"100%", height:"100%"}}>Anime</Link></a>
            <a className="item"><Link to="/gaming" style={{color:"white",width:"100%", height:"100%"}}>Gaming</Link></a>
            <a className="item"><Link to="/music" style={{color:"white",width:"100%", height:"100%"}}>Music</Link></a>
            <a className="item"><Link to="/dancing" style={{color:"white",width:"100%", height:"100%"}}>Dancing</Link></a>
            <a className="item"><Link to="/movies" style={{color:"white",width:"100%", height:"100%"}}>Movies</Link></a>
            <div className="right menu">
              <div className="item">
                <div className="ui icon input">
                  <input type="text" placeholder="Search..." value={data.query} onChange={this.onChange}/>
                  <i className="search link icon" onClick={this.clickSearch}></i>
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
