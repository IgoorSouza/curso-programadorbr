import React from 'react'
import Tutorial from './Tutorial'
import Placar from './Placar'

export default function Menu(props) {
  return (
    <div id="menu">
      <Tutorial starter={props.starter}></Tutorial>
      <Placar pontos={props.pontos} reset={props.reset}></Placar>
    </div>
  )
}