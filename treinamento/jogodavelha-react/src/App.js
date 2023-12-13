import React, { useState } from 'react'
import './App.css';
import Board from './components/Board'
import Menu from './components/Menu'
import GameOver from './components/GameOver';
import casas from './data'

function App() {
  const [starterPlayer, setStarterPlayer] = useState(0)
  const [currentPlayer, setCurrentPlayer] = useState(0)
  const [winner, setWinner] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [pontosJogador1, setPontosJogador1] = useState(0)
  const [pontosJogador2, setPontosJogador2] = useState(0)
  const [contador, setContador] = useState(0)

  function marcar(event) {
    if (event.target.id) {
      if (currentPlayer === 0) {
        casas.map(casa => {
          if (casa.id === event.target.id) casa.markedPlayer1 = true
        })
        event.target.innerHTML = `<img src="/assets/images/jogador1.png" alt="Casa marcada pelo jogador 1"></img>`
        setContador(contador + 1)
        setCurrentPlayer(1)
      } else {
        casas.map(casa => {
          if (casa.id === event.target.id) casa.markedPlayer2 = true
        })
        event.target.innerHTML = `<img src="/assets/images/jogador2.png" alt="Casa marcada pelo jogador 2"></img>`
        setContador(contador + 1)
        setCurrentPlayer(0) 
      }

      if (
        (casas[0].markedPlayer1 === true && 
        casas[1].markedPlayer1 === true && 
        casas[2].markedPlayer1 === true) || 
              
        (casas[0].markedPlayer1 === true && 
        casas[3].markedPlayer1 === true && 
        casas[6].markedPlayer1 === true) || 
            
        (casas[0].markedPlayer1 === true && 
        casas[4].markedPlayer1 === true && 
        casas[8].markedPlayer1 === true) || 
            
        (casas[1].markedPlayer1 === true && 
        casas[4].markedPlayer1 === true && 
        casas[7].markedPlayer1 === true) || 
            
        (casas[2].markedPlayer1 === true && 
        casas[4].markedPlayer1 === true && 
        casas[6].markedPlayer1 === true) || 
            
        (casas[2].markedPlayer1 === true && 
        casas[5].markedPlayer1 === true && 
        casas[8].markedPlayer1 === true) || 
            
        (casas[3].markedPlayer1 === true && 
        casas[4].markedPlayer1 === true && 
        casas[5].markedPlayer1 === true) || 
           
        (casas[0].markedPlayer1 === true && 
        casas[3].markedPlayer1 === true && 
        casas[6].markedPlayer1 === true) || 
            
        (casas[6].markedPlayer1 === true && 
        casas[7].markedPlayer1 === true && 
        casas[8].markedPlayer1 === true)
      ) {
        setPontosJogador1(pontosJogador1 + 1)
        setContador(0)
        setCurrentPlayer(0)
        setStarterPlayer(0)
        setWinner(0)
        setGameOver(true)
      } else if (
        (casas[0].markedPlayer2 === true && 
        casas[1].markedPlayer2 === true && 
        casas[2].markedPlayer2 === true) || 
                
        (casas[0].markedPlayer2 === true && 
        casas[3].markedPlayer2 === true && 
        casas[6].markedPlayer2 === true) || 
              
        (casas[0].markedPlayer2 === true && 
        casas[4].markedPlayer2 === true && 
        casas[8].markedPlayer2 === true) || 
              
        (casas[1].markedPlayer2 === true && 
        casas[4].markedPlayer2 === true && 
        casas[7].markedPlayer2 === true) || 
              
        (casas[2].markedPlayer2 === true && 
        casas[4].markedPlayer2 === true && 
        casas[6].markedPlayer2 === true) || 
              
        (casas[2].markedPlayer2 === true && 
        casas[5].markedPlayer2 === true && 
        casas[8].markedPlayer2 === true) || 
              
        (casas[3].markedPlayer2 === true && 
        casas[4].markedPlayer2 === true && 
        casas[5].markedPlayer2 === true) || 
              
        (casas[0].markedPlayer2 === true && 
        casas[3].markedPlayer2 === true && 
        casas[6].markedPlayer2 === true) || 
              
        (casas[6].markedPlayer2 === true && 
        casas[7].markedPlayer2 === true && 
        casas[8].markedPlayer2 === true)
      ) {
        setPontosJogador2(pontosJogador2 + 1)
        setContador(0)
        setCurrentPlayer(1)
        setStarterPlayer(1)
        setWinner(1)
        setGameOver(true)
      } else if (contador === 8 && gameOver === false) {
        setContador(0)
        setWinner(2)
        setGameOver(true)
        setCurrentPlayer(starterPlayer)
      }
    }
}

function reiniciarPlacar() {
  setPontosJogador1(0)
  setPontosJogador2(0)
  setCurrentPlayer(0)
  setStarterPlayer(0)
}

function jogarNovamente() {
  setGameOver(false)
  casas.map(casa => {
    casa.markedPlayer1 = false
    casa.markedPlayer2 = false
    document.getElementById(casa.id).innerHTML = ""
  }) 
}

  return (
    <div className="App">
      <h1 id="titulo">JOGO DA VELHA</h1>
      <div id="container">
        <Board marcar={marcar}></Board>

        <Menu 
          pontos={[pontosJogador1, pontosJogador2]} 
          reset={reiniciarPlacar}
          starter={starterPlayer}> 
        </Menu>

        <GameOver 
          show={gameOver} 
          winner={winner} 
          rematch={jogarNovamente}>
        </GameOver>
      </div>
    </div>
  );
}

export default App;