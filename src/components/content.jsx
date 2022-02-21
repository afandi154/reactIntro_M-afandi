import React, { Component } from 'react'
import { ListContainer } from './style'

export default class List extends Component {
  state = {
    data: this.props.data,
    currentItem: null,
    color: "#FFDDFF"
  }
  render() {
    return (
      this.state.data.map((element, index) => {
        return (
          <ListContainer
            color={this.state.color}
            key={index}
            onClick={()=>this.setItem(element)
          }>
            <p>{element.Nama}</p>
            <p>{element.Harga}</p>
          </ListContainer>
        )
      })
    )
  }
  setItem(data){
    this.state.color = "gray"
  }
}