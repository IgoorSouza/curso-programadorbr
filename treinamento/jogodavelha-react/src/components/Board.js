import React from 'react'
import casas from '../data'

export default function Board(props) {
  return (
    <div id="jogo">
      {casas.map((casa, index) => {
        return <div id={casa.id} key={index} onClick={props.marcar}></div>
      })}
    </div>
  )
}