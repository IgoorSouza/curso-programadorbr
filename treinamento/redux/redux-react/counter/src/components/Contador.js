import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export default function Contador(props) {
  const contador = useSelector(state => { return state.counter })
  const dispatch = useDispatch()

  return (
    <div>
      <div>{contador}</div>
      <button onClick={() => { dispatch({ type: 'DECREMENT' }) }}>-</button>
      <button onClick={() => { dispatch({ type: 'INCREMENT' }) }}>+</button>
    </div>
  )
}