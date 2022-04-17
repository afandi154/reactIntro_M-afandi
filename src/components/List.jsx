import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Buttons, CounterContainer, ListContainer } from './Style'

function List({nama, harga}) {
  let [quantity, setQuantity] = useState(0)
  let dispatch = useDispatch();

  return (
    <ListContainer >
      <p>{nama} - Rp {harga}</p>
      <CounterContainer>
        <Buttons onClick={() => {
          if(quantity > 0) {
            setQuantity(quantity-1)
            dispatch({type: 'DECREMENT', value: harga})
          }
        }}> - </Buttons>
        <p style={{margin: "0 0.5em"}}>
          {quantity}
        </p>
        <Buttons onClick={() => {
          setQuantity(quantity+1)
          dispatch({type: 'INCREMENT', value: harga})
        }}> + </Buttons>
      </CounterContainer>
    </ListContainer>
  )
}

export default List;