import React, { Component } from 'react'
import { Container } from './style'

export default class OutputBar extends Component {
  render() {
    return (
      <Container bar>
        <h1>Rp</h1>
        <h1>{this.props.totalHarga}</h1>
      </Container>
    )
  }
}