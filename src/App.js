import React, { Component } from 'react';
import List from './components/content';
import Counter from './components/counter';
import OutputBar from './components/head';
import { MainContent } from './components/style';
import { items } from './data';

export default class App extends Component {
  render() {
    return (
      <MainContent>
        <OutputBar/>
        <List data={items}/>
        <Counter/>
      </MainContent>
      );
  }
}