import React, { Component } from 'react';
import List from './components/content';
import Counter from './components/counter';
import OutputBar from './components/head';
import { MainContent } from './components/style';

export default class App extends Component {
  render() {
    return (
      <MainContent>
        <OutputBar/>
        <List onClick={()=>{
          return "#FFAAFF"
        }}/>
        <Counter/>
      </MainContent>
      );
  }
}