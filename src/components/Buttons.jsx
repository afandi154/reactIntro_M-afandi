import React, { Component } from 'react';

export default class Buttons extends Component {
  state = {
    count: 0
  }

  buttonStyles = {
    padding: "10px 25px",
    fontWeight: "bold",
    backgroundColor: "blueviolet",
    color: "white",
    border: "1px solid black",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "10px"
  }

  render() {
    return (
      <div style={{display: "flex", alignItems: "center"}}>
        <h2>{this.state.count}</h2>
        <button 
          style={this.buttonStyles}
          onClick={this.doIncrement}
        >Plus</button>
        <button 
          style={this.buttonStyles}
          onClick={this.doDecrement}
        >Min</button>
      </div>
    );
  }

  doIncrement = () => {
    let {count} = this.state;
    return this.setState({count: count+=1});
  }

  doDecrement = () => {
    let {count} = this.state;
    return (count > 0)? this.setState({count: count-=1}): count;
  }
}