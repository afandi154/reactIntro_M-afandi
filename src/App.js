import React, { Component } from 'react';
import List from './components/content';
import OutputBar from './components/head';
import { MainContent } from './components/style';
import { items } from './data';

export default class App extends Component {
  totalHarga = {
    value: 0,
    link: "https://newsapi.org/v2/everything?q=international&apiKey=f9d2f27f4a784cc7a1871946aafe7730"
  }
  render() {
    console.log(this.totalHarga.link)
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