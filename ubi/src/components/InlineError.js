import React, { Component } from 'react'

class InlineError extends Component {
  render() {
    return (
      <div>
        <span style={{ color: "#ae5856", float: "left"}}>{this.props.text}</span>
      </div> 
    )
  }
}

export default InlineError;
