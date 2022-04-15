import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Buttons } from '../components/style'

function Counter() {
  let {count} = useSelector(state => state.counter)
  let dispatch = useDispatch()
  return (
    <div style={{margin: "2em auto", textAlign: "center"}}>
      <Buttons onClick={() => dispatch({type: 'DECREMENT', value: 1})}>-</Buttons>
      <span style={{margin: "0 10px"}}>{count}</span>
      <Buttons onClick={() => dispatch({type: 'INCREMENT', value: 1})}>+</Buttons>
    </div>
  )
}

export default Counter