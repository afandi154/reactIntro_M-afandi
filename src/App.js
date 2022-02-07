import React, { Component } from 'react';
import Buttons from './components/Buttons';

export default class App extends Component {
  styles = {
    width: "80%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid black"
  }
  render() {
    return (
      <div style={this.styles}>
        <h1>Hello {this.props.input}</h1>
        <Buttons />
      </div>
    );
  }
}