import React from 'react';
import List from './components/List';
import OutputBar from './components/OutputBar';
import { MainContent } from './components/Style';
import { items } from './data';

function App() {
  return (
    <MainContent>
      <OutputBar/>
      {
        items.map((element, index) => {
          return <List 
            key={index} 
            nama={element.Nama} 
            harga={element.Harga}
          />
        })
      }
    </MainContent>
  )
}

export default App;