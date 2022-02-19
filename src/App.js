import React, { Component } from 'react';
import List from './components/content';
import Counter from './components/counter';
import OutputBar from './components/head';
import { MainContent } from './components/style';

export default class App extends Component {
  items = [
    {
      "Nama" : "Topi",
      "Harga" : "Rp 25.000",
      "Quantity" : "0",
      "Total" : "0"
    },
    {
      "Nama" : "Kaos",
      "Harga" : "Rp 30.000",
      "Quantity" : "0",
      "Total" : "0"
    },
    {
      "Nama" : "Jeans",
      "Harga" : "Rp 55.000",
      "Quantity" : "0",
      "Total" : "0"
    },
    {
      "Nama" : "Sepatu",
      "Harga" : "Rp 225.000",
      "Quantity" : "0",
      "Total" : "0"
    },
    {
      "Nama" : "Jaket",
      "Harga" : "Rp 125.000",
      "Quantity" : "0",
      "Total" : "0"
    }
  ]

  render() {
    return (
      <MainContent>
        <OutputBar/>
          {
          this.items.map((data, index) => {
            return (
              <List key={index} data={data}/>
            )
          })
          }
        <Counter/>
      </MainContent>
      );
  }
}