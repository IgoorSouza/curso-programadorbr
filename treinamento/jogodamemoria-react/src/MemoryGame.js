import React, {useState, useEffect} from 'react'
import GameOver from './components/GameOver'
import GameBoard from './components/GameBoard'
import game from './game/game'

export default function MemoryGame() {
  const [cards, setCards] = useState([])
  const [gameOver, setGameOver] = useState(false)

  useEffect(()=>{
    setCards(game.createCardsFromTechs())
  }, [])

  function restart() {
    game.clearCards()
    setCards(game.createCardsFromTechs())
    setGameOver(false)
  }

  function handleFlip(card) {
    game.flipCard(card.id, () => {
      setGameOver(true)
    }, () => {
      setCards([...game.cards])
    })
    setCards([...game.cards])
}

  return (
    <div>
      <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
      <GameOver show={gameOver} handleRestart={restart}></GameOver>
    </div>
  )
}