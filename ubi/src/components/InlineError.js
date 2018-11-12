import React, { Component } from 'react'

class InlineError extends Component {
  //inline error renderer if there is error in the form
  render() {
    return (
      <div>
        <span style={{ color: "#ae5856", float: "left"}}>{this.props.text}</span>
      </div> 
    )
  }
}

export default InlineError;
