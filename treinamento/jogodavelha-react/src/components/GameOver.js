import React from 'react'

export default function GameOver(props) {
  if (props.show) {
    if (props.winner === 0) {
      return (
        <div id="gameover"> 
          <h1>Fim de jogo! O Jogador 1 ganhou!</h1>
          <button id="again" onClick={props.rematch}>Jogar novamente</button>
        </div>
      )
    } else if (props.winner === 1) {
      return (
        <div id="gameover"> 
          <h1>Fim de jogo! O Jogador 2 ganhou!</h1>
          <button id="again" onClick={props.rematch}>Jogar novamente</button>
        </div>
      )
    } else {
      return (
        <div id="gameover"> 
          <h1>Deu velha!</h1>
          <button id="again" onClick={props.rematch}>Jogar novamente</button>
        </div>
      )
    }
  }
}