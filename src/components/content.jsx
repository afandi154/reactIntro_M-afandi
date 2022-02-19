import React, { Component } from 'react'
import { ListContainer } from './style'
import { data } from './data'

export default class List extends Component {
  render() {
    return (
      data.map((data, index) => {
        return(
        <ListContainer key={index} color={this.props.onClick}>
          <p>{data.Nama}</p>
          <p>{data.Harga}</p>
        </ListContainer>
        )
      })
    )
  }
}