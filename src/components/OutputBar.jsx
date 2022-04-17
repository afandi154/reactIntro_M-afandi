import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from './Style'

function OutputBar() {
  let {total} = useSelector(state => state.totalHarga)
  return (
    <Container bar>
      <h1>Rp</h1>
      <h1>{total}</h1>
    </Container>
  )
}

export default OutputBar;