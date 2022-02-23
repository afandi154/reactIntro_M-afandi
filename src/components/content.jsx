import React, { Component } from 'react'
import { Buttons, CounterContainer, ListContainer } from './style'

export default class List extends Component {
  property = {
    "Quantity" : 0,
    "Harga" : this.props.harga
  }

  render() {
    return (
      <ListContainer >
        <p>{this.props.nama} - Rp {this.property.Harga}</p>
        <CounterContainer>
          <Buttons onClick={this.minQuantity}> - </Buttons>
          <p style={{margin: "0 0.5em"}}>
            {this.property.Quantity}
          </p>
          <Buttons onClick={this.addQuantity}> + </Buttons>
        </CounterContainer>
      </ListContainer>
    )
  }

  addQuantity = () => {
    this.setState({
      Quantity: this.property.Quantity += 1
    }, () => this.props.onAdd(this.property.Harga))
  }

  minQuantity = () => {
    if(this.property.Quantity > 0) {
      return this.setState({
        Quantity: this.property.Quantity -= 1
      }, () => this.props.onMin(this.property.Harga))
    }
  }
}