import React, { Component } from 'react'
import { Buttons, Container } from './style'

export default class Counter extends Component {
  render() {
    return (
      <Container>
        <Buttons>{"-"}</Buttons>
        <h2>0</h2>
        <Buttons>{"+"}</Buttons>
      </Container>
    )
  }
}