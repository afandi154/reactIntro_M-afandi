import React, { Component } from 'react'
import { ListContainer } from './style'

export default class List extends Component {
  currentItem = null;
  data = this.props.data;
  render() {
    return (
      <ListContainer onClick={() => 
        this.setItem(this.data)
      }>
        <p>{this.data.Nama}</p>
        <p>{this.data.Harga}</p>
      </ListContainer>
    )
  }
  setItem(data){
    this.currentItem = data.Nama;
    console.log(this.currentItem)
  }
}