import React from "react"

export default function Placar(props) {
  return (
    <div id="placar">
      <h1>Placar atual</h1>

      <h2 className="jogador1">
        <span id="nomej1">Jogador 1</span>:
        <span id="pontosj1"> {props.pontos[0]} pontos</span>
      </h2>

      <h2 className="jogador2">
        <span id="nomej2">Jogador 2</span>:
        <span id="pontosj2"> {props.pontos[1]} pontos</span>
      </h2>

      <button onClick={props.reset}>Reiniciar placar</button>
      <p>Obrigado por jogar!</p>
    </div>
  )
}