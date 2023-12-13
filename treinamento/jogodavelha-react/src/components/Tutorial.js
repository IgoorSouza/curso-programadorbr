import React from 'react'

export default function Tutorial(props) {
  return (
    <div id="tutorial">
      <h1>Como funciona</h1>

      <p className="description">
        O <span className="jogador1">Jogador 1</span> começará a primeira rodada e, a partir da segunda, o ganhador da rodada anterior irá começar. O jogador a iniciar a rodada permanece o mesmo até o outro jogador ganhar uma rodada.
      </p>

      <p className="description" id="starter">
        Começa a rodada atual: <br />
        {props.starter % 2 === 0 ? 
        <span className="jogador1">Jogador 1</span> : 
        <span className="jogador2">Jogador 2</span>}
      </p>
    </div>
  )
}