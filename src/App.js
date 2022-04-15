import React, { Component } from 'react';
import List from './components/content';
import OutputBar from './components/head';
import { MainContent } from './components/style';
import { items } from './data';

export default class App extends Component {
  totalHarga = {
    value: 0
  }
  render() {
    return (
      <MainContent>
        <OutputBar totalHarga={this.totalHarga.value}/>
        {
          items.map((element, index) => {
            return <List 
              key={index} 
              nama={element.Nama} 
              harga={element.Harga}
              onAdd={(value) => this.setState({value: this.totalHarga.value += value})}
              onMin={(value) => this.setState({value: this.totalHarga.value -=  value})}
            />
          })
        }
      </MainContent>
    );
  }
}